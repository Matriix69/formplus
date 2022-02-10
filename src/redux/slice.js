import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { orderAscending, orderDescending, dateAscending, dateDescending, scrollToTop } from "../constants/constants";

export const fetchTemplates = createAsyncThunk("templates/getTemplate", async () => {
    const res = await fetch(
        "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
    );
    const data = await res.json();
    console.log(data);
    return data;
});

const templateSlice = createSlice({
    name: "template",
    initialState: {
        allTemplates: [],
        pageTemplates: [],
        categoryTemplates: [],
        status: null,
        currentPage: 1,
        templatesPerPage: 15,
        searchValue: "",
        categoryValue: "All",
        orderValue: "Default",
        dateValue: "Default",
    },
    reducers: {
        nextPage: (state) => {
            state.currentPage = state.currentPage + 1;
            scrollToTop();
        },
        previouPage: (state) => {
            state.currentPage = state.currentPage - 1;
            scrollToTop();
        },
        search: (state, action) => {
            state.searchValue = action.payload;
            state.currentPage = 1;

            switch (state.categoryValue) {
                case "All":
                    const filteredSearch = state.allTemplates?.filter((template) =>
                        template["name"].toLowerCase().includes(state.searchValue.toLowerCase())
                    );
                    state.pageTemplates = filteredSearch;
                    break;
                case "Health":
                case "E-commerce":
                case "Education":
                    const filteredSearch2 = state.categoryTemplates?.filter((template) =>
                        template["name"].toLowerCase().includes(state.searchValue.toLowerCase())
                    );
                    state.pageTemplates = filteredSearch2;
            }
        },
        sortByCategory: (state, action) => {
            state.categoryValue = action.payload;
            const filteredCategory =
                action.payload === "All"
                    ? state.allTemplates
                    : state.allTemplates?.filter((template) => template.category.includes(action.payload));
            state.pageTemplates = filteredCategory;
            if (state.searchValue !== "") state.searchValue = "";
            if (state.orderValue !== "Default") state.orderValue = "Default";
            if (state.dateValue !== "Default") state.dateValue = "Default";

            // if category is value is not all, set the filterd category to state to imporve the perfomace of search for individual categories
            // the search function could be debounced, reducing the memory used, but i went with this approch
            state.categoryTemplates = action.payload !== "All" ? filteredCategory : [];
        },
        sortByOrder: (state, action) => {
            state.orderValue = action.payload;

            //if sort by date is not default, reset to default
            if (state.dateValue !== "Default") state.dateValue = "Default";

            switch (action.payload) {
                case "Default":
                    //if Alphabetical order is default and category value is All, i want to return all template here
                    if (state.categoryValue === "All") state.pageTemplates = state.allTemplates;

                    //if Alphabetical order is default and category value is not all, i return templates that have the current category value
                    if (state.categoryValue !== "All")
                        state.pageTemplates = state.allTemplates?.filter((template) =>
                            template.category.includes(state.categoryValue)
                        );

                    break;
                case "Ascending":
                    //if Alphabetical order is Ascending, i sort the page templates to asending order by name and return the sorted array
                    state.pageTemplates = [...state.pageTemplates]?.sort(orderAscending);
                    break;

                case "Descending":
                    //if Alphabetical order is Descending, i sort the page templates to Descending order by name and return the sorted array
                    state.pageTemplates = [...state.pageTemplates]?.sort(orderDescending);
            }
        },
        sortByDate: (state, action) => {
            state.dateValue = action.payload;

            if (state.orderValue !== "Default") state.orderValue = "Default";

            switch (action.payload) {
                case "Default":
                    //if date order is default and category value is All, i want to return all template here
                    if (state.categoryValue === "All") state.pageTemplates = state.allTemplates;

                    //if date order is default and category value is not all, i return templates that have the current category value
                    if (state.categoryValue !== "All")
                        state.pageTemplates = state.allTemplates?.filter((template) =>
                            template.category.includes(state.categoryValue)
                        );

                    break;
                case "Ascending":
                    //if date order is Ascending, i sort the page templates to asending order by created value date and return the sorted array
                    state.pageTemplates = [...state.pageTemplates]?.sort(dateAscending);
                    break;

                case "Descending":
                    //if date order is Descending, i sort the page templates to Descending order by created value date and return the sorted array
                    state.pageTemplates = [...state.pageTemplates]?.sort(dateDescending);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTemplates.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchTemplates.fulfilled, (state, action) => {
                state.allTemplates = action.payload;
                state.pageTemplates = action.payload;
                state.status = "done";
            })
            .addCase(fetchTemplates.rejected, (state, action) => {
                state.status = "failed";
            });
    },
});

export const { nextPage, previouPage, decremented, search, sortByCategory, sortByOrder, sortByDate } =
    templateSlice.actions;

export const selectAllTemplates = (state) => state.template.allTemplates;
export const selectPageTemplates = (state) => state.template.pageTemplates;
export const selectCurrentpage = (state) => state.template.currentPage;
export const selectTotalPages = (state) => state.template.totalPages;
export const selectTemplatesPerPage = (state) => state.template.templatesPerPage;

export default templateSlice.reducer;
