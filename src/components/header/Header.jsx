import React from "react";
import './Header.css';
import 'remixicon/fonts/remixicon.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
import { DateRange } from 'react-date-range';
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({_type}) =>{

    const [destination , setDestination] = useState("");

    const [openDate, setOpenDate] = useState(false)

    const [openOption, setOpenOption] =useState(false)

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [option , setOption] =useState(
        {
            adult: 1,
            children : 0,
            room: 1
        });

        const optionCounter = (name , operation) =>{
            setOption(prev =>{
               return{
                ...prev,
                [name]: operation === "i"? option[name] +1 : option[name] -1  
            }})
        }


        const navigate = useNavigate()

        const handleSearch  = () =>{
            navigate("/hotels", {state : {destination , date , option}})
        }

    

   return(
    <>
    <div className="header">
        <div className="section_container">
        <div className="headerList">
          <div className="headerItemList active">
             <i class="ri-hotel-bed-fill"></i>
             <span>Stays</span>
          </div>

           <div className="headerItemList">
            <i class="ri-flight-takeoff-fill"></i>
            <span>Flights</span>
</div>

<div className="headerItemList">
<i class="ri-mac-fill"></i>
<span>Attractions</span>
</div>

<div className="headerItemList">
<i class="ri-car-fill"></i>
<span>Car rentals</span>
</div>

<div className="headerItemList">
<i class="ri-taxi-fill"></i>
<span>Airport taxis</span>
</div>


          </div>

          { _type !== "list" &&
          <>
          <h1 className="headerTitle">A lifetime of discount ? It's Genius ! </h1>
          <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
          

          <button className="headerBtn">Login / Register</button>

          <div className="headerSearch">
            <div className="headerSearchItem">
            <i class="ri-hotel-bed-line"></i>
                <input type="text" placeholder="Where are you going ?" 
                  onChange={(e) => setDestination(e.target.value)}
                /> 
            
            </div>

            <div className="headerSearchItem">
            <i class="ri-calendar-2-line"></i> 
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">
                {`${format(date[0].startDate , "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            
            
            {openDate && <DateRange
             editableDateInputs={true}
             onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
             ranges={date}
             className="date"
             minDate={new date()}
                  />}
            </span>

           

            </div>

            <div className="headerSearchItem">
            <i class="ri-group-line"></i>
            <span onClick={()=>setOpenOption(!openOption)} className="headerSearchText">{`${option.adult} adult - ${option.children} children - ${option.room} room `}</span>

            { openOption && <div className="options">
                <div className="option_item">
                    <div className="option_text">Adult</div>
                    <div className="option_count">
                    <button className="option_counter_button" 
                    onClick={()=>optionCounter("adult" , "d")} disabled={option.adult<= 1}>-</button>
                    <div className="option_counter_number">{option.adult}</div>
                    <button className="option_counter_button" onClick={()=>optionCounter("adult" , "i")}>+</button>
                    </div>
                </div>

                <div className="option_item">
                    <div className="option_text">children</div>
                    <div className="option_count">
                    <button className="option_counter_button" onClick={()=>optionCounter("children" , "d")}
                     disabled={option.children <=0}>-</button>
                    <div className="option_counter_number">{option.children}</div>
                    <button className="option_counter_button" onClick={()=>optionCounter("children" , "i")}>+</button>
                    </div>
                </div>


                <div className="option_item">
                    <div className="option_text">room</div>
                    <div className="option_count">
                    <button className="option_counter_button" onClick={()=>optionCounter("room" , "d")}
                    disabled={option.room<=1}
                    >-</button>
                    <div className="option_counter_number">{option.room}</div>
                    <button className="option_counter_button" onClick={()=>optionCounter("room" , "i")}>+</button>
                    </div>
                </div>

            </div>
            
            }
            </div>
            <button className="headerSearchBtn" onClick={handleSearch}>Search</button>




          </div>

          </>
          }



        </div>
    </div>
    </>
   )
}


export default Header