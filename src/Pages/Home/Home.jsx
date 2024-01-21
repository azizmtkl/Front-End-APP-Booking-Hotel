import React from "react";
import './Home.css'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PList from "../../components/plist/Plist.jsx";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties.jsx";
import MailList from "../../components/mailList/MailList.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Home =  () =>{

    return(
        <>
        <Navbar />
        <Header />   
        <div className="homeContainer">
            <Featured />
        </div>

        <PList />
        <FeaturedProperties/>
        <MailList />
        <Footer />
        </>
    )

}


export default Home;