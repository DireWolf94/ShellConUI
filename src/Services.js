import "./styles/Service.css"
import CardHolder from "./card";
import civilWorksLogo from "./assets/services/civil_works.png";
import structuralExtensionLogo from "./assets/services/interior_fitout.png";
import mepWorksLogo from "./assets/services/mep_works.png";
import interiorFitoutLogo from "./assets/services/structural extension.png";
import servicesContent from "./constants/services";

function Services(){

    const mockContent = "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
    return (
        <div className="serviceParentTop">
            <div className="leftBorder"></div>
            <div className="serviceParent">
                <div className="header">
                    <div className="headerTitle">Our Services</div>
                </div>
                <div className="emptyRowWhite"></div>
                <div className="imageHolder">
                <CardHolder text = "Civil Works" logo = {civilWorksLogo} content={servicesContent["CivilWorks"]}></CardHolder>
                <CardHolder text = "Structural Works" logo = {structuralExtensionLogo} content={servicesContent["StructuralExtension"]}></CardHolder>
                <CardHolder text = "MEP Works" logo = {mepWorksLogo} content={servicesContent["MEP"]}></CardHolder>
                <CardHolder text = "Interior Fitout" logo = {interiorFitoutLogo} content={servicesContent["Interior"]}></CardHolder>
                </div>
                <div className="emptyRowWhite"></div>
            </div>
            
            <div className="rightBorder"></div>
        </div>
    );
}

export default Services;