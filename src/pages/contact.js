import React from 'react';
import Layout from '../components/layout';
import ContactForm from '../components/contactForm';
import {
  contactClass,
  formContainer,
  formClass,
  description,
  divider,
  triangle1,
  triangle2,
} from './contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <Layout>
      <div className={contactClass}>
        <div className={formContainer}>
          <div className={triangle1}></div>
          <div className={triangle2}></div>
          <div className={description}>
            <FontAwesomeIcon icon={faEnvelopeOpenText} size="10x" />
          </div>
          <div className={divider}></div>
          <div className={formClass}>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
