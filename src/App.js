import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import bootstrapjs from '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import About from './pages/about/About';
import Home from './pages/home/Home';
import ServicePage from './pages/service/ServicePage';
import ProjectPage from './pages/project/ProjectPage';
import Cta from './components/cta/Cta';
import Footer from './components/footer/Footer';
import BottomPage from './pages/bottom/BottomPage';


function App() {
  return (
    <div className=' container-fluid mp-zero'>
      <div className="row">
        <Home />
        <About />
        <ServicePage />
        <ProjectPage />
        <Cta />
        <div className='container'> 
        <BottomPage />
        </div>
       
        <Footer />
      </div>
    </div>
  );
}

export default App;
