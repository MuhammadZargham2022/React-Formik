import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Multiselect } from 'multiselect-react-dropdown';
import './Basic.scss';

const SignupForm = () => {
  const [submittedValues, setSubmittedValues] = useState([]);

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', jobs: [] }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        jobs: Yup.array().min(1, 'At least one job must be selected').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmittedValues((prevValues) => [...prevValues, values]);
        console.log(values); // Log the current values
        setSubmitting(false);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <h1 className='heading'>Form</h1>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" component="div" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" component="div" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="jobs">Select Job</label>
          <Multiselect 
            displayValue="key"
            onRemove={(selectedList, removedItem) => {
              const values = selectedList.map(item => item.key);
              setFieldValue('jobs', values);
            }}
            onSelect={(selectedList) => {
              const values = selectedList.map(item => item.key);
              setFieldValue('jobs', values);
            }}
            options={[
              { key: 'Developer' },
              { key: 'Designer' },
              { key: 'Manager' },
              { key: 'Internee' },
            ]}
          />
          <ErrorMessage name="jobs" component="div" />
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
