import "./Service.css"
import CardHolder from "./card";
import civilWorksLogo from "./assets/services/civil_works.png";
import structuralExtensionLogo from "./assets/services/interior_fitout.png";
import mepWorksLogo from "./assets/services/mep_works.png";
import interiorFitoutLogo from "./assets/services/structural extension.png";
import "./Team.css"
import {abbaja_content, babuja_content, sakaku_content} from "./assets/TeamConstants.js"
function Team(){


    return (
        <div className="serviceParentTop">
            <div className="leftBorder"></div>
            <div className="serviceParent">
                <div className="header">
                    <div className="headerTitleTeam">Meet the Team</div>
                    {/* <div className="blueBox"></div> */}
                    {/* <div className="greyBox"></div> */}
                </div>
                <div className="emptyRowWhite"></div>
                <div className="imageHolder">
                <CardHolder text = "SAKKARIYA POTTENGAD" logo = {structuralExtensionLogo} content={abbaja_content} subheader="GENERAL MANAGER"></CardHolder>
                <CardHolder text = "HARIS POTTENGHAT" logo = {mepWorksLogo} content={babuja_content} subheader="COMMERCIAL MANAGER"></CardHolder>
                <CardHolder text = "ZAHIR KANNAMTHODI" logo = {interiorFitoutLogo} content={sakaku_content} subheader="MANAGER (MEP)"></CardHolder>
                </div>
                
            </div>
            
            <div className="rightBorder"></div>
        </div>
    );
}

export default Team;