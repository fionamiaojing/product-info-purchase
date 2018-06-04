import React from 'react';
import _ from 'lodash';

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
            priceTag = <span>{this.props.discountedPrice[0]} </span>;
        } else if (this.props.discountedPrice.length === 1 &&
            this.props.originalPrice.length === 1) {
            let discount = 100 - Math.round(
                this.props.discountedPrice[0] /
                this.props.originalPrice[0] * 100
            );
            priceTag = <span>
                            <span>{this.props.discountedPrice[0]} </span>
                            <strike>{this.props.originalPrice[0]}</strike>
                            <p>You saved {discount} %</p>
                       </span>;
        } else {
            priceTag = <span>{this.props.discountedPrice[0]}+ </span>;
        }
    
        return (
            <div id="price">
                <button 
                    id="ask"
                    onClick={this.handleClick}
                >
                    Ask a question
                </button>
                {priceTag}
            </div>
        );  
    }
}