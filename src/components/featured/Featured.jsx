import React from "react";
import "./Featured.css"

const Featured = () =>{
   
    return(
        <>

        <div className="section_container featured">

              <div className="featuredcard">
              <img src="https://a.cdn-hotels.com/gdcs/production150/d1191/a7ebecc7-3174-4ad7-b00d-4d71366f76fd.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="" />
                <div className="featuredContent">
                    <h4>Marrakech</h4>
                    <p>785 Hotels</p>
                </div>
            
              </div>

              <div className="featuredcard">
              <img src="https://www.welovebuzz.com/wp-content/uploads/2018/08/36466329632_43b4fba0a4_b.jpg" alt="" />

                <div className="featuredContent">
                    <h4>Tanger</h4>
                    <p> 458 Hotels</p>
                </div>
            
              </div>


              <div className="featuredcard">
              <img src="https://a.cdn-hotels.com/gdcs/production132/d727/b5d56a51-a937-432d-bc4a-90f325e85a29.jpg" alt="" />
                <div className="featuredContent">
                    <h4>Agadir</h4>
                    <p> 681 Hotels</p>
                </div>
            
              </div>

        </div>
        </>
    )

}


export default Featured;