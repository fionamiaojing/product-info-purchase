
export const allItems = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_PRODUCT_DATA':
            return action.payload.items;
        default:
            return state;
    }
};