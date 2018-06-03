import React from 'react';

export default class PeopleWant extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <svg height="48" width="48" aria-hidden="true" focusable="false">
                    <path fill="#FFAC5D" d="M19,33h20l5-18H15"></path>
                    <path fill="#333333" 
                          d="M43,14H14.7L13,5.8C12.8,5.3,12.5,5,12,5H5C4.3,5,4,5.4,4,6s0.4,1,1,1h6.2l1.8,8c0,0.1,0,0.3,0.1,0.4
                          l4,17.8c0.1,0.5,0.5,0.8,1,0.8h20c0.6,0,1-0.4,1-1s-0.4-1-1-1H18.8l-3.6-16H43c0.6,0,1-0.4,1-1S43.6,14,43,14z"></path>
                    <path fill="#333333" 
                          d="M22.5,36c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5S24.3,36,22.5,36z M22.5,41
                          c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S23.2,41,22.5,41z"></path>
                    <path fill="#333333" 
                          d="M34.5,36c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5s3.5-1.6,3.5-3.5S36.3,36,34.5,36z M34.5,41   c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S35.3,41,34.5,41z"></path>
                    <line fill="none" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" x1="37" y1="8" x2="33.8" y2="11.1"></line>
                    <line fill="none" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" x1="29" y1="6" x2="29" y2="10"></line>
                    <line fill="none" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" x1="21" y1="8" x2="24" y2="11.1"></line>
                </svg>
                <div>
                    <span>
                        <strong>Other people want this. </strong>
                        {this.props.amount > 20 ? 
                          'Over 20 people have this in their carts right now.' : 
                          `${this.props.amount} people have this in their carts right now.` 
                        }
                    </span>
                </div>
            </div>
        );
    }
}