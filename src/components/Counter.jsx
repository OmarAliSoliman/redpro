import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increament, decreament } from '../store/CounterReduceer';
import { changeState } from '../store/CounterStatus';
function Counter() {
  const state = useSelector((state) => {
    return state;
  })
  const dispatch = useDispatch();


  const increaseEl = () => {
    dispatch(increament())
  }

  const decreaseEl = () => {
    dispatch(decreament())
  }

  const shohide = () => {
    dispatch(changeState())
  }

  return (
    <div className="main_content">
      {state.counterstatus.status ? (
        <div className="content_wrapper">
          <div className="counter-number">counter : <span>{state.counter.value}</span></div>
          <div className="counter_option">
            <button onClick={increaseEl}>Increase</button>
            <button onClick={decreaseEl}>Decrease</button>
          </div>
        </div>
      ) : (null)}


      <div className="visioble">
        <button onClick={shohide}>
          {state.counterstatus.status ? ("logout") : ("login")}
        </button>
      </div>
    </div>
  )
}

export default Counter