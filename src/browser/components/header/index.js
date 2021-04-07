import React, { Component } from 'react';
import {remote} from 'electron';

import './styles.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            win: remote.getCurrentWindow(),
            max: false
        }
        setInterval(() => this.forceMaximize(),2)
    }

    hendleCloseWindow(win) {
        win.close();
    }

    hendleMaximizeWindow() {
        const {win,max} = this.state;
        this.setState({max: !max});
        if(!max && !win.isMaximized()){
            win.maximize();
        }else{
            win.unmaximize();
        }
    }

    hendleMinimizeWindow(win) {
        win.minimize();
    }


    renderUnmaximizeIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="16px" width="16">
                <path fill="currentColor" d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"></path>
            </svg>
        );
    }

    renderMaximizeIcon(){
        return (
            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"/>
            </svg>
        );
    }

    // fix maximize with drag
    forceMaximize() {
        const {win} = this.state;
        if(win.isMaximized()){
            this.setState({max: true});
        }else{
            this.setState({max: false});
        }
    }

    render() {
        const {win,max} = this.state;

        return (
            <div className="Header drag">
                <div className="left no-drag">
                    <div className="name">
                        <span>codeio</span>
                    </div>
                    {/* <Menu/> */}
                </div>
                <div className="right no-drag">
                    <div className="minimize icon clickable" onClick={() => this.hendleMinimizeWindow(win)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
                            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h12v2H6z"/>
                        </svg>
                    </div>
                    <div className="maximize icon clickable" onClick={this.hendleMaximizeWindow.bind(this)}>
                        {/* {this.renderMaximizeIcon()} */}
                        {(!max) ? this.renderMaximizeIcon() : this.renderUnmaximizeIcon()}
                    </div>
                    <div className="close icon clickable" onClick={() => this.hendleCloseWindow(win)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;