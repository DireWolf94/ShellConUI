import "./Service.css"
import CardHolder from "./card";
import civilWorksLogo from "./assets/services/civil_works.png";
import structuralExtensionLogo from "./assets/services/interior_fitout.png";
import mepWorksLogo from "./assets/services/mep_works.png";
import interiorFitoutLogo from "./assets/services/structural extension.png";
function Services(){

    const mockContent = "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    return (
        <div className="serviceParentTop">
            <div className="leftBorder"></div>
            <div className="serviceParent">
                <div className="header">
                    <div className="headerTitle">Our Services</div>
                    <div className="blueBox"></div>
                    <div className="greyBox"></div>
                </div>
                <div className="emptyRowWhite"></div>
                <div className="imageHolder">
                <CardHolder text = "Civil Works" logo = {civilWorksLogo} content={mockContent}></CardHolder>
                <CardHolder text = "Structural Extension" logo = {structuralExtensionLogo} content={mockContent}></CardHolder>
                <CardHolder text = "MEP Works" logo = {mepWorksLogo} content={mockContent}></CardHolder>
                <CardHolder text = "Interior Fitout" logo = {interiorFitoutLogo} content={mockContent}></CardHolder>
                </div>
                
            </div>
            
            <div className="rightBorder"></div>
        </div>
    );
}

export default Services;