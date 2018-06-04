import React from 'react';

const PopUp = (props) => {

    return (
        <div>
            <div className='header'>
                <h2>New Conversation</h2>
                <span>with Nikolas from ColorHomeDecor</span>
            </div>
            <div className='body'>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className='footer'>
                <button>Submit</button>
                <a className='cancel'>Cancel</a>
            </div>
        </div>
    );
};

export default PopUp;