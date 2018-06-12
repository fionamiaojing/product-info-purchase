import React from 'react';
import Popup from 'reactjs-popup';
import styles from '../../style.css';

export default class AskQuestion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showPopUp = this.showPopUp.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
    }

    showPopUp() {
        this.setState({ 
            show: true 
        });
    }
    
    closePopUp() {
        this.setState({ 
            show: false 
        });
    }

    renderPopup() {
        return (
            <div className={styles.popupOverlay}>
                <div id={styles.popUp}>
                    <div className={styles.header}>
                        <h2 className={styles.h2}>New Conversation</h2>
                        <span className={styles.contactor}>with Nikolas from ColorHomeDecor</span>
                    </div>
                    <div className={styles.body}>
                        <div>
                            <div id={styles.square}></div>
                        </div>
                        <div id={styles.content}>
                            <input 
                                id={styles.questionName} 
                                type="text"
                                placeholder="Item name here..."
                        /><br/>
                            <textarea 
                                className={styles.textarea}
                                cols="30" rows="10"
                                placeholder="Your questions here..."
                            ></textarea>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <button id={styles.send} onClick={this.closePopUp}>Send</button>
                        <button id={styles.cancel} onClick={this.closePopUp}>Cancel</button>
                    </div> 
                </div>
            </div>  
        );
    }
    
    render() {
        return (
            <div>
                <button 
                    id={styles.ask}
                    onClick={this.showPopUp}
                >
                    Ask a question
                </button>
                {this.state.show? this.renderPopup() : ''}
            </div>
        );
    }
}
