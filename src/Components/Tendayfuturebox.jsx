import React from 'react'
import "./Tendayfuturebox.css"

function Tendayfuturebox() {
    return (
        <>
            <div className="tenDayFuturebox">
                <div className="FutureDay"><p>Now</p></div>
                <div className="seasonIcon"><p>&#9729;</p></div>
                <div className="predict">90%</div>
                <div className="futureTempreture"><p>30<sup>&#xb0;</sup></p></div>
            </div>
        </>
    )
}

export default Tendayfuturebox