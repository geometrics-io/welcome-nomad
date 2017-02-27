import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';

class App extends Component {
    render() {
        return (
            <div id="app">
                <Header />
                <Intro />
            </div>
        );
    }
}

export default App;
