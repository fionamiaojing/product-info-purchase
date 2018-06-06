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
            //options for clothes and shoes
            options: {},
            quantity: 1
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    //mapping options based on category
    mappingOptions(category) {
        if (category === "Shoes" || category === "Clothes") {
            //Shoes and Clothes both have property of color and size
            let properties = ['color', 'size'];
            let options = [];
            //generate options array for color and size respectivity
            //then use the options array to render SelectionEntry
            properties.forEach((property) => {
                let option = {};
                option[property] = this.fetchProperty(property);
                options.push(option);
            });
            return options;
        } else {
            //return empty array
            return [];
        }
    }

    //fetch options based on property
    fetchProperty(property) {
        let output = {};
        this.props.items.forEach((ele) => {
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
        } else if (value === "none") {
            // if key already in options
            // delete key from the options;
            if (Object.keys(this.state.options).includes(key)) {
                let newOptions = this.state.options;
                delete newOptions[key];
                this.setState({
                    options: newOptions
                });
                this.props.detectSelection(null, newOptions);
            }
        } else {
            // update options
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
                        displayError={this.props.displayError}
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