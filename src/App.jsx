import './App.css';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
    
  return (
     <div className='escopo' id='escopo-app'>
        <header>
        <main>
        <Outlet /> {}
        </main>
        <div id="links">
        Navegue entre as partes do site <br /> 
        <Link to={"/polvo"}>
        <button className='links'>Pergunte ao polvo</button>
        </Link>
        <Link to={"/calculadora"}>
        <button className='links'>Calculadora</button>
        </Link>
        </div>
        </header>
      
    </div>
  );
};

export default App;