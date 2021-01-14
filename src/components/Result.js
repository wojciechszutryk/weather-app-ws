import React from 'react';

const Result = (props) => {
    const { city, weather, error, temp, pressure, windSpeed, time, cityName} = props.information;
    let information = ''
    if(!error && !cityName && city) {
        information = (
            <div>Press Button to search information about: <strong>{city}</strong></div>
        )
    }
    else if (!error && city){
        information = (
            <>
                <h2>City name: <em>{city}</em></h2>
                <p>Temperature: <strong>{temp}</strong> &#176;C</p>
                <p>Pressure: <strong>{pressure}</strong> hPa</p>
                <p>Wind speed: <strong>{windSpeed}</strong> m/s</p>
                <p>Current Time: <strong>{time}</strong></p>
            </>
        )
    }
    return (
        <section  className="weather">
            {error ? <div>No information about <strong>{city}</strong></div> : information}
        </section>
    );
};

export default Result;
