import "./styles/About.css"
function About(){
    return (
        <div className="aboutParentTop1">
        <div className="aboutParentHeader">
            <div className="leftBorde"></div>
            <div className = "emptyHorizontalSpaceTop"></div>
            <div className="rightBorde"></div>
        </div>
        <div className="aboutParentTop">
            <div className="leftBorde"></div>
            <div className="emptyVerticalSpaceParent">
                <div className="emptyVertcalWhiteSpace1"></div>
                {/* <div className="emptyVertcalGreySpace1"></div> */}
            </div>
            <div className="aboutParent">
                {/* <div className = "emptyHorizontalSpaceTop"></div> */}
                <div className = "blueLine"></div>
                <div className = "about">
                    <h1 >About Shellcon</h1>
                    <p>Shellcon is a Dubai-based, privately held construction business that
                        specializes in projects such as Residential villas, Commercial structures,
                        Villa extensions, Pool and Landscaping, MEP, and Interior fitouts.
                        The organization is owned and operated by skilled and qualified
                        professionals
                    </p>
                    {/* <div className = "emptyHorizontalSpaceMid"></div> */}
                    
                    <h1>Our Mission</h1>
                    <p>Our goal is to handle every project with the best possible expertise and
                        the greatest quality of service. Our commitment to a strong work ethic
                        and our enthusiasm for keeping up to date with the most recent
                        developments in our company
                    </p>
                    <h1>Our Experience</h1>
                    <p>Our goal is to handle every project with the best possible expertise and
                        the greatest quality of service. Our commitment to a strong work ethic
                        and our enthusiasm for keeping up to date with the most recent
                        developments in our company
                    </p>
                    {/* <div className = "statsParent">
                        <div className = "statsBox1">
                            <h1 className="numberStyle">50+</h1>
                            <h1 className="textStyle">PROJECTS IN<br></br> DUBAI</h1>
                        </div>
                        <div className = "statsBox2">
                            <h1 className="numberStyle">30+</h1>
                            <h1 className="textStyle">YEARS<br></br> EXPERIENCE</h1>
                        </div>
                    </div> */}
                    
                </div>
                {/* <div className = "greyFooter"></div> */}
            </div>
            {/* <div className="statsParent">
                <div className = "statsBox1">
                    <h1 className="numberStyle">50+</h1>
                    <h1 className="textStyle">PROJECTS IN<br></br> DUBAI</h1>
                </div>
                <div className = "emptyHorizontalSpaceStatsMid"></div>
                <div className = "statsBox2">
                    <h1 className="numberStyle">30+</h1>
                    <h1 className="textStyle">YEARS<br></br> EXPERIENCE</h1>
                </div>
            </div> */}
            
            {/* <div className = "emptyParent">
                <div className="emptyVertcalWhiteSpace1"></div>
                
            </div> */}
            
            <div className="rightBorde"></div>
        </div>
        </div>
    );
}

export default About;