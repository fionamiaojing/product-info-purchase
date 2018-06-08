import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { receiveProductData, receiveShippingInfo } from '../action/index';
import Selection from '../container/Selection.jsx';
import Overview from '../container/Overview.jsx';
import Price from '../container/Price.jsx';
import AddButton from '../container/AddButton.jsx';
import DisplayHot from '../container/DisplayHot.jsx';
import Shipping from '../container/Shipping.jsx';

class App2 extends React.Component {

    componentDidMount() {
        this.fetchProduct();
        this.fetchShippingInfo();
    }

    fetchProduct() {
        axios.get(`/listing/item/${pid}`)
          .then((response) => {
              this.props.receiveProductData(response.data);
          })
          .catch((error) => {
              throw error;
          });
    }

    fetchShippingInfo() {
        axios.get(`/listing/shippingInfo/${pid}`)
          .then((response) => {
              this.props.receiveShippingInfo(response.data);
          })
          .catch((error) => {
              throw error;
          });
    }

    render() {
        if (Object.keys(this.props.group).length 
            && this.props.allItems.length
        ) {
            return (
                <div className="sidebar">
                    <h1>{this.props.group.title}</h1>
                    <div>
                        <Price />
                        <Selection />
                        <AddButton />
                        <DisplayHot />
                        <hr/>
                        <Overview />
                        <hr/>
                        <Shipping />
                    </div>
                </div>
            );
        }
        return (
            <div>
                Please wait
            </div>
        );
        
    }
}

const pid = document.URL.match(/\/[\w]+\/([\d]+)/)[1];

const matchStateToProps = (state) => {
    return {
        group: state.group,
        allItems: state.allItems
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        receiveProductData: receiveProductData,
        receiveShippingInfo: receiveShippingInfo
    }, dispatch);
};

export default connect(
    matchStateToProps,
    matchDispatchToProps
)(App2);