import React from "react";
import ContactPicker from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label for='name'>Name</label>
      <input id='name' type="text" onChange={setName} required></input>
      <label for='date'>Date</label>
      <input id='date' type="date" onChange={setDate} min={getTodayString()} required></input>
      <label for='time'>Time</label>
      <input id='time' type="time" onChange={setTime} required></input>
      <label for='contact'>Contact</label>
      <ContactPicker contacts={contacts} value={contact} onChange={setContact} name={name}/>

      <button type="submit">Submit</button>
    </form>
    </>
  );
};
