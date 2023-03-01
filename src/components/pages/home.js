import React from 'react'
import "../styling/home.css"
import img_1 from "../images/Mental.png"

function home() {
  return (
    <div className='home' id="home">
        <div className="box-left">
          <div className="container">
          <h1>MentalHealth</h1>
              <p>This article will represent you about something certanly about your personality mental health<p>
                <p className='second-p'>WE'LL START WITH COUPLE INTERISTING FACTS AND LEGENDS</p>
                <p className='third-p'>*first able don't spend lots of time for this article!</p>
              
            </p>
           </p>
          </div>
        </div>
        <div className="box-right">
          <img src={img_1} alt="" />

          <div className="text-box">
            <p>Hello, this is mental health blabh</p>
          </div>
        </div>
    </div>
  )
}

export default home