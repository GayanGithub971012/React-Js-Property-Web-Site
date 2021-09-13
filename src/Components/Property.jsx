import React from "react";
import Bproperty from "./Bproperty";
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';

function Property(){
    return(
        <div className="product">
            <div className='p-heading'>
                <h3>property</h3>
                <p>Lorem ipsum is the most popular form of dummy content or placeholder text.</p>
            </div>

            <div className='product-container'>
                <Bproperty image={pimage1} name="AL-Musalla" price='$449.,998' />
                <Bproperty image={pimage2} name="AL-Hafz" price='$450.,998' />
                <Bproperty image={pimage3} name="AL-Bhanu" price='$489.,998' />

            </div>
            
        </div>


    );
}

export default Property;