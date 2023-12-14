import Calculator from "./components/Calculator/Calculator";
import Door from "./components/Door/Door";

function App() {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <Door />
        </div>
        <div className="col-6">
          <Calculator />
        </div>
      </div>
    </>
  );
}

export default App;
