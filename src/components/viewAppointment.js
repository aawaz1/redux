import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeAppointment } from '../slices/appointmentSlice';

const ViewAppointment = () => {
    const appointments = useSelector(state => state.appointment.appointments);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(appointments);
    }, [appointments]);

    const handleRemoveAppointment = (id) => {
        dispatch(removeAppointment(id));
    
    

    }
    // const renderAppointmentItem = (appointment) => {
    //     return (
    //         <div key={appointment._id}>
    //             <p>Name: {appointment.name}</p>
    //             <p>Appointment Date: {appointment.appointmentDate}</p>
    //             {/* Render other appointment details here */}
    //         </div>
    //     );
    // };


    return (
        <div>
             {/* <div>
            <h1>View Appointment</h1>
            {appointments.map(appointment => renderAppointmentItem(appointment))}
            <button onClick={() => handleRemoveAppointment(id)}>Remove Appointment</button>

        </div> */}


            <h1>View Appointment</h1>
            {appointments.map(appointment => (
                <div key={appointment._id}>
                    <p>Name: {appointment.name}</p>
                    <p>Appointment : {appointment.appointment}</p>
                    <button onClick={() => handleRemoveAppointment(appointment._id)}>Remove Appointment</button>
                 
                </div>
            ))}
        </div>
    );
}

export default ViewAppointment;


