import {} from "react";
import { Button, Container, Form } from "react-bootstrap";
import image_url from "../commmon/images";

export default function ForgotPassword() {
  return (
    <section
      className="auth_panel"
      style={{ backgroundImage: `url(${image_url.policeBg})` }}
    >
      <Container>
        <Form className="form_wrapper h-100 d-flex align-items-center">
          <div className="row flex-grow-1  z-1">
            <div className="col-md-9 col-lg-8 col-xl-5">
              <h1 className="mb-3 text_white">Sign in to manage</h1>
              <p className="subtitle1 text_white mb-5">
                Enter your details below
              </p>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text_white mb-3">
                password
                </Form.Label>
                <Form.Control
                  name="email"
                  // value={formik.values?.email}
                  // onChange={formik.handleChange}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <Form.Label className="text_white">Password</Form.Label>
                  <div className="text_white"> Forget Password</div>
                </div>
                <div className="icon_input_wrapper">
                  <Form.Control
                    name="password"
                    // value={formik.values?.password}
                    // onChange={formik.handleChange}
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="comman_btn w-100"
                // onSubmit={handleSubmit}
              >
                Login
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </section>
  );
}
