import React,{ Component } from 'react';

import './styles.css';

class ModalBox extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: null,message: null}
    }


    componentDidMount() {
        this.setState({selected: this.props.onSelected()});
    }

    render() {
        return (
            <div className="ModalBox">
                <div className="container">
                    <div className="top">
                        <div className="label">{this.props.message}</div>
                        <div className="row">
                            <input type="text"/>
                            <button type="button" className="clickable">ok</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalBox;