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
                <Form.Label className="text_white mb-3">Email address</Form.Label>
                <Form.Control
                  name="email"
                  // value={formik.values?.email}
                  // onChange={formik.handleChange}
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
