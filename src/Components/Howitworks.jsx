import React from "react";

function Howitworks(){
    return(
        <div className="how-it-works">
           <div className='container'>
               <h2>How It Works</h2>
               <div className='flex'>
                   <div>
                       <span className='fas fa-home'></span>
                       <h4>Find A Property</h4>
                       <p>Lorem ipsum is the most popular form of dummy content or placeholder text. </p>
                    </div>

                    <div>
                       <span className='fas fa-doller-sign'></span>
                       <h4>Buy A Property</h4>
                       <p>Lorem ipsum is the most popular form of dummy content or placeholder text. </p>
                    </div>

                    <div>
                       <span className='fas fa-chart-line'></span>
                       <h4>Investing</h4>
                       <p>Lorem ipsum is the most popular form of dummy content or placeholder text. </p>
                    </div>

               </div>
           </div>
        </div>


    );
}

export default Howitworks;