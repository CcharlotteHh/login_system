import { useRef, useState, useEffect, useContext } from "react";

export default function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    console.log(username, password);
    setUsername("");
    setPassword("");
    setSuccess(true);
  }
  return (
    <>
    {success ? (
        <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
                <a href="#">Go to Home</a>
            </p>
        </section>
    ) : (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form className="loginForm" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          className="loginInput"
          placeholder="username"
          id="username"
          autoComplete="false"
          ref={userRef}
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          className="loginInput"
          placeholder="password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Log in!</button>
      </form>
    </section>
     )}
     </>
  );
}
