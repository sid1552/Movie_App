import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footertext">
        &copy; Siddharth Singh {currentYear} - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
