import React, { Component,useState } from "react";
import Header from "./headerComponent";
import Home from "./homeComponent";
import  { ThemeProvider, createGlobalStyle } from "styled-components";
import { Button } from "react-bootstrap";
 
const GlobalStyle = createGlobalStyle`
body{
  background-color:${(props) =>
    props.theme.mode === "dark" ? "#111" : "#EEE"};
  color:${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};
}
`;



function Main(props){
  const [theme,setTheme] = useState({mode:'dark'})
    return (
   
      
        <React.Fragment>
         
          <Header />
          <Home />
        </React.Fragment>
      
     
    );
  }


export default Main;
