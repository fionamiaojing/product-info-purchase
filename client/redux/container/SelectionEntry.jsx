import React from 'react';



const SelectionEntry = ({option, selectOption}) => {
    let property = Object.keys(option)[0];
    let value;

    const handleSelect = (e) => {
        value = e.target.value;
        selectOption(property, value);
    };
    
    return (
        <div id="selection">
            <label>
                {property}
            </label>
            <span>
                <div>
                    <select 
                        id ='optionSelect'
                        value={value}
                        onChange={(e) => handleSelect(e)}
                    >
                        {property === "quantity" 
                            ? '' 
                            : <option value="none" >Select an option</option>
                        }
                        {option[property].map((choice) => 
                            <option 
                                key={choice}
                                value={choice}
                            >
                                {choice}
                            </option>
                        )}
                    </select>
                </div>
            </span>
            {/* <div 
                id="errorSelection" 
                style={{ display: 
                    (this.props.displayError && this.state.value === 'none') ? 
                    'block' : 'none'}}
            >Please select a {this.state.key}
            </div> */}
        </div>
    );
};


export default SelectionEntry;