import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMailBulk,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import {
  footerClass,
  footerSection,
  footerCenterSection,
} from './footer.module.scss';

const Footer = () => {
  return (
    <div className={footerClass}>
      <div className={footerSection}>
        <div>
          <StaticImage src="../images/ruesink_logo_black.svg" height={100} />
        </div>
      </div>
      <div className={footerSection}>
        <h6>SITE</h6>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/terms">Terms and Conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
      <div className={footerSection}>
        <h6>CONTACT</h6>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          timothy.ruesink@gmail.com
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className="me-2" />
          (608) 327-9816
        </div>
        <Link to="https://www.linkedin.com/in/tim-ruesink/">
          <FontAwesomeIcon icon={faLinkedin} className="me-2" />
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Footer;
