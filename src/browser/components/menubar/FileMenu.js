import React, { Component } from 'react';
import {ipcRenderer} from 'electron';

class FileMenu extends Component {
    
    hendleOpenFolder() {
        ipcRenderer.send('open-folder','halo test')
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