import { useState } from "react";
import polvo from '/src/pergunte-ao-polvo.png';
import './App.css';

function Polvo() {
  const [choose, setChoose] = useState("");

  function handleClick(input1, input2) {
    const result = Math.random() < 0.5 ? input1 : input2;
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    setChoose(result);

  }

  return (
    <div className="body">
      <div className="container" id='container-polvo'>
          <img src={polvo} alt="" id="img"/>
          <br />

          <input type="text" className="inputs" id="input1" />
          <input type="text" className="inputs" id="input2" />
          <br />

           <button 
            id='button' 
            onClick={() => handleClick(
              document.getElementById("input1").value,
              document.getElementById("input2").value
            )}
          >
            Escolher
          </button>
          
          <p id='res'>O valor escolhido é {choose}</p>
      </div>
    </div>
  );
}

export default Polvo;