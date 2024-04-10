import {} from "react";
import { Button, Container, Form } from "react-bootstrap";
import image_url from "../commmon/images";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { changePassword } from "../../redux/store/slice/auth/auth.slice";

export default function ResetPassword() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      new_password: "",
      password_confirmation: "",
    },
    enableReinitialize: true,

    onSubmit: (data) => {
      data["user_role"] = 1;
      dispatch(changePassword(data))
        .unwrap()
        .then((responce) => {
          sessionStorage.getItem("email", data.email);
          if (responce?.success) {
            console.log("Password recovered", responce);
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

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <Form.Label className="text_white">New Password</Form.Label>
                </div>
                <div className="icon_input_wrapper">
                  <Form.Control
                    name="password"
                    value={formik.data?.new_password}
                    onChange={formik.handleChange}
                    type="password"
                    placeholder="Enter new assword"
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <Form.Label className="text_white">Confirm Password</Form.Label>
                </div>
                <div className="icon_input_wrapper">
                  <Form.Control
                    name="password"
                    value={formik.data?.password_confirmation}
                    onChange={formik.handleChange}
                    type="password"
                    placeholder="Confirm password"
                  />
                </div>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="comman_btn w-100"
              >
                Change Password
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </section>
  );
}
