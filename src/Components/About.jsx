import React from "react";
import aboutimage from '../images/hero.png';

function About(){
    return(
        <div className="about">
            <div className='about-model'>
                <img src={aboutimage} alt='about image'/>
            </div>
            <div className='about-text'>
                <h2>We Are the Best <br/>Real Estate  Company</h2>
                <p>Designers & webmasters use it to visualize existence of text form of content on websites, wireframes or posters. In most of the cases, the person who writes the content and design the page are two different people. Designers prefer to just put dummy content before the final version is ready to make sure you have the right font size, color, line height, font-family, etc.</p>
                <button>View More Details</button>
            </div>
        </div>


    );
}

export default About;