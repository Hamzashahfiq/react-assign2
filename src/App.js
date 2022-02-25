import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import bootstrapjs  from '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import About from './pages/about/About';
import Home from './pages/home/Home';
import ServicePage from './pages/service/ServicePage';
import ProjectPage from './pages/project/ProjectPage';

function App() {
  return (
    <div>
      <Home />
      <About />
      <ServicePage />
      <ProjectPage />
    </div>
  );
}

export default App;
