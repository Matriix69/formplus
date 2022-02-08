export const categoryOptions = ["All", "Health", "E-commerce", "Education"];
export const orderOptions = ["Default", "Ascending", "Descending"];
export const dateOptions = ["Default", "Ascending", "Descending"];

export const orderAscending = (a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    return 0;
};

export const orderDescending = (a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA > nameB) {
        return -1;
    }
    if (nameA < nameB) {
        return 1;
    }
    return 0;
};

export const dateAscending = (a, b) => {
    var dateA = new Date(a.created);
    var dateB = new Date(b.created);
    if (dateA < dateB) {
        return -1;
    }
    if (dateA > dateB) {
        return 1;
    }

    return 0;
};

export const dateDescending = (a, b) => {
    var dateA = new Date(a.created);
    var dateB = new Date(b.created);
    if (dateA > dateB) {
        return -1;
    }
    if (dateA < dateB) {
        return 1;
    }

    return 0;
};

export const fakeTemplates = [
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
        created: "2022-02-07T20:53:17.165987",
        description: "elit, deserunt commodo fugiat reprehenderit",
        link: "https://formpl.us/templates",
        name: "tempor minim reprehenderit",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.318681",
        description: "velit dolor Excepteur officia adipiscing",
        link: "https://formpl.us/templates",
        name: "magna reprehenderit voluptate",
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
        created: "2022-02-07T20:53:17.165987",
        description: "elit, deserunt commodo fugiat reprehenderit",
        link: "https://formpl.us/templates",
        name: "tempor minim reprehenderit",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.318681",
        description: "velit dolor Excepteur officia adipiscing",
        link: "https://formpl.us/templates",
        name: "magna reprehenderit voluptate",
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
        created: "2022-02-07T20:53:17.165987",
        description: "elit, deserunt commodo fugiat reprehenderit",
        link: "https://formpl.us/templates",
        name: "tempor minim reprehenderit",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.318681",
        description: "velit dolor Excepteur officia adipiscing",
        link: "https://formpl.us/templates",
        name: "magna reprehenderit voluptate",
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
        created: "2022-02-07T20:53:17.165987",
        description: "elit, deserunt commodo fugiat reprehenderit",
        link: "https://formpl.us/templates",
        name: "tempor minim reprehenderit",
    },
    {
        category: ["Health", "E-commerce", "Education"],
        created: "2022-02-07T20:53:17.318681",
        description: "velit dolor Excepteur officia adipiscing",
        link: "https://formpl.us/templates",
        name: "magna reprehenderit voluptate",
    },
];
console.log(fakeTemplates.length);
