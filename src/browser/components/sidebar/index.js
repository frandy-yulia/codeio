import React, { Component } from 'react';
import {ipcRenderer} from 'electron';
import Toolbar from '../toolbar';
import Explorer from '../explorer';

import './styles.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTool: null,
            project: null
        }
        
    }

    componentDidMount() {
        ipcRenderer.on('opened-folder', function (evt, message) {
            this.setState({project: message});
        }.bind(this));
    }

    renderSelectedTool() {
        switch(this.state.selectedTool){
            case 'explorer': 
                console.log(this.state.project);
                
                return ( 
                    <div className="container">
                        <Explorer
                            project={(this.state.project !== null) ? this.state.project : {}}
                        />
                    </div>
                );
        }
    }

    render() {
        return (
            <div className="Sidebar">
                <Toolbar onSelected={(selected) => this.setState({selectedTool: selected})}/>
                {this.renderSelectedTool()}
            </div>
        );
    }
}


export default Sidebar;