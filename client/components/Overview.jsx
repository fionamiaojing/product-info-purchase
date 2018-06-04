import React from 'react';

export default class Overview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let info = this.props.info;
        return (
            <ul>
                {info.overview.handmade ? 
                    <li>Handmade item</li> : ""}
                <li>
                    Material: {info.overview.material}
                </li>
                {info.overview['made_to_order'] ? 
                    <li>Made to order</li> : ""}
                <li>
                    Feedback:  
                    <a href="">
                        {info['reviews']} reviews
                    </a>
                </li>
                <li>
                    Favorited by: 
                    <a href="">
                        {info['favorite']} people
                    </a>
                </li>
                {info.overview['gift_message'] ? 
                    <li>Gift message available</li> : ""}
            </ul>
        );
    }
}
