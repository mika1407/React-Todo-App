import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.contact.imgUrl} alt="cat" />
      <h3>{props.contact.name}</h3>
      <p style={{ display: props.contact.phone ? "block" : "none" }}>
        Phone: {props.contact.phone}
      </p>
      <p style={{ color: !props.contact.phone && "orange" }}>
        Email: {props.contact.email}
      </p>
      <hr />
    </div>
  );
}

export default ContactCard;
