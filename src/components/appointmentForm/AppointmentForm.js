import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" name="title" placeholder="" value={props.title} onChange={props.handleChange}/>
      <input type="date" min={getTodayString()} name="date" placeholder="" value={props.date} onChange={props.handleChange}/>
      <input type="time" name="time" placeholder="" value={props.time} onChange={props.handleChange}/>
      <ContactPicker contactList={props.contactList} name="contact" value={props.contact} onChange={props.handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
};
