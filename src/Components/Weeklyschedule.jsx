import React from 'react'
import "./Weeklyschedule.css"
import Weeklyschedulerow from './Weeklyschedulerow'

function Weeklyschedule() {
    return (
        <>
            <div className="weeklyScheduleDiv">
                <div className="tenDayFrocastp"><p>&#9783; 10-DAY FORECAST</p></div>
                <div className="weeklyScheduleBottom">
                    <Weeklyschedulerow />
                    <Weeklyschedulerow />
                    <Weeklyschedulerow />
                    <Weeklyschedulerow />
                    <Weeklyschedulerow />
                    <Weeklyschedulerow />
                    <Weeklyschedulerow />
                    <Weeklyschedulerow />
                    <Weeklyschedulerow />
                    <Weeklyschedulerow />
                </div>
            </div>

        </>
    )
}

export default Weeklyschedule