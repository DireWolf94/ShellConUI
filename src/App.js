
import './styles/App.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Home from './Home';
import { Routes, Route } from "react-router-dom"
import Projects from "./Projects"
import GalleryShow from './Gallery';
function App() {
  return (
    <div className="outerparent">
    <div id='navigation-bar'><NavigationBar></NavigationBar></div>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/projects' element={<Projects></Projects>}/>
        <Route path='/gallery' element={<GalleryShow></GalleryShow>}/>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
