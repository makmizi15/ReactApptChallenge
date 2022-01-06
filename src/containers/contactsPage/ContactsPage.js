import React, {useState, useEffect} from "react";
// import PropTypes from 'prop-types';

import {ContactForm} from '../../components/contactForm/ContactForm.js'
import {TileList} from '../../components/tileList/TileList.js'

export function ContactsPage(props){
  /*
  Define state variables for 
  contact info and duplicate check
  */


  const [dupe, setDupe] = useState(false)
  
  useEffect(() => {

    let found = false;
    // Check for duplicate name
    props.contactList.find((contactList) => contactList.name === props.contacts.name) === undefined ? found=false : found=true; 

    if(found === true){
      setDupe(true);
    } else {
      setDupe(false);
    }

  }, [props.contacts.name, props.contactList.name])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!dupe){
      props.setContactList((prev) => [props.contacts, ...prev]);
      props.setContacts({})
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {dupe && <p style={{color: 'red'}}>This contact already exists.</p>} 
        <ContactForm 
          contacts={props.contacts}
          handleSubmit={handleSubmit}
          handleChange={props.handleChange}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={props.contactList}/>
      </section>
    </div>
  );
};

// ContactsPage.propTypes = {
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.number.isRequired,
//   email: PropTypes.string.isRequired,
//   dupe: PropTypes.bool.isRequired,
// };
