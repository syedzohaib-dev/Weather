import React from 'react'
import "./Weeklyschedulerow.css"

function Weeklyschedulerow({ item, index }) {
    // console.log(item, index, "weekly schudle row")
    return (
        <>
            <div className="weeklyScheduleRowDiv" key={index}>
                <div className="scheduleDay"><p>{new Date(item.dt_txt).getDate()}</p></div>
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
                                    (<img src='/images/snow.png' width={30} />) : ("no data")
                }
                </div>

                <div className="scheduleRange">
                    <p>22 <sup>&#xb0;</sup></p>
                    <p className='secondP'>36 <sup>&#xb0;</sup></p>
                </div>

            </div>
        </>
    )
}

export default Weeklyschedulerow