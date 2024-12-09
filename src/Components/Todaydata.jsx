import React from 'react'
import "./Todaydata.css"
function Todaydata({ currentWeatherData }) {
    if (!currentWeatherData || Object.keys(currentWeatherData).length === 0) {
        return (
            <div className="todayDataDiv" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {/* <p style={{ color: "white" }}>Loading...</p> */}
                <img src="/images/loader.gif" width={30} alt="" />
            </div>
        );
    }
    return (
        <>
            <div className="todayDataDiv">
                <div className="city"><p>{currentWeatherData?.name}</p></div>
                <div className="tempreture"><p>{Math.round(currentWeatherData?.main.temp)}<sup>&#xb0;</sup></p></div>
                <div className="season"><p>{currentWeatherData.weather[0].main}</p></div>
                <div className="hl">
                    <p>H:{Math.round(currentWeatherData?.main.temp_min)}<sup>&#xb0;</sup></p>
                    <p>L:{Math.round(currentWeatherData?.main.temp_max)}<sup>&#xb0;</sup></p>
                </div>
            </div>

        </>
    )
}

export default Todaydata