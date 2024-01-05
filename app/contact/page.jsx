import Link from "next/link";
import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div>
          <h2 className="contact-title">Contact</h2>
          <h3 className="contact-name">Name: Muhammad Muaz</h3>
          <div className="contact-link-wrapper">
            <Link className="contact-link" href="tel:+998991202520">
              Phone Number: +998991202520
            </Link>
            <Link className="contact-link" href="mailto:nemuhammad4@gmail.com">
              Email: nemuhammad4@gmail.com
            </Link>
          </div>
          <p className="contact-telegram">Telegram: @ne_muaz</p>
        </div>
        <div className="contact-location-wrapper">
          <h2 className="contact-location-title">Location</h2>
          <p className="contact-location">
            Uzbekistan, Tashkent. <br /> Al-Xorazmiy st <br /> 10/1, 27
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
