import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import registerMessaging from './request-messaging-permission';

class App extends Component {
    componentDidMount() {
        registerMessaging();
    }
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React FCM</h1>
            </header>
            <p className="App-intro">
                Production
            </p>
          </div>
        );
    }
}

export default App;
