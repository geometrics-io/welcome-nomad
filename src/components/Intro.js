import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../style/css/intro.css';

export default () => {
    return (
        <div id="introContainer">
            <ReactCSSTransitionGroup
                transitionName="inspectorIcon"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <img src={require(`../images/inspector.svg`)} height="30" width="30" alt="icon" />
                <span>Knowing the Rules Makes Better Travel</span>
            </ReactCSSTransitionGroup>

        </div>
    );
}
