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

//I should put displayCountry, displayZipcode and those two in displayError.js altogether in this sheet
//And put them in one switch case with different cases
