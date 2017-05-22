'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';



injectTapEventPlugin();

const darkTheme=getMuiTheme(darkBaseTheme);

export default class Greeting extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    hello,{this.props.name}
                </h1>
                <MuiThemeProvider muiTheme={darkTheme}>
                    <div>
                        <TextField ref="newname" id = "nameField" onChange={this.props.valueChange} />
                        <RaisedButton label="pressme!" onClick={this.props.onClick2}/>
                    </div>
                </MuiThemeProvider>
                /*<button type="button" onClick={this.props.onClick2} >pressme</button>*/
            </div>
        );
    }
};

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    valueChange: PropTypes.func.isRequired,
    onClick2: PropTypes.func.isRequired,
};




