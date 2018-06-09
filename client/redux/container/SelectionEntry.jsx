import React from 'react';

const SelectionEntry = ({
        option, selectOption, 
        userChoice, displayError
    }) => {
    let property = Object.keys(option)[0];

    const handleSelect = (e) => {
        selectOption(property, e.target.value);
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
            <div 
                id="errorSelection" 
                style={{ display: 
                    (displayError
                        && (userChoice[property] === 'none' || !userChoice[property]) )
                    ? 'block' : 'none'}}
            >Please select a {property}
            </div>
        </div>
    );
};


export default SelectionEntry;
