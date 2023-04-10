import {createSlice} from '@reduxjs/toolkit'

const CounterSlice = createSlice({
  name: 'counter',
  initialState: {value: 1},
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    }
  }
})

export const {increament, decreament} = CounterSlice.actions;
export default CounterSlice.reducer;