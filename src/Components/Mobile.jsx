import React from 'react'
import "./Mobile.css"
import Todaydata from './Todaydata'
import Tendayfuture from './Tendayfuture'

function Mobile() {
    return (
        <>
            <div className="mobileDiv">
                <div className="topNotch"><div className="cemera"><div className="sensor1"></div><div className="sensor2"></div></div></div>
                <video autoPlay muted loop src="/videos/clear.mp4"></video >
                <div className="mobileDataInput">
                    <input type="text" placeholder='Enter City' name="" id="" />
                </div>
                <div className="mobileData">
                    <Todaydata />
                    <Tendayfuture />
                </div>
            </div >
        </>
    )


}

export default Mobile