import React from 'react';
import "./About.css"
import aboutimg from ".././assets/images/aboutimg.png";
function About() {
  return (
      <section id="about">
    <div class="about__container">
      <div class="about__title">
        <h3 class="heading">About Us</h3>
        <h2 class="sub__heading">Why Chose Us?</h2>
      </div>


      <div class="about__details">
        <div class="about__left">
          <img src={ aboutimg} alt="Food image"></img>
        </div>

        <div class="about__right">
          <h1>THE BEST FOOD IN ILE-IFE</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            A libero ab, consectetur dolor harum pariatur
            facere maxime amet enim corrupti. Lorem ipsum dolor
          </p>
          <p> sit amet consectetur adipisicing elit. Ab,
            repudiandae. Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, ipsum?.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam dolore repellendus quos cum
            quibusdam dignissimos laudantium sequi perspiciatis in.
          </p>
          {/* <small> use a very large image</small> */}
          <a href="#" class="btn about__btn">Learn More</a>
        </div>

      </div>
    </div>
  </section>
  )
}

export default About
