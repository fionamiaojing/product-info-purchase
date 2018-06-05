import React from 'react';
import _ from 'lodash';
import AskQuestion from './PopUp.jsx';

export default class Price extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    render() {
        let priceTag;
        //conditional rendering
        if (_.isEqual(this.props.originalPrice, this.props.discountedPrice)) {
            priceTag = <span id="discountPrice">${this.props.discountedPrice[0]} </span>;
        } else if (this.props.discountedPrice.length === 1 &&
            this.props.originalPrice.length === 1) {
            let discount = 100 - Math.round(
                this.props.discountedPrice[0] /
                this.props.originalPrice[0] * 100
            );
            priceTag = <span>
                            <span id="discountPrice">${this.props.discountedPrice[0]} </span>
                            <strike id="originalPrice">${this.props.originalPrice[0]}</strike>
                            <p id="saving">You save $
                            {this.props.originalPrice[0] - this.props.discountedPrice[0]} 
                            ({discount}%)</p>
                       </span>;
        } else {
            priceTag = <span id="discountPrice">${this.props.discountedPrice[0]}+ </span>;
        }
    
        return (
            <div id="price">
                <AskQuestion />
                {priceTag}
            </div>
        );  
    }
}