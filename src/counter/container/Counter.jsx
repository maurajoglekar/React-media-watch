import React from "react";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "../../redux/counter/counterActions";

function Counter({ value, incrementAction, decrementAction }) {
  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrementAction}>-</button>
        <span>{value}</span>
        <button onClick={incrementAction}>+</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { counter } = state;
  return {
    value: counter.value
  }
};

// the redux's connect passes in the dispatch function
// in the props
const mapDispatchToProps = () => ({
  incrementAction: (payload) => incrementCounter(payload),
  decrementAction: (payload) => decrementCounter(payload)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
