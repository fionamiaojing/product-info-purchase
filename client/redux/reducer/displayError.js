export const displayError = (state = false, action) => {
    switch (action.type) {
        case 'DISPLAY_ERROR':
            return action.payload;
        default:
            return state;
    }
};


export const displayErrorMessage = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_DISPLAY_ERROR_MESSAGE':
            return action.payload;
        default:
            return state;
    }
};