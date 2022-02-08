import React from "react";
import Header from "../header/Header";
import App from "../../App";

import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, screen, waitForElementToBeRemoved } from "../../constants/test-util";
import userEvent from "@testing-library/user-event";
import { fakeTemplates } from "../../constants/constants";

const fakenTemplates = [
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.118701",
        description: "irure pariatur. ullamco reprehenderit proident,",
        link: "https://formpl.us/templates",
        name: "occaecat nostrud nulla",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.298432",
        description: "velit incididunt eiusmod fugiat occaecat",
        link: "https://formpl.us/templates",
        name: "consequat. consectetur laboris",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.118701",
        description: "irure pariatur. ullamco reprehenderit proident,",
        link: "https://formpl.us/templates",
        name: "occaecat nostrud nulla",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.298432",
        description: "velit incididunt eiusmod fugiat occaecat",
        link: "https://formpl.us/templates",
        name: "consequat. consectetur laboris",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.118701",
        description: "irure pariatur. ullamco reprehenderit proident,",
        link: "https://formpl.us/templates",
        name: "occaecat nostrud nulla",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.298432",
        description: "velit incididunt eiusmod fugiat occaecat",
        link: "https://formpl.us/templates",
        name: "consequat. consectetur laboris",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.118701",
        description: "irure pariatur. ullamco reprehenderit proident,",
        link: "https://formpl.us/templates",
        name: "occaecat nostrud nulla",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.298432",
        description: "velit incididunt eiusmod fugiat occaecat",
        link: "https://formpl.us/templates",
        name: "consequat. consectetur laboris",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.118701",
        description: "irure pariatur. ullamco reprehenderit proident,",
        link: "https://formpl.us/templates",
        name: "occaecat nostrud nulla",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.298432",
        description: "velit incididunt eiusmod fugiat occaecat",
        link: "https://formpl.us/templates",
        name: "consequat. consectetur laboris",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.118701",
        description: "irure pariatur. ullamco reprehenderit proident,",
        link: "https://formpl.us/templates",
        name: "occaecat nostrud nulla",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.298432",
        description: "velit incididunt eiusmod fugiat occaecat",
        link: "https://formpl.us/templates",
        name: "consequat. consectetur laboris",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.118701",
        description: "irure pariatur. ullamco reprehenderit proident,",
        link: "https://formpl.us/templates",
        name: "occaecat nostrud nulla",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.298432",
        description: "velit incididunt eiusmod fugiat occaecat",
        link: "https://formpl.us/templates",
        name: "consequat. consectetur laboris",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.118701",
        description: "irure pariatur. ullamco reprehenderit proident,",
        link: "https://formpl.us/templates",
        name: "occaecat nostrud nulla",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.298432",
        description: "velit incididunt eiusmod fugiat occaecat",
        link: "https://formpl.us/templates",
        name: "consequat. consectetur laboris",
    },
];
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
// jest.setTimeout(8000);

test("integration test", async () => {
    // render the app component
    render(<App />);

    // expect(screen.getByRole("textbox", { name: /search-field/i })).toBeInTheDocument();

    //check if the search and select forms are in the document
    expect(screen.getByTestId("search-field")).toBeInTheDocument();
    expect(screen.getByTestId("Category")).toBeInTheDocument();
    expect(screen.getByTestId("Order")).toBeInTheDocument();
    expect(screen.getByTestId("Date")).toBeInTheDocument();

    //check if they are disbaled while fetching data to avoid user interaction
    expect(screen.getByTestId("Category")).toBeDisabled();
    expect(screen.getByTestId("Order")).toBeDisabled();
    expect(screen.getByTestId("Date")).toBeDisabled();
    expect(screen.getByTestId("search-field")).toBeDisabled();
    // expect(screen.getByRole("textbox", { name: /search-field/i })).toBeDisabled();

    await new Promise((r) => setTimeout(r, 500));

    // await waitForElementToBeRemoved(() => screen.getByText(/loading templates.../i));

    // expect(await screen.findByRole("textbox", { name: /search-field/i })).toBeEnabled();

    //check if they are enabled after data is been fetched
    expect(screen.getByTestId("search-field")).toBeEnabled();
    expect(screen.getByTestId("Category")).toBeEnabled();
    expect(screen.getByTestId("Order")).toBeEnabled();
    expect(screen.getByTestId("Date")).toBeEnabled();

    //checking the length of template rendered
    expect(screen.getAllByTestId("temp").length).toBe(15);

    fireEvent.change(screen.getByTestId("search-field"), {
        target: { value: "consequat." },
    });

    await new Promise((r) => setTimeout(r, 200));

    expect(screen.getAllByTestId("temp").length).toBe(4);
    expect(screen.getByText(/4 templates/i)).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("Category"), {
        target: { value: "Health" },
    });
    expect(screen.getByText(/Health Templates/i)).toBeInTheDocument();
    expect(screen.getAllByTestId("temp").length).toBe(15);

    expect(screen.getByTestId("Next")).toBeInTheDocument();
    expect(screen.getByTestId("Previous")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("Next"));

    expect(screen.getAllByTestId("temp").length).toBe(1);

    fireEvent.click(screen.getByTestId("Previous"));

    expect(screen.getAllByTestId("temp").length).toBe(15);

    fireEvent.change(screen.getByTestId("search-field"), {
        target: { value: "laboris." },
    });

    fireEvent.change(screen.getByTestId("Category"), {
        target: { value: "Education" },
    });

    expect(screen.getByTestId("search-field").value).toBe("");

    expect(screen.getByText(/Education Templates/i)).toBeInTheDocument();

    // screen.getByRole("");
});
