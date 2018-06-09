export const optionChoice = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_OPTION':
            let newInput = {};
            newInput[action.payload.property] = action.payload.choice;
            return Object.assign({}, state, newInput);
        default:
            return state;
    }
};

export const quantityChoice = (state = {quantity: 1}, action) => {
    switch (action.type) {
        case 'SELECT_QUANTITY':
            let newInput = {};
             newInput[action.payload.property] = action.payload.choice;
            return newInput;
        default:
            return state;
    }
};