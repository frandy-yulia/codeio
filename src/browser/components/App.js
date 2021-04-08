import React, {Component} from 'react';
import Header from './header';
import Sidebar from './sidebar';


import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="row">
                    <Sidebar/>
                    <span style={{color: 'white'}}>editor</span>
                </div>
                <footer>footer</footer>
            </div>
        );
    }
}

export default App;