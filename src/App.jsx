import Seletor from "./components/Seletor";
import "./App.scss";
function App() {

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
const consoleItem = (item) =>{
  console.log(item.message)
}
  return (
    <>
      <section>
        <div>
          <Seletor data={dummyData}
          displayItem={consoleItem}          
          />
        </div>
      </section>
    </>
  );
}

export default App;
