import React from 'react'
import "./Tendayfuturebox.css"

function Tendayfuturebox({ index, item }) {
    return (
        <>
            <div className="tenDayFuturebox" >
                <div className="FutureDay"><p>{new Date(item.dt_txt).getHours()}</p></div>
                <div className="seasonIcon"><p>{
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

                }</p></div>
                <div className="predict">{item.weather[0].main}</div>
                <div className="futureTempreture"><p>{Math.floor(item.main.temp)}<sup>&#xb0;</sup></p></div>
            </div>
        </>
    )


}

export default Tendayfuturebox