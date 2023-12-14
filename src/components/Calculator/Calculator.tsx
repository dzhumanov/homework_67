const Calculator = () => {
  return (
    <div className="container w-50 p-3">
      <div className="calculator mx-auto border">
        <h3 className="text-center display">value</h3>
        <div className="row d-flex align-items-center mb-3 text-center">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              +
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              -
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              *
            </button>
          </div>
        </div>
        <div className="row d-flex align-items-center mb-3 text-center">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              /
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              &lt;
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              =
            </button>
          </div>
        </div>
        <div className="row d-flex align-items-center mb-3 text-center">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              7
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              8
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              9
            </button>
          </div>
        </div>
        <div className="row d-flex align-items-center mb-3 text-center">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              4
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              5
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              6
            </button>
          </div>
        </div>
        <div className="row d-flex align-items-center mb-3 text-center">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              1
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              2
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
            >
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
