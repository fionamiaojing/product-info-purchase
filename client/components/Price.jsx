import React from 'react';

export default class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originalPrice: '',
            discountedPrice: null,
        };
    }

    renderPrice() {
        if (this.props.category === "Handbags" || this.props.category === "Home") {
            this.setState({
                originalPrice: this.props.items[0]['original_price'],
                discountedPrice: this.props.items[0]['discounted_price']
            });
        } else {
            let options = Object.keys(this.props.options);
            
        }
    }

    render() {
        return (
            <div id="price">
                <button id="ask">Ask a question</button>
                <span>
                    <span>Discounted price </span>
                    <strike>Original price</strike>
                    <p>You saved xxx(15%)</p>
                </span>
            </div>
        );
    }
}