import React, { useEffect, useState } from 'react'
import "./Mobile.css"
import Todaydata from './Todaydata'
import Tendayfuture from './Tendayfuture'
import Weeklyschedule from './Weeklyschedule'

function Mobile() {
    const apiKey = '19077b1cae9e9a1914ed3565a69a19e7'
    const [citySearch, setCitySearch] = useState("karachi")
    const [currentWeatherData, setCurrentWeatherData] = useState([])
    const [lat, setLat] = useState('24.9056')
    const [lon, setLon] = useState('67.0822')
    const [forcastData, setFrocastdata] = useState(null)


    const currentWeatherCall = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}&units=metric`)
        const data = await res.json()
        console.log("current Weather Data ==> ", data)
        setLat(data.coord.lat)
        setLon(data.coord.lon)
        setCurrentWeatherData(data)
    }

    // -----------------------------------

    const forcastDatacall = async () => {
        const res = await fetch(`https://pro.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=19077b1cae9e9a1914ed3565a69a19e7`)
        const data = await res.json()
        console.log("ten day future data", data)
        setFrocastdata(data)
    }





    // -----------------------------------



    useEffect(() => {
        currentWeatherCall()
        forcastDatacall()
    }, [lat, lon])

    const searchCityHandler = (e) => {
        e.preventDefault()
        console.log("Handler Chala")
        currentWeatherCall()



        setCitySearch('')
    }



    return (
        <>
            <div className="mobileDiv">

                <div className="topNotch"><div className="cemera"><div className="sensor1"></div><div className="sensor2"></div></div></div>
                {currentWeatherData.weather && currentWeatherData.weather[0]?.main === "Haze" ?
                    (<video autoPlay muted loop src="/videos/hazebg.mp4"></video >) :
                    (<video autoPlay muted loop src="/videos/clear.mp4"></video >)
                        &&
                        currentWeatherData.weather && currentWeatherData.weather[0]?.main === "Rain" ?
                        (<video autoPlay muted loop src="/videos/rain.mp4"></video >) :
                        (<video autoPlay muted loop src="/videos/clear.mp4"></video >)
                            &&
                            currentWeatherData.weather && currentWeatherData.weather[0]?.description === "broken clouds" ?
                            (<video autoPlay muted loop src="/videos/brokenclouds.mp4"></video >) :
                            (<video autoPlay muted loop src="/videos/clear.mp4"></video >)
                                &&
                                currentWeatherData.weather && currentWeatherData.weather[0]?.main === "Clear" ?
                                (<video autoPlay muted loop src="/videos/clearsky.mp4"></video >) :
                                (<video autoPlay muted loop src="/videos/clear.mp4"></video >)
                                    &&
                                    currentWeatherData.weather && currentWeatherData.weather[0]?.main === "Snow" ?
                                    (<video autoPlay muted loop src="/videos/snow.mp4"></video >) :
                                    (<video autoPlay muted loop src="/videos/clear.mp4"></video >)

                }

                <div className="mobileDataInput">
                    <form onSubmit={searchCityHandler}>
                        <input value={citySearch} type="text" minLength={4} maxLength={15} placeholder='Enter City' required onChange={(e) => setCitySearch(e.target.value)} />
                        <button className='topBtn' type="submit">Go</button>
                    </form>
                </div>
                <div className="mobileData">
                    <Todaydata currentWeatherData={currentWeatherData} />
                    <Tendayfuture forcastData={forcastData} />
                    <Weeklyschedule forcastData={forcastData} />
                </div>
            </div >
        </>
    )


}

export default Mobile