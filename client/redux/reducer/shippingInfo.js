
export const shippingInfo = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_SHIPPING_INFO':
            return action.payload;
        default:
            return state;
    }
};

// {
//     "_id": "5b120056812f66fee2228667",
//     "fake_group_id": 1001,
//     "min_days": 3,
//     "max_days": 7,
//     "country": "United States",
//     "__v": 0
// }

export const shippingCost = (state = null, action) => {
    switch (action.type) {
        case 'RECEIVE_SHIPPING_COST':
            return action.payload;
        default:
            return state;
    }
};

// 20 or 0 or something