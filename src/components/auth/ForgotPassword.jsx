import {} from "react";
import { Button, Container, Form } from "react-bootstrap";
import image_url from "../commmon/images";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { forgotPassword } from "../../redux/store/slice/auth/auth.slice";

export default function ForgotPassword() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,

    onSubmit: (data) => {
      data["user_role"] = 1;
      dispatch(forgotPassword(data))
        .unwrap()
        .then((responce) => {
          sessionStorage.getItem("email", data.email);
          if (responce?.success) {
            console.log("OTP sent", responce);
          }
        });
    },
  });

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
                  value={formik.data?.email}
                  onChange={formik.handleChange}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="comman_btn w-100"
                // onSubmit={handleSubmit}
              >
                Reset Password
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </section>
  );
}
