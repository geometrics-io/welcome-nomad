import React from 'react';
import '../style/css/origin.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class  extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }
    additionalInfo() {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        return (
            <div id="origin">
                <p>USA is currently the country of origin. <span className="clickable" onClick={this.additionalInfo.bind(this)}>Learn {this.state.open === false ? 'more' : 'less'}...</span></p>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.open === true ?
                        <div>
                            <p>If you would like another country added, <a href="mailto:mail@geometrics.io?subject=Please Add a Country" target="_blank" className="clickable link">email</a> us. If we get enough interest, we'll see what we can do. If you are a developer and would like to team up with us, find this open source project on <a href="https://github.com/geometrics-io/welcome-nomad" target="_blank" className="clickable link">Github</a>.</p>
                        </div>
                        : ''}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}