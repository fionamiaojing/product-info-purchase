export const displayCountry = (state = false, action) => {

    switch (action.type) {
        case 'TOGGLE_DISPLAY_COUNTRY':
            return action.payload;
        default: 
            return state;
    }
};

export const displayZipcode = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_DISPLAY_ZIPCODE':
            return action.payload;
        default: 
            return state;
    }
};