import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import Form from './Form';
import DatePick from './DatePicker';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div id="app">
                <Header />
                <Intro />
                <Form />
                <DatePick />
                <Footer />
            </div>
        );
    }
}

export default App;
