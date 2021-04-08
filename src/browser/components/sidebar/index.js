import React, { Component } from 'react';
import Toolbar from '../toolbar';

import './styles.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTool: null
        }
    }

    renderSelectedTool() {
        switch(this.state.selectedTool){
            case 'explorer': return( <div className="container">iiiiii</div>)
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