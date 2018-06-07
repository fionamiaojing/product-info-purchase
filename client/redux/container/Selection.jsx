import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectionEntry from './SelectionEntry.jsx';
import { selectOption, selectQuantity } from '../action/index';

class Selection extends React.Component {
    
    render () {
        return (
            <div>
                {this.props.options.map((option) => 
                    <SelectionEntry 
                        key={Object.keys(option)[0]} 
                        option={option}
                        selectOption={this.props.selectOption}
                        // displayError={this.props.displayError}
                    />
                )}
                {<SelectionEntry 
                    key={'quantity'} 
                    option={quantityArray}
                    selectOption={this.props.selectQuantity}
                />}
            </div>
           
        );
    }
}

const quantityArray = { quantity: 
    Array.apply(null, {length: 16}).map(Number.call, Number).slice(1)
};

const mappingOptions = (category, items)  => {
    if (category === "Shoes" || category === "Clothes") {
        //Shoes and Clothes both have property of color and size
        let properties = ['color', 'size'];
        let options = [];
        //generate options array for color and size respectivity
        //then use the options array to render SelectionEntry
        properties.forEach((property) => {
            let option = {};
            option[property] = fetchProperty(property, items);
            options.push(option);
        });
        return options;
        //options shoule look like [{color: [red, blue]}, {size: [5, 6, 7]}]
    } else {
        //return empty array
        return [];
    }
};

const fetchProperty = (property, items) => {
    let output = {};
    items.forEach((ele) => {
        output[ele[property]] = true;
    });
    return Object.keys(output).sort((a, b) => (
        a - b
    ));
};

const  mapStateToProps = (state) => {
    return {
        options: mappingOptions(state.group.category, state.allItems)
    };
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({ 
        selectOption: selectOption,
        selectQuantity: selectQuantity
    }, dispatch);
};

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(Selection);