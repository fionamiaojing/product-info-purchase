import React from 'react';
import Popup from 'reactjs-popup';
import styles from '../../style.css';

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
                    id={styles.ask}
                    onClick={this.openModal}
                >
                    Ask a question
                </button>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
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
                            <button id={styles.send} onClick={this.closeModal}>Send</button>
                            <button id={styles.cancel} onClick={this.closeModal}>Cancel</button>
                        </div>
                    </div>
                </Popup>
            </div>
        );
    }
}
