import React, { Component } from 'react';

import './styles.css';

const tools = [
    'explorer'
];

class Toolbar extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            active: null
        }
    }

    componentDidMount() {
        this.selectOption(tools[0]);
    }

    selectOption(id) {
        this.props.onSelected(id);
        this.setState({active: id});
    }

    isActive(id) {
        return (this.state.active === id) ? 'active' : '';
    }

    clickExplorer() {
        if (this.isActive(tools[0])) {
            this.selectOption(null);
        } else {
            this.selectOption(tools[0]);
        }
    }

    render() {
        return(
            <div className="Toolbar">
                <div className="top">
                    {/* icon tree explorer */}
                    <svg xmlns="http://www.w3.org/2000/svg" className={`icon ${this.isActive(tools[0])}`} onClick={this.clickExplorer.bind(this)} viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"/>
                    </svg>
                </div>
                <div className="bottom"/>
            </div>
        );
    }
}

export default Toolbar;