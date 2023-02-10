import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import axios from "./api/axios";
import { Links ,Link } from "react-router-dom";
 
export default function Login() {
  
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    try {
    //    const response = await axios.post(LOGIN_URL, JSON.stringify({})) 
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {}
  }
  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
          <Link to="/">Home</Link>
        
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
            <label htmlFor="user">Username</label>
            <input
              className="loginInput"
              placeholder="user"
              id="usern"
              autoComplete="false"
              ref={userRef}
              type="text"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <label htmlFor="password">Password</label>
            <input
              className="loginInput"
              placeholder="pwd"
              id="pwd"
              type="password"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
            <button>Log in!</button>
          </form>
        </section>
      )}
    </>
  );
}
