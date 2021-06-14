import axios from "axios";
import React, { useState } from "react";
import { api } from "../../utils";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    message: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/register", state);
    } catch (err) {
      setState({
        ...state,
        error: true,
        message: err.response.data.error.message,
      });
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            placeholder="John Doe"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            placeholder="John-Doe@gmail.com"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            placeholder="******"
            onChange={handleChange}
          />
        </div>

        <button>Send</button>
      </form>
    </>
  );
};

export default Register;
