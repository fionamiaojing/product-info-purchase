export const selectOption = (property, choice) => {
    return {
        type: 'SELECT_OPTION',
        payload: {
            property: property,
            choice: choice
        }
    };
};

export const selectQuantity = (property, choice) => {
    return {
        type: 'SELECT_QUANTITY',
        payload: {
            property: property,
            choice: choice
        }
    };
};

export const displayError = (bool) => {
    return {
        type: 'DISPLAY_ERROR',
        payload: bool
    };
};