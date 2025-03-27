import React from "react";
import styles from './styles.module.css';
import { useFormik } from "formik";
import * as Yup from "yup";
import {Link} from 'react-router-dom';

const RegisterPage = () => {
  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

//   const validate = (values) => {
//     let errors = {};
//     if (!values.firstName) {
//       errors.firstName = "First name is required";
//     }

//     if (!values.email) {
//       errors.email = "Email is required";
//     } else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = "Invalid email format";
//     }

//     if (!values.mobile) {
//       errors.mobile = "Mobile is required";
//     }

//     if (!values.password) {
//       errors.password = "Password is required";
//     }

//     return errors;
//   };



  const validationSchema = Yup.object({
    firstName: Yup.string().required("first name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("email is required"),
    mobile: Yup.string().required("mobile is required"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters"),
  });
 
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
        <div className={styles.wrapper}>
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
              {/* First Name */}
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.firstName && formik.errors.firstName ? "is-invalid" : ""
                  }`}
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // Triggers validation when leaving the field
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <small className="text-danger">{formik.errors.firstName}</small>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email ? "is-invalid" : ""
                  }`}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <small className="text-danger">{formik.errors.email}</small>
                )}
              </div>

              {/* Mobile */}
              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.mobile && formik.errors.mobile ? "is-invalid" : ""
                  }`}
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <small className="text-danger">{formik.errors.mobile}</small>
                )}
              </div>

              {/* Password */}
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className={`form-control ${
                    formik.touched.password && formik.errors.password ? "is-invalid" : ""
                  }`}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <small className="text-danger">{formik.errors.password}</small>
                )}
              </div>

              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              Already Registered? <Link to="/login">Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      </div>
  );
};

export default RegisterPage;