import React from 'react';
import '../style/css/origin.css';

export default () => {
    return (
        <div id="origin">
            <p>USA is currently the country of origin. <span className="clickable">Learn more...</span></p>
            <p>If you would like another country added, <a href="mailto:mail@geometrics.io?subject=Please Add a Country" className="clickable link">email</a> us. If we get enough interest, we'll see what we can do. If you are a developer and would like to team up with us, find this open source project on <a href="https://github.com/geometrics-io/welcome-nomad" className="clickable link">Github</a>.</p>
        </div>
    )
}