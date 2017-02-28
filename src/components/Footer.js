import React from 'react';
import '../style/css/footer.css';

export default () => {
    return (
        <div id="footerContainer">
                <img src={require(`../images/airplane.svg`)} height="80" width="80" alt="icon" /><br/>
                <p>Made by<a href="https://geometrics.io" target="_blank"> geometrics.io</a></p>
        </div>
    )
}