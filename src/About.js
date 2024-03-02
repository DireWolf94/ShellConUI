import "./About.css"
function About(){
    return (
        <div className="aboutParentTop">
            <div className="leftBorder"></div>
            <div className="emptyVerticalSpaceParent">
                <div className="emptyVertcalWhiteSpace1"></div>
                <div className="emptyVertcalGreySpace1"></div>
            </div>
            <div className="aboutParent">
                <div className = "emptyHorizontalSpaceTop"></div>
                <div className = "blueLine"></div>
                <div className = "about">
                    <h1 >Heading1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                    </p>
                    <div className = "emptyHorizontalSpaceMid"></div>
                    <h1>Heading2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                    </p>
                </div>
                <div className = "greyFooter"></div>
            </div>
            <div className="statsParent">
                <div className = "emptyHorizontalSpaceStatsTop"></div>
                <div className = "statsBox1">
                    <h1 className="numberStyle">50+</h1>
                    <h1 className="textStyle">PROJECTS IN<br></br> DUBAI</h1>
                </div>
                <div className = "emptyHorizontalSpaceStatsMid"></div>
                <div className = "statsBox2">
                    <h1 className="numberStyle">30+</h1>
                    <h1 className="textStyle">YEARS<br></br> EXPERIENCE</h1>
                </div>
            </div>
            <div className = "emptyParent">
                <div className="emptyVertcalWhiteSpace1"></div>
                <div className="emptyVertcalGreySpace1"></div>
                
            </div>
            
            <div className="rightBorder"></div>
        </div>
    );
}

export default About;