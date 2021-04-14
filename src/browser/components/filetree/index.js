import React, { Component } from 'react';
import { ChevronDown,ChevronRightOutline } from '../icon';

import './styles.css';

class FileTree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            limitText: 20
        }
    }

    get iconName() {
        return (this.state.collapsed) ? <ChevronRightOutline className="icon"/> : <ChevronDown className="icon"/>;
    }

    get projectName() {
        const { projectName } = this.props;
        return (projectName.length > this.limitText) ? `${projectName.slice(0, this.limitText)}...` : projectName;
    }

    render() {
        return (
            <div className="FileTree">
                <div className="rootTitle title">
                    <div className="left column" onClick={() => this.setState({collapsed: !this.state.collapsed})}>
                        {this.iconName}
                        {this.projectName}
                    </div>
                    <div className="right column">
                    </div>
                </div>
                {/* {this.renderFileTree(!this.state.collapsed)} */}
            </div>
        );
    }
}

export default FileTree;