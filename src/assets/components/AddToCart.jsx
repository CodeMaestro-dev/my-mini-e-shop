import { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

AddToCart.propTypes = {
  item: PropTypes.string.isRequired,
};

export default function AddToCart({ item }) {
  const [count, setCount] = useState(0);

  return (
    <div className="m-5">
      <h3 className="ms-3 mt-3 mb-0">{item}</h3>
      <span className={setStyle()}>{setZero()}</span>
      <button className="btn bg-secondary" onClick={() => Increment()}>
        Increment
      </button>
      <p className="text-danger ms-3">{setError()}</p>
    </div>
  );

  function Increment() {
    if (count === 20) {
      return;
    } else {
      setCount(count + 1);
    }
  }

  function setZero() {
    let number;
    if (count === 0) {
      number = "Zero";
    } else {
      number = count;
    }
    return number;
  }

  function setStyle() {
    let style = "m-3 badge bg-";
    if (count === 0) {
      style += "warning";
    } else if (count === 20) {
      style += "danger";
    } else {
      style += "primary";
    }
    return style;
  }

  function setError() {
    if (count === 20) {
      return "You can't add more items";
    }
  }
}
