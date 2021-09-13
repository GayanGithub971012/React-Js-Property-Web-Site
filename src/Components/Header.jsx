import React from "react";
import Navbar from './Navbar';

function Header(){
    return(
        <div className="header">
            <Navbar/>
            <div className='intro'>
                <p>Looking for a Property</p>
                <h1><span>Buy </span>and<span> Sell</span> Properties</h1>
                <p className='details'>Lorem ipsum is the most popular form of dummy content or placeholder text. It is a pseudo-Latin word originated from Cicero's De Finibus Bonorum et Malorum. There is no actual meaning of any Lorem Ipsum sentences even in Latin or any other language. Then...</p>
                <a herf='#' className='header-btn'>Details</a>
            </div>
        </div>


    );
}

export default Header;