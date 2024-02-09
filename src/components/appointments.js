import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment } from '../slices/appointmentSlice';
import { useNavigate } from 'react-router-dom';

function Appointment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   
  const [name, setName] = useState("");
  const [appointment, setAppointment] = useState("");
 
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    dispatch(addAppointment({ name, appointment })); // Dispatch the action
    navigate("/view"); // Navigate to the "/view" route
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='enter the name of the application' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type='text' placeholder='enter the name of the application' value={appointment} onChange={(e) => setAppointment(e.target.value)}/>
        <button type='submit'> Add an appointment</button>
      </form>
    </div>
  );
}

export default Appointment;

