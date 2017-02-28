import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import Form from './Form';

class App extends Component {
    render() {
        return (
            <div id="app">
                <Header />
                <Intro />
                <Form />
            </div>
        );
    }
}

export default App;
