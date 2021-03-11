import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact_section">
      <h1 className="contact_title">CONTACT</h1>
      <div className="contact_text">
        <p>Mollit aute aliqua est duis labore veniam nostrud.</p>
        <ul>
          <li>LINKED IN: mylinkredin.com</li>
          <li>EMAIL: myemail@gmail.com </li>
          <li>FACEBOOK: www.facebook.com/myfacebooks</li>
          <li>DISCORD: #myDiscord</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
