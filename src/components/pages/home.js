import React from 'react'
import "../styling/home.css"
import img_1 from "../images/antivegan.png"

function home() {
  return (
    <div className='home'>
        <div className="box-left"></div>
        <div className="box-right">
          <img src={img_1} alt="" />
        </div>
    </div>
  )
}

export default home