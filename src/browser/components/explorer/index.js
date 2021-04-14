import React, { Component } from 'react';
import {ipcRenderer} from 'electron';


import './styles.css';

class Explorer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isProject: false,
            project: null,
            name: 'No Open Folder'
        }

        ipcRenderer.on('opened-folder', function (evt, message) {
            this.setState({project: message})
        }.bind(this));
    }

    renderFileTree() {
        const {project} = this.state;
        
    }

    render() {
        return (
            <div className="Explorer">
                <div className="title">
                    <span>Explorer</span>
                </div>

                {this.renderFileTree()}
            </div>
        );
    }
}

export default Explorer;