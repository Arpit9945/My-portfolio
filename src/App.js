import './App.css';
import Footer from './components/Footer';
import Home from './components/routingFolders/Home';
import Navbar from './components/Navbar';
import Projects from './components/routingFolders/Projects';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Skills from './components/routingFolders/Skills';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row container-fluid">
        <div className="col-lg-3 col-md-12 col-sm-12 col-12"
        >
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-12 col-sm-12 col-12 bg-dark text-light"
         style={{ height: '100%' }}>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/projects' Component={Projects} />
            <Route path='/skills' Component={Skills} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
