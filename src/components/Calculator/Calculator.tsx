import { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
  slice,
  plus,
  minus,
  multiplication,
  division,
  onResult,
} from "./calculatorSlice";

const Calculator = () => {
  let value = useSelector((state: RootState) => state.calculator.value);
  let result = useSelector((state: RootState) => state.calculator.result);

  const dispatch = useDispatch();

  return (
    <div className="container w-50 p-3">
      <div className="calculator mx-auto border">
        <h4 className="text-center display">
          your task: {value} <br />
          your result: {result}
        </h4>
        <div className="row d-flex align-items-center mb-3 text-center">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(plus())}
            >
              +
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(minus())}
            >
              -
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(multiplication())}
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
              onClick={() => dispatch(division())}
            >
              /
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(slice())}
            >
              &lt;
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(onResult())}
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
              onClick={() => dispatch(seven())}
            >
              7
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(eight())}
            >
              8
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(nine())}
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
              onClick={() => dispatch(four())}
            >
              4
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(five())}
            >
              5
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(six())}
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
              onClick={() => dispatch(one())}
            >
              1
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(two())}
            >
              2
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(three())}
            >
              3
            </button>
          </div>
        </div>
        <div className="row d-flex align-items-center mb-3 text-center">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(zero())}
            >
              0
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
