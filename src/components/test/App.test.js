import React from "react";
import App from "../../App";

import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, screen } from "../../constants/test-util";
import { fakeTemplates } from "../../constants/constants";

export const handlers = [
    rest.get(
        "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates",
        (req, res, ctx) => {
            return res(ctx.json(fakeTemplates), ctx.delay(150));
        }
    ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("integration test", () => {
    test("all components and user interact in one integration test", async () => {
        // render the app component
        render(<App />);

        //check if the info bar, search and select forms are in the document
        expect(screen.getByTestId("search-field")).toBeInTheDocument();
        expect(screen.getByTestId("Category")).toBeInTheDocument();
        expect(screen.getByTestId("Order")).toBeInTheDocument();
        expect(screen.getByTestId("Date")).toBeInTheDocument();
        expect(screen.getByTestId("info")).toBeInTheDocument();

        //check if they are disbaled while fetching data to avoid user interaction
        expect(screen.getByTestId("search-field")).toBeDisabled();
        expect(screen.getByTestId("Category")).toBeDisabled();
        expect(screen.getByTestId("Order")).toBeDisabled();
        expect(screen.getByTestId("Date")).toBeDisabled();

        //check if they are enabled after data is been fetched
        await new Promise((r) => setTimeout(r, 500));

        // await waitForElementToBeRemoved(() => screen.getByText(/loading templates.../i));
        expect(screen.getByTestId("search-field")).toBeEnabled();
        expect(screen.getByTestId("Category")).toBeEnabled();
        expect(screen.getByTestId("Order")).toBeEnabled();
        expect(screen.getByTestId("Date")).toBeEnabled();

        //check if the pagination elements are in the dounment
        expect(screen.getByTestId("Next")).toBeInTheDocument();
        expect(screen.getByTestId("Previous")).toBeInTheDocument();
        expect(screen.getByTestId("page-count")).toBeInTheDocument();

        //chech if the page-count is correct
        expect(screen.getByText(/of 2/i)).toBeInTheDocument();

        //checking the length of template rendered
        expect(screen.getAllByTestId("temp").length).toBe(15);

        //user interaction with the searchfield
        fireEvent.change(screen.getByTestId("search-field"), {
            target: { value: "consequat." },
        });

        //test the number of templated returned from the search
        expect(screen.getAllByTestId("temp").length).toBe(4);
        expect(screen.getByText(/4 templates/i)).toBeInTheDocument();

        //user interaction with the sortby category
        fireEvent.change(screen.getByTestId("Category"), {
            target: { value: "Health" },
        });

        //the header should be Health Templates
        expect(screen.getByText(/Health Templates/i)).toBeInTheDocument();

        // should also resets all other filters and the Search bar value. making the curent page template to be 15 again
        expect(screen.getAllByTestId("temp").length).toBe(15);

        //user interaction with the pagination button next
        fireEvent.click(screen.getByTestId("Next"));

        //expects total template rendered to be 1, since total length of template is 16 and going to the next page will have only template left
        expect(screen.getAllByTestId("temp").length).toBe(1);

        //test if button is disabled and page count doesnt increase
        fireEvent.click(screen.getByTestId("Next"));

        //total templates should till be 1
        expect(screen.getAllByTestId("temp").length).toBe(1);

        //user interaction with the pagination button previous
        fireEvent.click(screen.getByTestId("Previous"));

        //espects total number of templates returned to be 15 since we're back to the first page
        expect(screen.getAllByTestId("temp").length).toBe(15);

        //user interaction with search field
        fireEvent.change(screen.getByTestId("search-field"), {
            target: { value: "laboris." },
        });

        //user interaction with sortby oder
        fireEvent.change(screen.getByTestId("Order"), {
            target: { value: "Ascending" },
        });

        //user interaction with sortby date
        fireEvent.change(screen.getByTestId("Date"), {
            target: { value: "Descending" },
        });

        //interacting with sortby date should reset sortby category
        expect(screen.getByTestId("Order").value).toBe("Default");

        //user interacting with sortby category should reset all other filter
        fireEvent.change(screen.getByTestId("Category"), {
            target: { value: "Education" },
        });

        expect(screen.getByTestId("search-field").value).toBe("");
        expect(screen.getByTestId("Date").value).toBe("Default");

        expect(screen.getByText(/Education Templates/i)).toBeInTheDocument();
    });
});
