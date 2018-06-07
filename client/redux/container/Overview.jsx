import React from 'react';
import { connect } from 'react-redux';

class Overview extends React.Component {

    render () {
        return (
            <div>
                <h2>Overview</h2>
                <ul>
                    {this.props.overview.handmade ? 
                        <li>Handmade item</li> : ""}
                    <li>
                        Material: {this.props.overview.material}
                    </li>
                    {this.props.overview['made_to_order'] ? 
                        <li>Made to order</li> : ""}
                    <li>
                        {'Feedback: '} 
                        <a href="#reviews">
                            {this.props.reviews} reviews
                        </a>
                    </li>
                    <li>
                        {'Favorited by: '}
                        <a href="">
                            {this.props.favorite} people
                        </a>
                    </li>
                    {this.props.overview['gift_message'] ? 
                        <li>Gift message available</li> : ""}
                </ul>
            </div>
        );
    }
    
}

function mapStateToProps(state) {
    return {
        overview: state.group.overview,
        reviews: state.group.reviews,
        favorite: state.group.favorite
    };
}

export default connect(
    mapStateToProps
)(Overview);