export const displayError = (state = false, action) => {
    switch (action.type) {
        case 'DISPLAY_ERROR':
            return action.payload;
        default:
            return state;
    }
};