import React from 'react';
import _ from 'lodash';

export default class Price extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (_.isEqual(this.props.originalPrice, this.props.discountedPrice)) {
            return (
                <div id="price">
                <button id="ask">Ask a question</button>
                <span>
                    <span>{this.props.discountedPrice[0]} </span>
                </span>
            </div>
            );
        } else if (this.props.discountedPrice.length === 1 &&
                this.props.originalPrice.length === 1) {
            let discount = 100 - Math.round(
                                this.props.discountedPrice[0] /
                                this.props.originalPrice[0] * 100
                            );
            return (
                <div id="price">
                    <button id="ask">Ask a question</button>
                    <span>
                        <span>{this.props.discountedPrice[0]} </span>
                        <strike>{this.props.originalPrice[0]}</strike>
                        <p>You saved {discount} %</p>
                    </span>
                </div>
            );
        } else {
            return (
                <div id="price">
                    <button id="ask">Ask a question</button>
                    <span>
                        <span>{this.props.discountedPrice[0]}+ </span>
                    </span>
                </div>
            );
        }
        
    }
}