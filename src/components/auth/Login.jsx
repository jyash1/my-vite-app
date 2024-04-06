import * as Yup from "yup";

import {} from "react";
import { Button, Container, Form } from "react-bootstrap";
import image_url from "../commmon/images";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { emailRegex } from "../commmon/constant";
import { toast } from "react-toastify";
import { login } from "../../redux/store/slice/auth/auth.slice";

export const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    enableReinitialize: true,

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email is invalid")
        .matches(emailRegex, "Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(/^(?=.*)(?=.{8,})/, "Must contain 8 characters"),
    }),

    onSubmit: (data) => {
      dispatch(login(data))
        .unwrap()
        .then((responce) => {
          if (responce.success) {
            console.log("Login successfull", responce);
            toast.success("Login successful");
            navigation
          }
        });
    },
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log("handleSubmit", values);
    login(values, resetForm);
    setSubmitting(false);
  };

  return (
    <section
      className="auth_panel"
      style={{ backgroundImage: `url(${image_url.policeBg})` }}
    >
      <Container>
        <Form
          className="form_wrapper h-100 d-flex align-items-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="row flex-grow-1  z-1">
            <div className="col-md-9 col-lg-8 col-xl-5">
              <h1 className="mb-3 text_white">Sign in to manage</h1>
              <p className="subtitle1 text_white mb-5">
                Enter your details below
              </p>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text_white mb-3">
                  Email address
                </Form.Label>
                <Form.Control
                  name="email"
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <Form.Label className="text_white">Password</Form.Label>
                  <Link to="/forget-password" className="text_white">
                    Forget Password
                  </Link>
                </div>
                <div className="icon_input_wrapper">
                  <Form.Control
                    name="password"
                    value={formik.values?.password}
                    onChange={formik.handleChange}
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="comman_btn w-100"
                onSubmit={handleSubmit}
              >
                Login
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </section>
  );
};
