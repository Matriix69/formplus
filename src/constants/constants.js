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
