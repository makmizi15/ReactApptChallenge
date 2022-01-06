import React from "react";

export const ContactPicker = ({onChange, contactList, value, name}) => {
  return (
    <select name={name} onChange={onChange}>
      <option value={""} key={-1} defaultValue="selected">
        No Contact Selected
      </option>
      {contactList.map((contact, index) => (
        <option key={index} value={value}>{contact.name}</option>
      ))}
    </select>
  );
};
