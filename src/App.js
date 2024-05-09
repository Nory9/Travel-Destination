// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import About from './components/About'
 import { Route, Routes } from 'react-router-dom';
//  import TourDetails from '..//TourDetails/TourDetails'
import TourDetails from './components/TourDetails/TourDetails';
function App() {
  return (
    <>
    {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/city/:id" element={<TourDetails/>}></Route>
    </Routes>
    </>
  );
}

export default App;
