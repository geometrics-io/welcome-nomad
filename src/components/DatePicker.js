import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: green500,
        primary2Color: green500,
    },
});

export default class DatePick extends React.Component {
    constructor(props) {
        super(props);

        const minDate = new Date();
        const maxDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 1);
        minDate.setHours(0, 0, 0, 0);
        maxDate.setFullYear(maxDate.getFullYear() + 1);
        maxDate.setHours(0, 0, 0, 0);

        this.state = {
            minDate: minDate,
            maxDate: maxDate,
            autoOk: false,
            disableYearSelection: false,
        };
    }

    handleChangeMinDate = (event, date) => {
        this.setState({
            minDate: date,
        });
    };

    handleChangeMaxDate = (event, date) => {
        this.setState({
            maxDate: date,
        });
    };

    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <DatePicker
                        onChange={this.handleChangeMinDate}
                        autoOk={this.state.autoOk}
                        floatingLabelText="Arrival"
                        disableYearSelection={this.state.disableYearSelection}
                        dialogContainerStyle={{div: green500}}
                    />
                </MuiThemeProvider>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <DatePicker
                        onChange={this.handleChangeMaxDate}
                        autoOk={this.state.autoOk}
                        floatingLabelText="Departure"
                        disableYearSelection={this.state.disableYearSelection}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}