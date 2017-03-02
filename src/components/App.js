import React from 'react';
// MUI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green500 } from 'material-ui/styles/colors';
//
import Header from './Header';
import Intro from './Intro';
import Form from './Form';
import Origin from './Origin';
import Footer from './Footer';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green500,
        primary2Color: green500,
    },
});

const App = () => {
    return (
        <div id="app">
            <Header />
            <Intro />
            <MuiThemeProvider muiTheme={muiTheme}>
                <Form />
            </MuiThemeProvider>
            <Origin />
            <Footer />
        </div>
    );
}

export default App;
