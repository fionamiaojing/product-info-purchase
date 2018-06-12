import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProductData, fetchShippingInfo } from '../action/index';
import Selection from '../container/Selection.jsx';
import Overview from '../container/Overview.jsx';
import Price from '../container/Price.jsx';
import AddButton from '../container/AddButton.jsx';
import DisplayHot from '../container/DisplayHot.jsx';
import Shipping from '../container/Shipping.jsx';
import styles from '../../style.css';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchProductData(pid);
        this.props.fetchShippingInfo(pid);
    }

    render() {
        if (Object.keys(this.props.group).length 
            && this.props.allItems.length
        ) {
            return (
                <div className={styles.sidebar}>
                    <h1 className={styles.h1}>{this.props.group.title}</h1>
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
            <div className={styles.loader}>
                
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
        fetchProductData: fetchProductData,
        fetchShippingInfo: fetchShippingInfo,
    }, dispatch);
};

export default connect(
    matchStateToProps,
    matchDispatchToProps
)(App);


// fetchProduct() {
//     axios.get(`/purchase/item/${pid}`)
//       .then((response) => {
//           this.props.receiveProductData(response.data);
//       })
//       .catch((error) => {
//           throw error;
//       });
// }


// fetchShippingInfo() {
//     axios.get(`/purchase/shippingInfo/${pid}`)
//       .then((response) => {
//           this.props.receiveShippingInfo(response.data);
//       })
//       .catch((error) => {
//           throw error;
//       });
// }