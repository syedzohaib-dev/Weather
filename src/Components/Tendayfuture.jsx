import React, { useEffect, useState } from 'react'
import "./Tendayfuture.css"
import Tendayfuturebox from './Tendayfuturebox'

function Tendayfuture({ forcastData }) {

    if (!forcastData || Object.keys(forcastData).length === 0) {
        return (
            <div className="tenDayFuture" style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img src="/images/loader.gif" width={30} alt="" />
            </div>
        );
    }

    return (
        <>
            <div className="tenDayFuture">
                <div className="tenDayFureTop">
                    {/* <p>{forcastData.name}</p> */}
                    <p>{forcastData.city.name} Weather condition </p>
                </div>


                <div className="tenDayFutureBottom">
                    {
                        forcastData?.list.map((item, index) => (
                            < Tendayfuturebox key={index} index={index} item={item} />
                        ))
                    }



                </div>


            </div>

        </>
    )
}

export default Tendayfuture