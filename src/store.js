import {configureStore} from "@reduxjs/toolkit";
import appointmentSliceReducer from "./slices/appointmentSlice";




const store = configureStore({
    reducer : {
        
        appointment : appointmentSliceReducer,
      

    },
   
    devTools : true,

});

export default store;