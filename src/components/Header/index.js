import React from "react";
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="http://occ-0-185-1567.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbsTN5kEwNQNR-4yqEfUhML0a3XGFKVFA8OgfHj54BSy0V7fREshbDcGE2_O3tutFi5sIeFQ8YQPgIlAP9_oK55VYTGk_evxFykK.png?r=ff8"/>
                </a>
            </div>
        </header>
    );
}