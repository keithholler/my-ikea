import React, { Component,useState } from "react";
import Header from "./headerComponent";
import Home from "./homeComponent";
import Footer from "./footerComponent";

 




function Main(props){

    return (
   
      
        <React.Fragment>
         
          <Header />
          <Home />
          <Footer/>
        </React.Fragment>
      
     
    );
  }


export default Main;
