import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointments}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const handleNameChange = event => {
    setName(event.target.value);
  } 
  
  const handleContactChange = event => {
    setContact(event.target.value);
  }

  const handleDateChange = event => {
    setDate(event.target.value);
  }

  const handleTimeChange = event => {
    setTime(event.target.value);
  }

  const clearForm = () => {
    setName('');
    setContact('');
    setDate('');
    setTime('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointments(name, contact, date, time);
    clearForm();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts} name={name} contact={contact} date={date} time={time} setName={handleNameChange} setContact={handleContactChange} setDate={handleDateChange} handleTimehange={handleTimeChange} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList lists={appointments} />
      </section>
    </div>
  );
};