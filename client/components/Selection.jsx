import React from 'react';
import SelectionEntry from './SelectionEntry.jsx';

export default class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //creat an array of 1 - 15
            quantityArray: { quantity: 
                        Array.apply(null, {length: 16}).map(Number.call, Number).slice(1)
            },
            options: {},
            quantity: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    mappingOptions(category) {
        if (category === "Shoes" || category === "Clothes") {
            let properties = ['color', 'size'];
            let options = [];
            properties.forEach((property) => {
                let option = {};
                option[property] = this.fetchProperty(this.props.items, property);
                options.push(option);
            });
            return options;
        } else {
            //return id
            return [];
        }
    }

    fetchProperty(arrayOfItem, property) {
        let output = {};
        arrayOfItem.forEach((ele) => {
            output[ele[property]] = true;
        });
        return Object.keys(output).sort((a, b) => (
            a - b
        ));
    }

    handleSelect(key, value) {
        if (key === "quantity") {
            this.setState({
                quantity: value
            });
            this.props.detectSelection(value, null);
        } else {
            let newOptions = this.state.options;
            newOptions[key] = value;
            //set State
            this.setState({
                options: newOptions
            });
            this.props.detectSelection(null, newOptions);
        }
    }

    render() {
        const options = this.mappingOptions(this.props.category);
        return (
            <div id="selections">
                {options.map((option) => 
                    <SelectionEntry 
                        key={Object.keys(option)[0]} 
                        option={option}
                        handleSelect={this.handleSelect}/>
                )}
                {<SelectionEntry 
                    key={'quantity'} 
                    option={this.state.quantityArray}
                    handleSelect={this.handleSelect}/>}
            </div>
        );
    }
}