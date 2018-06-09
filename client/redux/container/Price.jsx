import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AskQuestion from '../components/PopUp.jsx';
import styles from '../../style.css';

class Price extends React.Component {
    renderPriceTag() {
        let minDiscPrice = Math.min(...this.props.discountedPrice);
        let minOrgPrice = Math.min(...this.props.originalPrice);
        if (minDiscPrice === minOrgPrice) {
            //scenario 1 - only one discounted price
            if (this.props.discountedPrice.length === 1) {
                return (
                    <span id={styles.discountPrice}>
                        ${minDiscPrice} 
                    </span>
                );
            //scenario 2 - still multiple discounted price
            } else {

                return (
                    <span id={styles.discountPrice}>
                        ${minDiscPrice}+
                    </span>
                );
            }
        } else {
            let discountPerc = 100 - Math.round(
                minDiscPrice/minOrgPrice * 100
            );
            let discountAmnt = minOrgPrice - minDiscPrice;
            
            return (
                <span>
                    <span id={styles.discountPrice}>
                        ${minDiscPrice} 
                    </span>
                    <strike id={styles.originalPrice}> ${minOrgPrice}</strike>
                    <p id={styles.saving}>You save ${discountAmnt} ({discountPerc}%)</p>
                </span>
            );  
        }
    }

    render() {
        return (
            <div id={styles.price}>
                <AskQuestion />
                {this.renderPriceTag()}
            </div>
        );
    }
}

const filterItems = (items, option) => {
    //option looks like {color: "Blue", size: "7"}
    // assess if option is empty
    if (!Object.keys(option).length) {
        //no need to filter, just return all items
        return items;
    }
    // else filter the items based on the given option
    let keys = Object.keys(option);
    return (
        items.filter((item) => {
            for (const key of keys) {
                if (option[key] !== 'none' && item[key] !== option[key]) {
                    return false;
                }
            }
            return true;
        })
    );
};

const gatherOriginalPrice = (filterdItems) => {
    let output = {};
    for (var item of filterdItems) {
        output[item.original_price] = true;
    }
    return Object.keys(output).map((e) => Number(e))
        .sort((a, b) => (a - b));
};

const gatherDiscountedPrice = (filterdItems) => {
    let output = {};
    for (var item of filterdItems) {
        output[item.discounted_price] = true;
    }
    return Object.keys(output).map((e) => Number(e))
        .sort((a, b) => (a - b));
};

const mapStateToProps = (state) => {
    return {
        originalPrice: gatherOriginalPrice(filterItems(
            state.allItems, state.optionChoice
        )),
        discountedPrice: gatherDiscountedPrice(filterItems(
            state.allItems, state.optionChoice
        ))
    };
};

export default connect(
    mapStateToProps
)(Price);