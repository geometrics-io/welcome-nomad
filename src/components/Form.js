import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
let injectTapEventPlugin = require("react-tap-event-plugin")
import { green500 } from 'material-ui/styles/colors'
import '../style/css/form.css';

injectTapEventPlugin()

export default () => (
    <div>
        <MuiThemeProvider>
            <TextField
                floatingLabelText="Where are you traveling to?"
                hintText="Country"
                underlineFocusStyle={{borderColor: green500}}
                floatingLabelShrinkStyle={{color: green500}}
            />
        </MuiThemeProvider>
    </div>
);
