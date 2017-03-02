import React from 'react';
import Header from './Header';
import Intro from './Intro';
import TravelForm from './Form';
import DatePick from './DatePicker';
import Origin from './Origin';
import Footer from './Footer';

const App = () => {
    return (
        <div id="app">
            <Header />
            <Intro />
            <TravelForm />
            <DatePick />
            <Origin />
            <Footer />
        </div>
    );
}

export default App;
