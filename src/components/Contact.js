import React from "react";
import {useState } from 'react'
const Contact = () => {
    const [forData, setForData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        // Send the form data to the server or perform any desired action
        console.log(forData);
        // Reset the form fields
        setForData({
            name: '',
            email: '',
            message: '',
        });
    };
    const handleChange = (event) => {
        setForData({ ...forData, [event.target.name]: event.target.value });
    };
    return (
          <div>
            <h1>Contact Us</h1>
            <p>Thanks for contacting</p>
            <form className="form" onSubmit={handleSubmit}>
                <hr></hr>
              <label>Name: <input type="text" name="name" placeholder="Type your name here" value={forData.name} onChange={handleChange}/></label>
              <hr />
              <label>Email: <input type="email" name="email" placeholder="Type your email here" value={forData.email} onChange={handleChange}/></label>
              <hr />
              <label>Message: <textarea name="message" placeholder="Type your message here..." value={forData.message} onChange={handleChange}/></label>
              <hr />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      };
export default Contact;