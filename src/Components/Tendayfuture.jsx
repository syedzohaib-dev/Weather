import React from 'react'
import "./Tendayfuture.css"
import Tendayfuturebox from './Tendayfuturebox'

function Tendayfuture() {
    return (
        <>
            <div className="tenDayFuture">
                <div className="tenDayFureTop">
                    <p>Widly condition from 3AM-5PM with happy Rain expected at 6PM</p>
                </div>
                <div className="tenDayFutureBottom">
                    <Tendayfuturebox />
                    <Tendayfuturebox />
                    <Tendayfuturebox />
                    <Tendayfuturebox />
                    <Tendayfuturebox />
                    <Tendayfuturebox />
                    <Tendayfuturebox />
                    <Tendayfuturebox />
                    <Tendayfuturebox />
                    <Tendayfuturebox />
                    <Tendayfuturebox />
                </div>
            </div>

        </>
    )
}

export default Tendayfuture