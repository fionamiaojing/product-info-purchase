import React from 'react';

export default class Selection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="selections">
                <div id="property">
                    <label >Size</label>
                    <span>
                        <div>
                            <select name="" id="">
                                <option value >Select an option</option>
                                <option value="aaa">XS</option>
                            </select>
                        </div>
                    </span>
                    <div id="errorSelection" style={{display: 'block'}}>Please select an option</div>
                </div>
                <div>
                    <label >Color</label>
                    <span>
                        <div>
                            <select name="" id="">
                                <option value >Select an option</option>
                                <option value="aaa">Black</option>
                            </select>
                        </div>
                    </span>
                    <div id="errorSelection" style={{display: 'none'}} >Please select an option</div>
                </div>
                <div>
                    <label >Quantity</label>
                    <span>
                        <div>
                            <select name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}