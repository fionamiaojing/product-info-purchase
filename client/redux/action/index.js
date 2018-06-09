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

export const displayError = bool => {
    return {
        type: 'DISPLAY_ERROR',
        payload: bool
    };
};

export const receiveProductData = response => {
    console.log(response);
    return {
        type: 'RECEIVE_PRODUCT_DATA',
        payload: response
    };
};