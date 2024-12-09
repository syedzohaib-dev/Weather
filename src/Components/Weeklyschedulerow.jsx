import React from 'react'
import "./Weeklyschedulerow.css"

function Weeklyschedulerow({ item, index }) {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    return (
        <>
            <div className="weeklyScheduleRowDiv" key={index}>
                <div className="scheduleDay"><p>{new Date(item.dt_txt).getDate()} -
                    {months[new Date(item.dt_txt).getMonth()]}  -
                    || {new Date(item.dt * 1000).getHours()}
                    {new Date(item.dt * 1000).getHours() >= 12 ? "PM" : "AM"}</p>
                    </div>
                <div className="scheduleIcon">{
                    item.weather[0].main === "Clouds" ?
                        (<img src='/images/whitecloud.png' width={30} />) : ("no data")
                            &&
                            item.weather[0].main === "Clear" ?
                            (<img src='/images/sun.png' width={30} />) : ("no data")
                                &&
                                item.weather[0].main === "Rain" ?
                                (<img src='/images/raincloud.png' width={30} />) : ("no data")
                                    &&
                                    item.weather[0].main === "Snow" ?
                                    (<img src='/images/snow.png' width={20} />) : ("no data")
                }
                </div>

                <div className="scheduleRange">
                    <p>{Math.round(item.main.temp_min)} <sup>&#xb0;</sup></p>
                    <p className='secondP'>{Math.round(item.main.temp_max)}<sup>&#xb0;</sup></p>
                </div>
            </div>
        </>

    )
}

export default Weeklyschedulerow