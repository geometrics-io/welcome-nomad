import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
let injectTapEventPlugin = require("react-tap-event-plugin")
import { green500 } from 'material-ui/styles/colors';
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import '../style/css/form.css';

injectTapEventPlugin()

const TravelForm = (props) => (
    <div>
        <MuiThemeProvider>
            <form action="">
                <Field
                    name="country"
                    component={TextField}
                    floatingLabelText="Where are you traveling to?"
                    hintText="Country"
                    underlineFocusStyle={{borderColor: green500}}
                    floatingLabelShrinkStyle={{color: green500}}
                />
            </form>
        </MuiThemeProvider>
    </div>
);

export default reduxForm({
    form: 'travel-form'  // a unique identifier for this form
})(TravelForm)
