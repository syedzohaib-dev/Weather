import React from 'react'
import "./Weeklyschedulerow.css"

function Weeklyschedulerow() {
    return (
        <>
            <div className="weeklyScheduleRowDiv">
                <div className="scheduleDay"><p>Today</p></div>
                <div className="scheduleIcon">&#9784;</div>
                <div className="scheduleRange">
                    <p>22 <sup>&#xb0;</sup></p>
                    <p className='secondP'>36 <sup>&#xb0;</sup></p>

                </div>

            </div>
        </>
    )
}

export default Weeklyschedulerow