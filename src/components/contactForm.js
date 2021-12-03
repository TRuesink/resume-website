import React, { useState } from 'react';
import { useFormik } from 'formik';
import { contactFormClass, formFeedback } from './contactForm.module.scss';

const ContactForm = () => {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };
  const validate = (values) => {
    console.log(formik.isSubmitting);
    const errors = {};
    if (!values.First_Name) {
      errors.First_Name = 'Required';
    } else if (values.First_Name.length > 15) {
      errors.First_Name = 'Must be 15 characters or less';
    }

    if (!values.Last_Name) {
      errors.Last_Name = 'Required';
    } else if (values.Last_Name.length > 20) {
      errors.Last_Name = 'Must be 20 characters or less';
    }

    if (!values.Email) {
      errors.Email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = 'Invalid Email address';
    }

    if (!values.Request) {
      errors.Request = 'Required';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      First_Name: '',
      Last_Name: '',
      Email: '',
      Request: '',
    },
    validate,
    onSubmit: (values, actions) => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact-form', ...values }),
      })
        .then(() => {
          alert('Success');
          actions.resetForm();
        })
        .catch(() => {
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false));
    },
  });

  return (
    <form
      name="contact-form"
      method="post"
      data-netlify={true}
      onSubmit={formik.handleSubmit}
    >
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="First_Name" className="form-label">
            First Name
          </label>
          <input
            className={`form-control ${
              formik.errors.First_Name && formik.touched.First_Name
                ? 'is-invalid'
                : null
            }`}
            disabled={formik.isSubmitting}
            id="First_Name"
            name="First_Name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.First_Name}
          />
          {formik.errors.First_Name && formik.touched.First_Name ? (
            <div className={formFeedback}>{formik.errors.First_Name}</div>
          ) : null}
        </div>
        <div className="col">
          <label htmlFor="Last_Name" className="form-label">
            Last Name
          </label>
          <input
            className={`form-control ${
              formik.errors.Last_Name && formik.touched.Last_Name
                ? 'is-invalid'
                : null
            }`}
            disabled={formik.isSubmitting}
            id="Last_Name"
            name="Last_Name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Last_Name}
          />
          {formik.errors.Last_Name && formik.touched.Last_Name ? (
            <div className={formFeedback}>{formik.errors.Last_Name}</div>
          ) : null}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">
          Email Address
        </label>
        <input
          className={`form-control ${
            formik.errors.Email && formik.touched.Email ? 'is-invalid' : null
          }`}
          disabled={formik.isSubmitting}
          id="Email"
          name="Email"
          type="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Email}
        />

        {formik.errors.Email && formik.touched.Email ? (
          <div className={formFeedback}>{formik.errors.Email}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label htmlFor="Request" className="form-label">
          How can I help?
        </label>
        <textarea
          className={`form-control ${
            formik.errors.Request && formik.touched.Request
              ? 'is-invalid'
              : null
          }`}
          disabled={formik.isSubmitting}
          rows="5"
          id="Request"
          name="Request"
          type="Request"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Request}
        />

        {formik.errors.Request && formik.touched.Request ? (
          <div className={formFeedback}>{formik.errors.Request}</div>
        ) : null}
      </div>

      <div className="d-grid gap-2">
        <button
          style={{ border: '2px solid black' }}
          className="btn btn-secondary"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
