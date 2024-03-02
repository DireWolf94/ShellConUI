import logo from './logo.svg';
import './App.css';
import Slider from './Slider';
import NavigationBar from './NavigationBar';
import About from './About';
import Services from './Services';
function App() {
  return (
    <div className='outer-parent'>
    <div id='navigation-bar'><NavigationBar></NavigationBar></div>
    <div className="parent">
      
      <div className='box' id='one'>
        <Slider></Slider>
        
      </div>
      <div className='box' id='two'><About></About></div>
      <div className='box' id='three'><Services></Services></div>
      <div className='box' id='four'></div>
    </div>
    </div>
  );
}

export default App;
