import React,{ Component } from 'react';

class ModalBox extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: null}
    }


    componentDidMount() {
        this.setState({selected: this.props.onSelected()});
        
    }

    render() {
        return (
            <div className="ModalBox">
                'ooooooooooo'
            </div>
        );
    }
}

export default ModalBox;