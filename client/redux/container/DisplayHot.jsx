import React from 'react';
import { connect } from 'react-redux';
import AlmostGone from '../components/AlmostGone.jsx';
import PeopleWant from '../components/PeopleWant.jsx';

class DisplayHot extends React.Component {
    renderOne() {
        if (this.props.numberInStorage < 10) {
            return (
                <AlmostGone 
                    numberInStorage={this.props.numberInStorage}
                />
            );
        }
        return (
            <PeopleWant 
                    numberInCart={this.props.numberInCart}
                />
        );
    }

    render() {
        return (
            this.renderOne()
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numberInCart: state.group.count_in_cart,
        numberInStorage: state.group.number_in_storage
    };
};

export default connect(
    mapStateToProps
)(DisplayHot);