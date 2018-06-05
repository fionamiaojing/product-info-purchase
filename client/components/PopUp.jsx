import React from 'react';
import Popup from 'reactjs-popup';


export default class AskQuestion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ 
            open: true 
        });
    }
    
    closeModal() {
        this.setState({ 
            open: false 
        });
    }
    
    render() {
        return (
            <div>
                <button 
                    id="ask"
                    onClick={this.openModal}
                >
                    Ask a question
                </button>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <div id="popUp">
                        <div className='header'>
                            <h2>New Conversation</h2>
                            <span className='contactor'>with Nikolas from ColorHomeDecor</span>
                        </div>
                        <div className='body'>
                            <div>
                                <div id='square'></div>
                            </div>
                            <div id="content">
                                <input 
                                    id="questionName" 
                                    type="text"
                                    placeholder="Item name here..."
                            /><br/>
                                <textarea 
                                    cols="30" rows="10"
                                    placeholder="Your questions here..."
                                ></textarea>
                            </div>
                        </div>
                        <div className='footer'>
                            <button id='send' onClick={this.closeModal}>Send</button>
                            <button id='cancel' onClick={this.closeModal}>Cancel</button>
                        </div>
                    </div>
                </Popup>
            </div>
        );
    }
}
