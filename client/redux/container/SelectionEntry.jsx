import React from 'react';
import styles from '../../style.css';

const SelectionEntry = ({
        option, selectOption, 
        userChoice, displayError
    }) => {
    let property = Object.keys(option)[0];

    const handleSelect = (e) => {
        selectOption(property, e.target.value);
    };
    
    return (
        <div id={styles.selection}>
            <label className={styles.label}>
                {property}
            </label>
            <span>
                <div>
                    <select 
                        id ={styles.optionSelect}
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
                id={styles.errorSelection}
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
