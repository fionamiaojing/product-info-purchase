import axios from 'axios';

export const selectOption = (property, choice) => {
    return {
        type: 'SELECT_OPTION',
        payload: {
            property: property,
            choice: choice
        }
    };
};

export const selectQuantity = (property, choice) => {
    return {
        type: 'SELECT_QUANTITY',
        payload: {
            property: property,
            choice: choice
        }
    };
};

export const displayError = bool => {
    return {
        type: 'DISPLAY_ERROR',
        payload: bool
    };
};

export const receiveProductData = response => {
    return {
        type: 'RECEIVE_PRODUCT_DATA',
        payload: response
    };
};

//try to use middleware
export const fetchProductData = pid => {
    return function(dispatch) {
        axios.get(`/purchase/item/${pid}`)
          .then((response) => dispatch(
            receiveProductData(response.data)
          )
        )
          .catch((error) => {
            throw error;
        });
    };
};

export const receiveShippingInfo = response => {
    return {
        type: 'RECEIVE_SHIPPING_INFO',
        payload: response
    };
};

export const fetchShippingInfo = pid => {
    return function(dispatch) {
        axios.get(`/purchase/shippingInfo/${pid}`)
          .then((response) => dispatch(
            receiveShippingInfo(response.data)
          )
        )
          .catch((error) => {
            throw error;
        });
    };
};

export const toggleDisplayCountry = bool => {
    return {
        type: 'TOGGLE_DISPLAY_COUNTRY',
        payload: bool
    };
};

export const toggleDisplayZipcode = bool => {
    return {
        type: 'TOGGLE_DISPLAY_ZIPCODE',
        payload: bool
    };
};

export const receiveShippingCost = ({cost}) => {
    return {
        type: 'RECEIVE_SHIPPING_COST',
        payload: cost
    };
};

export const fetchShippingCost = (departure, destination) => {
    return function(dispatch) {
        axios.get(`/purchase/shippingCost/${departure}/${destination}`)
          .then((response) =>
            dispatch( receiveShippingCost(response.data) )
           )
          .then(() => {
            dispatch( selectCountry(destination) ); 
            dispatch( toggleDisplayCountry(false)) ;
            dispatch( toggleDisplayErrorMessage(false) );
          })
          .catch((error) => {
              throw error;
          });
    };
};

export const selectCountry = country => {
    return {
        type: 'SELECT_COUNTRY',
        payload: country
    };
};

export const enterZipcode = zipcode => {
    return {
        type: 'ENTER_ZIPCODE',
        payload: zipcode
    };
};

export const toggleDisplayErrorMessage = bool => {
    return {
        type: 'TOGGLE_DISPLAY_ERROR_MESSAGE',
        payload: bool
    };
};