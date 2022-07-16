import {React,useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';

function App() {
  const [menu,setMenu] = useState("-1000%");
  const toggleMenu = ()=>{
    if(menu==="-1000%"){
      setMenu("0");
    }
    else{
      setMenu("-1000%");
    }
  }
  return (
    <div className="App">
      <Header toggleMenu = {toggleMenu} />
      <Home />
      <Sidebar menu = {menu} toggleMenu = {toggleMenu}/>
    </div>
  );
}

export default App;
