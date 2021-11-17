import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import StudentState from './context/studentReportCard/StudentState';

const App = () => {
  return (
    <StudentState>
      <Router>   
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/' element={<Home/>} />
          </Routes>      
        </div>
      </Router>
    </StudentState>
  );
}

export default App;