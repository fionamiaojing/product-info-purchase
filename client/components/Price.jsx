import React from 'react';

export default class Price extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="price">
                <button id="ask">Ask a question</button>
                <span>
                    <span>Discounted price</span>
                    <strike>Original price</strike>
                    <p>Yout saved xxx(15%)</p>
                </span>
            </div>
        );
    }
}