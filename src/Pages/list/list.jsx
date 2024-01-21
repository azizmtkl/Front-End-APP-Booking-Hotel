import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css"
import { useLocation } from "react-router-dom";
import {format} from "date-fns";
import { DateRange } from 'react-date-range';
import Footer from "../../components/footer/Footer.jsx";
import SearchItem from "../../components/searchItem/SearchItem.jsx";
import MailList from "../../components/mailList/MailList.jsx";

const List = ()=>{

    const location = useLocation()

    const [destination , setDestionation] = useState(location.state.destination)
    const [date , setDate] = useState(location.state.date)
    const [option , setOption] = useState(location.state.option)
    const [openDate, setOpenDate] = useState(false);


    console.log(destination)



    console.log(location)

    return(

        <div>
        <Navbar />
        <Header _type="list" />

        <div className="list">

            <div className="listContainer">
                <div className="list_wrapper">
                    <div  className="list_search">

                     <h1>Search  </h1>
                     <div className="list_item">
                        <label htmlFor="">Destination</label>
                       <input type="text" placeholder="Casablanca"  />
                     </div>


                     <div  className="list_item">
                        <label htmlFor="">Check-in Date</label>
                       <span className="list_text"  onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate , "MM/dd/yyyy")} - to - ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                       {openDate && (
                          <DateRange
                          onChange={(item) => setDate([item.selection])}
                           minDate={new Date()}
                           ranges={date}
                           className="date1"
                             />
                            )}
                     </div>

                     <div className="Options">
                        <p>Options</p>

                        <div className="list_option">
                            <span>MIN price <small>(per night)</small></span>
                            <input min={0} type="number" />
                        </div>

                        <div className="list_option">
                            <span>MAX price <small>(per night)</small></span>
                            <input min={0} type="number" />
                        </div>

                        <div className="list_option">
                            <span>Adult</span>
                            <input min={1} type="number" placeholder="" />
                        </div>

                        <div className="list_option">
                            <span>Children</span>
                            <input min={0} type="number" placeholder="" />
                        </div>

                        <div className="list_option">
                            <span>Room</span>
                            <input min={1} type="number" placeholder="" />
                        </div>


                       </div>
                     

                       <button className="btn-search"> Search</button>

                    </div>
                   
                    <div className="list_result">
                    <SearchItem /> 
                  
                    </div>
                </div>
            </div>
        </div>

        <MailList />

       
        <Footer />
        </div>
    )
}

export default List;