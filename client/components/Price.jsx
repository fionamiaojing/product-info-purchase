import React from 'react';
import _ from 'lodash';
import AskQuestion from './PopUp.jsx';

export default class Price extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPriceTag() {
        let minDiscPrice = Math.min(...this.props.discountedPrice);
        let minOrgPrice = Math.min(...this.props.originalPrice);
        if (minDiscPrice === minOrgPrice) {
            //scenario 1 - only one discounted price
            if (this.props.discountedPrice.length === 1) {
                return (
                    <span id="discountPrice">
                        ${minDiscPrice} 
                    </span>
                );
            //scenario 2 - still multiple discounted price
            } else {

                return (
                    <span id="discountPrice">
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
                    <span id="discountPrice">
                        ${minDiscPrice} 
                    </span>
                    <strike id="originalPrice"> ${minOrgPrice}</strike>
                    <p id="saving">You save ${discountAmnt} ({discountPerc}%)</p>
                </span>
            );  
        }
    }

    render() {
        return (
            <div id="price">
                <AskQuestion />
                {this.renderPriceTag()}
            </div>
        );  
    }
}