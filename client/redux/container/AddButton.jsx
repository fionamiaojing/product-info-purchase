import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { displayError } from '../action/index';


class AddButton extends React.Component {

    render() {
        // console.log(this.props.selectedItem);
        // console.log(this.props.quantity);
        return (
            <div>
                <button 
                className='buttons' id="buy" 
                onClick={() => {
                    if (!this.props.selectedItem) {
                        //call error function
                        this.props.displayError(true);
                    } else {
                        handleClick(
                            this.props.selectedItem,
                            this.props.quantity
                        );
                    }
                }}
                >
                    Buy it now >
                </button>
                <button 
                    className='buttons' id="add" 
                    onClick={() => {
                        if (!this.props.selectedItem) {
                            //call error function
                            this.props.displayError(true);
                        } else {
                            handleClick(
                                this.props.selectedItem,
                                this.props.quantity
                            );
                        }
                    }}
                >
                    Add to cart
                </button>
            </div>
        );
    }
}

const detectSelectedItem = (category, items, option) => {
    //option looks like {color: "Blue", size: "7"}
    //if category equals Home or Handbags,only one item available
    //just return the item id
    if (category === "Handbags" || category === "Home") {
        return items._id;
    }
    //Otherwise, assess if options has been 
    //1) fully provided (length === 2)
    //2) not contain none
    if ( Object.keys(option).length < 2 
        || Object.values(option).includes('none')) {
            return null;
    }
    //if all criteria met
    //filter the items based on the given option
    let keys = Object.keys(option);
    return (
        items.filter((item) => {
            for (const key of keys) {
                if (item[key] !== option[key]) {
                    return false;
                }
            }
            return true;
        })[0]._id
    );
};

const userID = 'hrsf950001';

const handleClick = (selectedItem, {quantity}) => {
    send({
        itemId: selectedItem,
        quantity:  quantity 
    });
};

const send = (cartItem)  => {
    axios.post(`/listing/cart/${userID}`, cartItem)
      .catch((error) => {
          throw error;
      });
};

const mapStateToProps = (state) => {
    return {
        selectedItem: detectSelectedItem(
            state.group.category,
            state.allItems,
            state.optionChoice
        ),
        quantity: state.quantityChoice
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        displayError: displayError
    }, dispatch);
};


export default connect(
    mapStateToProps,
    matchDispatchToProps
)(AddButton);