import "./Footer.css"
import whiteLogo from "./assets/logo_white-removebg-preview.png";
import { SocialIcon } from 'react-social-icons'
import { MdEmail, MdLocalPhone } from "react-icons/md";
export default function Footer() {
  console.log(window.location.pathname );
  return (
    <div className="outerFooter" id="contact" >
        <div className="shellconLogo">
            <img src={whiteLogo}></img>
        </div>
        <div className="aboutFooter">
            <h1>About</h1>
            <a href="#home">Home</a>
            <a href="#service">Services</a>
            <a href="#team">Team</a>
            <a href="/projects">Projects</a>
            <a href="/gallery">Gallery</a>
        </div>
        <div className="officeHours">
            <h1>Office Hours</h1>
            <p>Monday to Friday <br></br>9:00 am to  6:00pm</p>
            <p>Saturday <br></br>9:00 am to  12:00 noon</p>
        </div>
        <div className="getSocial">
            <h1>Get Social</h1>
            <div className="socialIcons">
                <SocialIcon url="https://facebook.com" bgColor="None"></SocialIcon>
                <SocialIcon url="https://www.instagram.com/shellcon.ae?igsh=YTE1aW55Z3dzZXJ2&utm_source=qr" bgColor="None"></SocialIcon>
                <SocialIcon url="https://whatsapp.com" bgColor="None"></SocialIcon>
            </div>
            <div className="emailAndPhoneContainer">
                <div className="emailAndPhone">
                    <MdEmail style={{color:"white", height:"25px", width:"25px"}}></MdEmail>
                    <p>info@shellcon.ae</p>
                </div>
                <div className="emailAndPhone">
                    <MdLocalPhone style={{color:"white", height:"25px", width:"25px"}}></MdLocalPhone>
                    <p>+971 552755699</p>
                </div>
            </div>
            
        </div>
    </div>
  );
}