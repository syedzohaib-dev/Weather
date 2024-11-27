import React from 'react'
import "./Todaydata.css"
function Todaydata() {
    return (
        <>
            <div className="todayDataDiv">
                <div className="city"><p>Karachi</p></div>
                <div className="tempreture"><p>30<sup>&#xb0;</sup></p></div>
                <div className="season"><p>Rain</p></div>
                <div className="hl"><p>H:36<sup>*</sup></p> <p>L:22<sup>*</sup></p></div>
            </div>

        </>
    )
}

export default Todaydata