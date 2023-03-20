import React from "react";
import "../Component.css";

export default function Contact() {
  return (
    <div className="contact_main">
      <div className="contact_head my-2">Contact</div>
      <div className="contact_body">
          <div className="left">
            <h1>Address</h1>
            <div className="add" >
            Vasantdada Patil Education Complex, Eastern Express Highway, Near Everard Nagar, Sion - Chunabatti, Mumbai, Maharashtra 400022
            </div>
          </div>
          <div className="right">
            <div>
            <h1>Email</h1>
            <p>Vasantdada@pvvcoe.ac.in</p>
            </div>
          </div>
          <div className="social"></div>
      </div>
    </div>
  );
}
