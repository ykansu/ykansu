import React, {Component} from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import ButtonContainer from '../containers/ButtonContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <ButtonContainer/>
                </header>
            </div>
        );
    }
}

export default App;
