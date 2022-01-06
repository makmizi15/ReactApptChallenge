import React from "react";

export function ContactForm(props){
  return (
    <form onSubmit={props.handleSubmit}>
      <input type='text' placeholder="Full Name" name='name' value={props.contacts.name || ""} onChange={props.handleChange}/>
      <input type='tel' placeholder="888-888-8888" pattern="^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$" name='phone' value={props.contacts.phone || ""} onChange={props.handleChange}/>
      <input type='email' placeholder="Email Address" name='email' value={props.contacts.email || ""} onChange={props.handleChange}/>
      <button type="submit">Submit</button>

    </form>
  );
};