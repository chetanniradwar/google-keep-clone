import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <p>copyright CHETAN NIRADWAR @ {year} </p>
      </footer>
    </>
  );
};

export default Footer;