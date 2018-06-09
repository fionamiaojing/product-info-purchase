
export const groupItems = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_PRODUCT_DATA':
            return action.payload.group;
        default:
            return state;
    }
};