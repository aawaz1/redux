import React from 'react'
import { Route ,Routes } from 'react-router-dom';
import ViewAppointment from './components/viewAppointment';
import Appointments from './components/appointments';


const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Appointments/>} />
        <Route path='/view' element={<ViewAppointment/>}/>

      </Routes>
      
    </div>
  )
}

export default App

