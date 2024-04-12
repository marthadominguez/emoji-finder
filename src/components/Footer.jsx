import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>Martha L. Domínguez</p>
      <p>|</p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/marthaldominguez/"
      >
        <span className="iconify" data-icon="akar-icons:linkedin-fill"></span>
      </a>
      <a
        target="_blank"
        rel="noreferrer"      
        href="https://github.com/marthadominguez"
      >
        <span className="iconify" data-icon="akar-icons:github-fill"></span>
      </a>
    </div>
  );
};

export default Footer;
