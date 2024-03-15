import React from "react";

const ContactPicker = ({contacts, onChange, value, name}) => {
  return (
    <>
      <select onChange={onChange} value={value}>
        <option value="">No Contact Selected</option>
        {contacts.map(contact => {
          return <option key={contact.name} value={contact.name}>{contact.name}</option>
        })}
      </select>
    </>
  );
};

export default ContactPicker;