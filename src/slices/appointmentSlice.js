import { createSlice } from '@reduxjs/toolkit';

// Retrieve appointments from localStorage or initialize an empty array if not available
// Load initial state from local storage
const initialState = {
    appointments: localStorage.getItem('appointments') 
      ? JSON.parse(localStorage.getItem('appointments')) 
      : [],
  };

// const initialState = {
//   appointments: initialAppointments,
// };

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      const item = action.payload;
      const existItemIndex = state.appointments.findIndex((x) => x._id === item._id);
      localStorage.setItem('appointments', JSON.stringify(state.appointments));

      if (existItemIndex !== -1) {
        state.appointments[existItemIndex] = item;
      } else {
        state.appointments.push(item);
        localStorage.setItem('appointments', JSON.stringify(state.appointments));
      }
    },
    removeAppointment: (state, action) => {
      const idToRemove = action.payload;
      state.appointments = state.appointments.filter((x) => x._id !== idToRemove);
      localStorage.setItem('appointments', JSON.stringify(state.appointments));
     
    }
  }
});

export const { addAppointment, removeAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
