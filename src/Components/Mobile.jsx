import React, { useEffect } from 'react'
import "./Mobile.css"
import Todaydata from './Todaydata'
import Tendayfuture from './Tendayfuture'
import Weeklyschedule from './Weeklyschedule'

function Mobile() {
    const currentWeatherCall = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=24.948351&lon=67.002068&appid=19077b1cae9e9a1914ed3565a69a19e7`)
        const data = res.json()
        console.log("Data ==> ", data)
    }
    useEffect(() => {
        currentWeatherCall()
    }, [currentWeatherCall()])


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
                    <Weeklyschedule />
                </div>
            </div >
        </>
    )


}

export default Mobile