import React from "react";
import "./index.css";
import { signIn } from "../../api";
import { setCookie } from "../../helpers/cookies";
import { Formik, Field, Form } from "formik";
import BasicSchema from "./BasicSchema";

export class ModalWindowLogIn extends React.Component {
  handleSubmit = async (values) => {
    try {
      const { token } = await signIn(values.username, values.password);
      setCookie("token", token);
      this.props.history.push(`/profile/${values.username}`);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="modalWindowLogInWrapper">
        <div className="modalWindowLogIn">
          <div className="modalWindowLogInContentWrapper">
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={BasicSchema}
              onSubmit={this.handleSubmit}
              validateOnBlur={false}
              validateOnChange={false}
            >
              {({ errors, touched, values, handleSubmit, handleChange }) => {
                console.log(errors);
                return (
                  <Form className="modalWindowForm" onSubmit={handleSubmit}>
                    <span className="modalWindowLogInText">Please, log in</span>
                    <input
                      className="modalWindowLogInInput"
                      placeholder="Username"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                    />
                    <input
                      className="modalWindowLogInInput"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                    {errors.username && <div className='modalWindowError'>{errors.username}</div>}
                    {errors.password && <div className='modalWindowError'>{errors.password}</div>}
                    <a className="modalWindowLogInSignUp">
                      Not registrated yet? Sign up now!
                    </a>
                    <div className="modalWindowLogInButtonsWrapper">
                      <div
                        className="modalWindowLogInCloseButton"
                        onClick={this.props.closeLogInModal}
                      >
                        Close
                      </div>
                      <button className="modalWindowLogInButton" type="submit">
                        Log in
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}
