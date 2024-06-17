import { useState, useEffect } from "react";
import blueLogo from "./assets/logo-removebg-preview.png";
import "./styles/NavigationBar.css";
import DrawerList from "./SideNav";
import { HashLink as Link } from "react-router-hash-link";

function NavigationBar(){
    console.log(window.location.pathname);
    const [color,setColor] = useState(null);
    
    useEffect(() => {
        if(window.location.pathname === "/projects" || window.location.pathname === "/gallery" ){
            setColor('rgba(220,243,255,255)');
        }; 
    }, [color]);
    
    // document.getElementById("navigation-bar").style.backgroundColor = color;
    return (
        <div className="topparent" style={{backgroundColor:color}}>
        <div className="topborder">
      
            <div className="rectangle1"></div>
            <div className="rectangle2"></div>
            <div className="rectangle3"></div>
        </div>
        <div className="topnavouter">
            <div className="logoholder">
                <img src = {blueLogo} alt = {""}></img>
            </div>
            
            <div className="topnav">
                <div className="displaysidemenu">
                <DrawerList></DrawerList>
                </div>
                <Link to="/#contact" activeClassName = "active" onClick={()=>{setColor(null)}}>Contact Us</Link>
                <Link to="/gallery" activeClassName = "active" onClick={()=>{setColor('rgba(220,243,255,255)')}}>Gallery</Link>
                <Link to="/projects" activeClassName = "active" onClick={()=>{setColor('rgba(220,243,255,255)')}}>Projects</Link>
                <Link to="/#service" activeClassName = "active" onClick={()=>{setColor(null)}}>Services</Link>
                <Link to="/" activeClassName = "active" onClick={()=>{setColor(null)}}>Home</Link>
                
            </div>
        
        </div>
        </div>
    );
}

export default NavigationBar;