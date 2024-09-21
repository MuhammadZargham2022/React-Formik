import { useState } from "react";
import Seletor from "./components/Seletor";
import "./App.scss";

function App() {
  const { value, setValue } = useState();

  const dummyData = [
    {
      id: 1,
      message: "Mango",
    },
    {
      id: 2,
      message: "Apple",
    },
    {
      id: 2,
      message: "Banana",
    },
  ];

  return (
    <>
      <section>
        <div>
          <Seletor data={dummyData}
          
          
          />
        </div>
      </section>
    </>
  );
}

export default App;
