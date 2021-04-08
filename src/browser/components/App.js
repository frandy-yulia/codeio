import React, {Component} from 'react';
import Header from './header';



import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <div className="row">
                    <span>u</span>
                    <span style={{color: 'white'}}>editor</span>
                </div>
                <footer>footer</footer>
            </div>
        );
    }
}

export default App;