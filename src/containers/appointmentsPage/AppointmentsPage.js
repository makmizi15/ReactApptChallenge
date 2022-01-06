import React, {useState, useEffect} from "react";
import {TileList} from '../../components/tileList/TileList.js'
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setApptList([props.appt, ...props.apptList]);
    props.setAppt({});
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contactList={props.contactList} handleChange={props.addAppt} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={props.apptList}/>
      </section>
    </div>
  );
};
