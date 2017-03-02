import React from 'react';
let injectTapEventPlugin = require("react-tap-event-plugin")
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import { TextField, DatePicker } from 'redux-form-material-ui'
import '../style/css/form.css';
injectTapEventPlugin()

const required = value => value == null ? 'Required' : undefined

class Form extends React.Component {
    componentDidMount() {
        this.refs.country           // the Field
            .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
            .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="country"
                    component={TextField}
                    type="text"
                    floatingLabelText="Where are you traveling to?"
                    hintText="Country"
                    validate={required}
                    ref="country" withRef
                />
                <Field name="arrival" component={DatePicker} format={null} hintText="Arrival" validate={required} onChange={(value) => {
                    console.log(value);
                }}/>
                <Field name="departure" component={DatePicker} format={null} hintText="Departure" validate={required} />
                <RaisedButton label="Submit" disabled={pristine || submitting} onClick={reset} style={{marginTop: 16}}/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'travel-form',
})(Form)
