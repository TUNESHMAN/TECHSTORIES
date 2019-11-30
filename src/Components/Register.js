import React, { useState } from "react";
import * as Yup from "yup";

function Register() {
  // I am saving the changed input to state
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    remember: false
  });

  const newDetails = e => {
    if (e.target.type === "checkbox") {
      setDetails({
        ...details,
        [e.target.name]: e.target.checked
      });
    } else {
      {
        if (/[A-Za-z]/g.test(e.target.value)) {
          setDetails({
            ...details,
            [e.target.name]: e.target.value
          });
        }
      }
    }
  };

  const handleSubmit = e => {
    // For preventing the form submit from refreshing the page
    // Prevent other default form submit behavior
    e.preventDefault();
    //   For seeing all the event properties in the console
    e.persist();
    // I logged the value of each input in the form
    console.log(e.target);
    console.log(e.target.username.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };
  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="regform-username">USER NAME</label>
        <input
          type="text"
          name="username"
          id="regform-username"
          placeholder="Enter your username here"
          onChange={newDetails}
          value= {details.username}
        />
        <label htmlFor="regform-email">EMAIL</label>
        <input
          type="text"
          name="email"
          id="regform-email"
          placeholder="Enter Email"
          onChange={newDetails}
          value={details.email}
        />
        <label htmlFor="regform-pass">PASSWORD</label>
        <input
          type="password"
          name="password"
          id="regform-pass"
          placeholder="Enter Password"
          onChange={newDetails}
          value={details.password}
        />
        <label htmlFor="remember-pass">REMEMBER PASSWORD?</label>
        <input
          type="checkbox"
          value="true"
          name="remember"
          id="remember-pass"
          onChange={newDetails}
          value={details.remember}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
