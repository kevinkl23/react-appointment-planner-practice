import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for='name'>Full Name</label>
        <input id="name" type="text" onChange={setName}></input>
        <label for='phone'>Phone Number</label>
        <input id="phone" type="text" onChange={setPhone} pattern="(\+?62|0)[2-9][0-9]{1,2}[0-9]{4,5}[0-9]+"></input>
        <label for='email'>Email</label>
        <input id="email" type="text" onChange={setEmail}></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

