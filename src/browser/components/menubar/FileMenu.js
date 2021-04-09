import React, { Component } from 'react';
import {ipcRenderer} from 'electron';

class FileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            selectedChild: false
        }
    }
    
    hendleOpenFolder() {
        this.props.onSelectedChild(!this.state.selectedChild,'open-folder')
    }

    render() {
        return (
            <div className="submenu">
                <div className="clickable item" children="New File" />
                <div className="separator" />
                <div className="clickable item" children="Open File" />
                <div className="clickable item" onClick={this.hendleOpenFolder.bind(this)} children="Open Folder" />
                <div className="separator" />
                <div className="clickable item" children="Save"  />
                <div className="clickable item" children="Save As..." />
            </div>
        );
    }
}

export default FileMenu;