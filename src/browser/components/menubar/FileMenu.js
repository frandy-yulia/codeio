import React, { Component } from 'react';

class FileMenu extends Component {
    
    render() {
        return (
            <div className="submenu">
                <div className="clickable item" children="New File" />
                <div className="separator" />
                <div className="clickable item" children="Open File" />
                <div className="clickable item" children="Open Folder" />
                <div className="separator" />
                <div className="clickable item" children="Save"  />
                <div className="clickable item" children="Save As..." />
            </div>
        );
    }
}

export default FileMenu;