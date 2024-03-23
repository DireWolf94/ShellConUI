
import './App.css';
import Slider from './Slider';
import NavigationBar from './NavigationBar';
import About from './About';
import Services from './Services';
import Footer from './Footer';
import Team from './Team';
function Home() {
  return (
    <div className="parent">
      
      <div className='box' id='home'>
        <Slider></Slider>
        
      </div>
      <div className='box' id='about'><About></About></div>
      <div className='box' id='service'><Services></Services></div>
      <div className='box' id='team'><Team></Team></div>
      
    
    </div>
  );
}

export default Home;
