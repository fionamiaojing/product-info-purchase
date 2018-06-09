
export const groupItems = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_PRODUCT_DATA':
            return action.payload.group;
        default:
            return state;
    }
};

// {
//     "_id": "5b143435b7a9782139602836",
//     "fake_id": 1001,
//     "title": "Handmade high heel",
//     "category": "Shoes",
//     "__v": 0,
//     "reviews": 527,
//     "favorite": 474,
//     "overview": {
//         "material": "Leather",
//         "gift_message": true,
//         "made_to_order": true,
//         "handmade": true
//     },
//     "number_in_storage": 4,
//     "count_in_cart": 42
// }