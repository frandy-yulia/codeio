import React, { Component } from 'react';


import './styles.css';

class Explorer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProject: false
        }

        
    }

    render() {
        return (
            <div className="Explorer">
                <div className="title">
                    <span>Explorer</span>
                </div>
            </div>
        );
    }
}

export default Explorer;