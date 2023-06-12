import React from 'react'
import Featured from '../../featured/Featured'
import Trustedby from '../../Trusted/Trustedby'
import Slide from '../../slide/Slide'
import  './Home.scss'
import {cards} from '../../../data'
import Card from '../../cardcat/Card'

function Home() {
  return (
    <div className='home'>
      <Featured />
      <Trustedby />
      <Slide slidesToShow={5} arrowsScroll={5}>
      {cards.map(card=>(
        <Card item={card} key={card.id}/>)
      )}

      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point.No hourly rates just project based pricing</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point.No hourly rates just project based pricing</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point.No hourly rates just project based pricing</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point.No hourly rates just project based pricing</p>            
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Fiver Business.</h1>
              <h1>A business solution designed for teams</h1>    
              <p>Upgrade to a curated experince packed with tools and benefits
                dedicated to business
                </p>  
                <div className="title">
                  <img src="./img/check.png" alt="" />
                  connect to freelancers with proven experince 
                  </div>
                  <div className="title">
                  <img src="./img/check.png" alt="" />
                  connect to freelancers with proven experince 
                  </div>
                  <div className="title">
                  <img src="./img/check.png" alt="" />
                  connect to freelancers with proven experince 
                  </div>
                  <div className="title">
                  <img src="./img/check.png" alt="" />
                  connect to freelancers with proven experince 
                  </div> 
                  <button>explore Fiver Business</button> 
                 
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home