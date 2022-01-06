import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [apptList, setApptList] = useState([])
  const [appt, setAppt] = useState({})
  function addAppt({target}){
    const {name, value} = target;
    setAppt((prev) => ({
      ...prev,
      id: Date.now(), 
      [name]: value
    }))
  }


  const [contactList, setContactList] = useState([{
    name: 'Makai Harris',
    phone: '8054551948',
    email: 'makaiharris@gmail.com'
  },])
  const [contacts, setContacts] = useState({})

  function handleChange({target}){
    const {name, value} = target;
    setContacts((prev) => ({
      ...prev,
      id: Date.now(), 
      [name]: value
    }))
  };


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} setContacts={setContacts} contactList={contactList} setContactList={setContactList} handleChange={handleChange}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage contactList={contactList} addAppt={addAppt} apptList={apptList} setApptList={setApptList} appt={appt} setAppt={setAppt}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
