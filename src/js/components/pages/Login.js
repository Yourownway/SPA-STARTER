import React, { useState } from "react";
import { useHistory } from "react-router";
import { api } from "../../utils";
import AuthLayout from "../templates/AuthLayout";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: false,
    message: null,
  });
  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", state);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      history.push("/");
    } catch (err) {
      console.log(err.response.data.error.message);
      setState({
        ...state,
        error: true,
        message: err.response.data.error.message,
      });
      console.log(state);
    }
  };

  return (
    <AuthLayout>
      {state.message && <h1>{state.message}</h1>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>
        <button>Submit</button>
      </form>
    </AuthLayout>
  );
};

export default Login;
