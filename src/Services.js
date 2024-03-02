import "./Service.css"
function Services(){
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
                    <img className = "image" src="https://www.gstatic.com/webp/gallery3/1.sm.png" alt="Cheetah!" />
                    <img className = "image" src="https://www.gstatic.com/webp/gallery3/1.sm.png" alt="Cheetah!" />
                    <img className = "image" src="https://www.gstatic.com/webp/gallery3/1.sm.png" alt="Cheetah!" />
                    <img className = "image" src="https://www.gstatic.com/webp/gallery3/1.sm.png" alt="Cheetah!" />
                </div>
                <div className="emptyRowWhite1"></div>
                <div className="buttonHolder">
                    <button className="button">Civil Works</button>
                    <button className="button">Structural Extension</button>
                    <button className="button">MEP Works</button>
                    <button className="button">Interior Fitout</button>
                   
                </div>
                <div className = "whiteFooter"></div>
            </div>
            
            <div className="rightBorder"></div>
        </div>
    );
}

export default Services;