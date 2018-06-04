import React from 'react';

export default class Shipping extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Shipping & Returns</h2>
                <div>
                    Made just for you. Ready to ship in 3–4 weeks.
                </div>
                <div>
                    From China
                </div>
                <div>
                    <a href="">Get Shopping Cost</a>
                </div>
                <div style={{display: 'block'}}>
                    <div id='country'>
                        <div>Country </div>
                        <div>
                            <select name="" id="">
                                <option value="">United States</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>Zip or postal code </div>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
                <div>
                    Shipping upgrades available in the cart
                </div>
                <div>
                    Returns and exchanges accepted <br/>
                    Exceptions may apply. 
                    <a href="">See return policy</a>
                    
                </div>
            </div>
        );
    }
}