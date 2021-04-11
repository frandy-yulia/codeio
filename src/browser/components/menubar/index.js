import React, { Component } from 'react';
import FileMenu from './FileMenu';

import ModalBox from '../modalbox';

import './styles.css';

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            message: null,
            collapsed: {
                file: true
            }
        }
    }

    get menuCollapsed() {
        return Object.keys(this.state.collapsed).map(key => this.state.collapsed[key])
            .reduce((prev, next) => prev || next, false);
    }

    toggle(key) {
        return this.setState({ collapsed: { [key]: !this.state.collapsed[key] }});
    }

    collapseAll() {
        let { collapsed } = this.state;
        collapsed = Object.keys(collapsed).reduce((prev, next) => ({ ...prev, [next]: true }), {});
        this.setState({ collapsed });
    }

    renderModal() {
        return (
            <ModalBox onClick={() => this.setState({selected: null})} onSelected={() => this.state.selected} message={this.state.message} />
        );
    }


    renderFileMenu(collapsed) {
        return (
            <div className="menuItem">
            <span className="title clickable" children="File" onClick={() => this.toggle('file')} />
            {!collapsed && (
                <FileMenu onSelectedChild={(selectedChild,message) => {
                    if(selectedChild){
                        this.setState({selected: selectedChild});
                        this.setState({message})
                        this.collapseAll();
                    }
                }}/>
            )}
        </div>
        );
    }

    render() {
        return (
            <div className="MenuBar">
                {this.renderFileMenu(this.state.collapsed.file)}
                {!this.menuCollapsed && <div className="clickableOverlay no-drag" onClick={this.collapseAll.bind(this)} />}

                {(this.state.selected === null) ? '' : this.renderModal()}
            </div>
        );
    }
}

export default MenuBar;