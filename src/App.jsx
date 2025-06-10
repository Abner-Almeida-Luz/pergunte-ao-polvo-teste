import './App.css';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
    
  return (
    <div className="body">
      <div className='escopo' id='escopo-app'>
        <header>
          <div id="links">
            Navegue entre as partes do site <br />
            <Link to={"/portifolio"}>
              <button className='links'>Portfólio</button>
            </Link>
            <Link to={"/polvo"}>
              <button className='links'>Pergunte ao polvo</button>
            </Link>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;