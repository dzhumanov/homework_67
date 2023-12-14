import Calculator from "./components/Calculator/Calculator";
import Door from "./components/Door/Door";

function App() {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h2 className="text-center">Door code</h2>
          <Door />
        </div>
        <div className="col-6">
          <h2 className="text-center">Calculator</h2>
          <Calculator />
        </div>
      </div>
    </>
  );
}

export default App;
