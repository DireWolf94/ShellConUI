
import "./NavigationBar.css";
function NavigationBar(){
    return (
        <div className="topparent">
        <div className="topborder">
      
            <div className="rectangle1"></div>
            <div className="rectangle2"></div>
            <div className="rectangle3"></div>
        </div>
        <div className="topnav">
            <a href="#ContactUs">ContactUs</a>
            <a href="#Gallery">Gallery</a>
            <a href="#Projects">Projects</a>
            <a href="#Team">Team</a>
            <a href="#Services">Services</a>
            <a className="active" href="#Home">Home</a>
        </div>
        </div>
    );
}

export default NavigationBar;