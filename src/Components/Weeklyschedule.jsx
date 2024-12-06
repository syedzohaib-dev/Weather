import React from 'react'
import "./Weeklyschedule.css"
import Weeklyschedulerow from './Weeklyschedulerow'

function Weeklyschedule({ forcastData }) {
    return (
        <>
            <div className="weeklyScheduleDiv">
                <div className="tenDayFrocastp"><p>&#9783; 16-DAY FORECAST</p></div>
                <div className="weeklyScheduleBottom">
                    {forcastData?.list.map((item, index) => (
                        <Weeklyschedulerow  index={index} item={item} />
                    ))
                    }


                </div>
            </div>

        </>
    )
}

export default Weeklyschedule