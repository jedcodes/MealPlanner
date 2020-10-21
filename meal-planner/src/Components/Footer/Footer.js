import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <h1>About us</h1>
        <h1>Contact us</h1>
        <h1>Sosial media</h1>
      </div>
      <div className="footer__subscribe">
        <h2>Subscribe For Newletter</h2>
        <form className="footer__subscribe-form">
          <input type="text" className="subscribe-input" />
          <button className="footer__subscribe-button">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
