import React from 'react';
import '../style/css/footer.css';

export default () => {
    return (
        <div id="footerContainer">
            <div className="footerItem">
                <img src={require(`../images/airplane.svg`)} height="80" width="80" alt="icon" /><br/>
                <p>Made by<a href="geometrics.io"> geometrics.io</a></p>
            </div>
        </div>
    )
}