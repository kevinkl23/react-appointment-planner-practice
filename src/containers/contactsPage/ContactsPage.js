import React, { useState, useEffect, useRef } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ( {contacts, addContacts } ) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const isInitialRender = useRef(true);

  const handleNameChange = event => {
    setName(event.target.value);
  }

  const handlePhoneChange = event => {
    setPhone(event.target.value);
  }

  const handleEmailChange = event => {
    setEmail(event.target.value);
  }

  const clearForm = () => {
    setName('');
    setPhone('');
    setEmail('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const isDuplicate = contacts.filter(contact => {
      return (contact.name === name && contact.phone === phone && contact.email === email);
    })

    if(isDuplicate.length > 0) {
      alert('Contact is already added');
    }
    else {
      addContacts(name, phone, email);
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const findName = contacts.find(contact => {
      return contact.name === name;
    })

    if(findName) {
      clearForm();
    }
    else{
      alert('Fail to Add Contacts');
    }
  }, [contacts]);


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email} setName={handleNameChange} setPhone={handlePhoneChange} setEmail={handleEmailChange} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section> 
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
