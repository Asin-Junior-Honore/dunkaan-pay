import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Dukaan_header from "./Components/Dukaan_header";
import Prices_payment from "./Components/Prices_payment";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" flex items-center justify-between">
      <div>
        <Navbar />
      </div>

      <div className=" relative w-[88%] z-[-15] px-[1rem]">
        <Dukaan_header />
        <div className=" mt-5">
          <Prices_payment />
        </div>
      </div>
    </div>
  );
}

export default App;
