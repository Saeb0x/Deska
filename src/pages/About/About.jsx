import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Deska</h2>
            <!--About Deska-->
            <p className='fs-17'>Deciding what book to read is always a challenge for some of us. Some people would rather turn to a friend than any random person or bestseller list, so imagine having a place where you could see your friends' or classmates' bookshelves and see what they think of all the books they read. <b>Deska</b> is that place,  It's a place where you can see the books your friends are reading. In addition to that, you'll be able to organize what you've read (or want to read) and you can even write reviews to tell people what you think. Start now by finding your next favorite book and join this journey with your friends to explore new territories, gather information, and expand your mind.</p>
            <p className='fs-17'>Deska - A Product of Tangent Tech</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
