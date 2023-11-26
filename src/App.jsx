import { useState } from "react";
import "./App.css";
import Inputcalci from "./component/Inputcalci";
import ButtonCalci from "./component/button";
function App() {
  const [inx, setinx] = useState("0");
  const press = (e) => {
    if (e.target.id === "C") {
      setinx("0");
    } else if (e.target.id === "=") {
      setinx(eval(inx));
    } else if (e.target.id === "DEL") {
      setinx(inx.slice(0, -1));
    } else {
      let temp;
      {
        inx === "0" ? (temp = e.target.id) : (temp = inx + e.target.id);
      }
      setinx(temp);
    }
  };
  const symbo = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "%",
    "/",
    "C",
    "=",
    "DEL",
  ];
  return (
    <center>
      <div id="Calci" className="my-4 py-3">
        <Inputcalci txt={inx} />
        <div>
          {symbo.map((item) => (
            <ButtonCalci key={item} value={item} handle={press} />
          ))}
        </div>
      </div>
    </center>
  );
}

export default App;
