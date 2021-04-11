import React,{ Component } from 'react';
import {ipcRenderer} from 'electron';

import './styles.css';

class ModalBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            message: null,
            value: null,
            isSend: false
        }
    }

    componentDidMount() {
        this.setState({selected: this.props.onSelected()});
        switch(this.props.message){
            case 'Open Folder': 
                this.setState({value: process.env.HOME})
            break;
        }
    }

    hendleClick() {
        ipcRenderer.send(this.props.message,this.state.value);
        this.props.onClick();
    }

    hendleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className="ModalBox">
                <div className="container">
                    <div className="top">
                        <div className="label">{this.props.message}</div>
                        <div className="row">
                            <input type="text" value={this.state.value} onChange={this.hendleChange.bind(this)}/>
                            <button type="button" className="clickable" onClick={this.hendleClick.bind(this)}>
                                ok
                            </button>
                        </div>
                    </div>

                    <div {...this.props} className="close-modal"></div>
                </div>
            </div>
        );
    }
}

export default ModalBox;