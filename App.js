import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Navibar from './Components/Navibar';
import Headeer from './Components/Headeer';
import HowitWorks from './Components/HowitWorks';
import Signup from './Components/Signup';
import Abouts from './Components/Abouts';
import Farmerpage from './Components/Farmerpage';
import Services from './Components/Services';
import Login from './Components/Login';
import Mprovider from './Components/Mprovider';
import supplier from './Components/supplier';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
     <Navibar/>
     <Headeer/>
     <HowitWorks/>
     <Routes>
    <Route path ="/*" element = {<Home/>}/>
    <Route path ="/Abouts" element = {<Abouts/>}/>
    <Route path ="/Farmerpage" element = {<Farmerpage/>}/>
    <Route path ="/Services" element = {<HowitWorks/>}/>
    <Route path ="/Mprovider" element = {<Mprovider/>}/>
    <Route path ="/supplier" element = {<supplier/>}/>
    <Route path ="/Signup" element = {<Signup/>}/>
    <Route path = "/Login" element = {<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
