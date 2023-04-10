import { createSlice } from "@reduxjs/toolkit";

const counterStatus = createSlice({
  name: 'counterstatue',
  initialState: {status: true},
  reducers: {
    changeState : (state)=>{
      state.status = !state.status
    }
  }
})

export const {changeState} = counterStatus.actions;
export default counterStatus.reducer;