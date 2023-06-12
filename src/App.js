import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Landingscreen from './screens/Landingscreen';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Landingscreen/>}/>
        <Route path="/home" exact element={<Homescreen/>}/>
        <Route path="/book/:carid/:fromdate/:todate" element={<Bookingscreen/>}/>
        <Route path="/login" exact element={<Loginscreen/>}/>
        <Route path="/register" exact element={<Registerscreen/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
