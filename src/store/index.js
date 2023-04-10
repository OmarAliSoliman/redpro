import {configureStore} from '@reduxjs/toolkit'
import CounterReduceer from './CounterReduceer';
import CounterStatus from './CounterStatus';

const store = configureStore({
  reducer:{
    counter: CounterReduceer,
    counterstatus: CounterStatus
  }
})

export default store;