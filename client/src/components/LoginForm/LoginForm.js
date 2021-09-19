import React, { useState } from "react";
import { connect } from "react-redux";
import { loginStart } from "../../redux/user/userActions";

const LoginForm = ({loginStart}) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    loginStart(usernameOrEmail, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login__form">
      <input
        type="text"
        maxLength="30"
        name="username"
        placeholder="username or email"
        className="login__input"
        onChange={(e) => setUsernameOrEmail(e.target.value)}
      />
      <input
        type="password"
        maxLength="30"
        name="password"
        placeholder="password"
        className="login__input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" className="login__button" />

      <p className="login__signin__help">Need help signing in?</p>
    </form>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  loginStart: (usernameOrEmail, password, token) =>
    dispatch(loginStart(usernameOrEmail, password, token)),
});

export default connect(null, mapDispatchtoProps)(LoginForm);
