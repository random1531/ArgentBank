import React from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../Actions/user.action";
import "../index.css";
export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const connexion = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 200) {
      localStorage.setItem("token", data.body.token);
      dispatch(fetchUser());

      window.location = "/user";
    }
  };

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button" onClick={connexion}>
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
