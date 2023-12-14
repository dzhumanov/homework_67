import { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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
  text,
  changeColor,
  disableButtons,
  slice,
  check,
} from "./doorSlice";

const Door = () => {
  let doorValue = useSelector((state: RootState) => state.door.value);
  let bgValue = useSelector((state: RootState) => state.door.styleValue);
  let buttonValue = useSelector((state: RootState) => state.door.buttonValue);
  let hiddenValue = useSelector((state: RootState) => {
    if (state.door.value.length > 0 && state.door.text !== "") {
      return state.door.text;
    } else {
      return state.door.value.replace(/./g, "*");
    }
  });
  let otherButtons = useSelector((state: RootState) => state.door.checked);

  const dispatch = useDispatch();
  const code = 1337;

  const checkCode = () => {
    const number = parseInt(doorValue);
    if (number === code) {
      dispatch(text("Access granted!"));
      dispatch(changeColor("bg-success text-white"));
    } else {
      dispatch(text("Access denied!"));
      dispatch(changeColor("bg-danger text-white"));
    }
    dispatch(check());
  };

  useEffect(() => {
    if (doorValue.length >= 4) {
      dispatch(disableButtons(true));
    } else {
      dispatch(disableButtons(false));
    }
  }, [doorValue]);

  return (
    <div className="container w-50 p-3 ">
      <div className="door mx-auto border">
        <h3 className={`text-center display ${bgValue}`}>{hiddenValue}</h3>
        <div className="row d-flex align-items-center text-center mb-3">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(seven())}
              disabled={buttonValue}
            >
              7
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(eight())}
              disabled={buttonValue}
            >
              8
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(nine())}
              disabled={buttonValue}
            >
              9
            </button>
          </div>
        </div>
        <div className="row d-flex align-items-center text-center mb-3">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(four())}
              disabled={buttonValue}
            >
              4
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(five())}
              disabled={buttonValue}
            >
              5
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(six())}
              disabled={buttonValue}
            >
              6
            </button>
          </div>
        </div>
        <div className="row d-flex align-items-center text-center mb-3">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(one())}
              disabled={buttonValue}
            >
              1
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(two())}
              disabled={buttonValue}
            >
              2
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(three())}
              disabled={buttonValue}
            >
              3
            </button>
          </div>
        </div>
        <div className="row d-flex align-items-center text-center mb-3">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(slice())}
              disabled={otherButtons}
            >
              &lt;
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={() => dispatch(zero())}
              disabled={buttonValue}
            >
              0
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-success btn-lg btn-block"
              onClick={checkCode}
              disabled={otherButtons}
            >
              E
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Door;
