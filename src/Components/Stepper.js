import React from 'react'
import "../Styles/Stepper.less"
import CheckedIcon from "../Assests/puzzle.png";
const VerticalLinearStepper = () => {
  return (
  <div class="wrapper">
    <div class="center-line">
    </div>
    <div class="row row-1">
      <section>
      <img class="icon" src={CheckedIcon} alt='check'/>
        <div class="details">
          <span class="title">Minor in Artificial Intelligence(AI)</span>
          <span>2024-Present</span>
        </div>
        <p>Indian Institute of Technology Ropar (IIT Ropar)</p>
        <div class="bottom">
          {/* <a href="#">Read more</a> */}
          {/* <i>Grades- 91.4%</i> */}
        </div>
      </section>
    </div>
    <div class="row row-2">
      <section>
        <img class="icon" src={CheckedIcon} alt='check'/>
        <div class="details">
          <span class="title">Bachelor of Technology <br/>(Computer Engineering)</span>
          <span>2019 - 2023</span>
        </div>
        <p>ABES Engineering College, Ghaziabad</p>
        <div class="bottom">
          {/* <a href="#">Read more</a> */}
          <i>Grades- 8.47/10</i>
        </div>
      </section>
    </div>
    <div class="row row-1">
      <section>
      <img class="icon" src={CheckedIcon} alt='check'/>
        <div class="details">
          <span class="title">12<sup>th</sup> Standard</span>
          <span>2018-2019</span>
        </div>
        <p>Shree ThakurDwara Balika Vidyalaya, Ghaziabad</p>
        <div class="bottom">
          {/* <a href="#">Read more</a> */}
          <i>Grades- 91.4%</i>
        </div>
      </section>
    </div>
    <div class="row row-2">
    <section>
      <img class="icon" src={CheckedIcon} alt='check'/>
        <div class="details">
          <span class="title">10<sup>th</sup> Standard</span>
          <span>2016-2017</span>
        </div>
        <p>Shree ThakurDwara Balika Vidyalaya, Ghaziabad</p>
        <div class="bottom">
          {/* <a href="#">Read more</a> */}
          <i>Grades- 10.0/10.0</i>
        </div>
      </section>
    </div>
    
  </div>
  )
}

export default VerticalLinearStepper