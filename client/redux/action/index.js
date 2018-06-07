export const selectOption = (property, choice) => {
    console.log(property, choice);
    return {
        type: 'SELECT_OPTION',
        payload: {
            property: property,
            choice: choice
        }
    };
};