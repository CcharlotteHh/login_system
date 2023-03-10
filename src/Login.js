import { useRef, useState, useEffect, useContext } from "react";
import "./styles/login.scss";
// import AuthContext from "./context/AuthProvider";
// import axios from "./api/axios";
import { Link } from "react-router-dom";
var Bg = require('./bg.jpg');
 
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
        
        <section className="loginScreen">   
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <figure><img src={Bg} alt="bgImg"></img></figure>
          <div className="formContainer">
          <form className="loginForm" onSubmit={handleLogin}>
          <h1>Login System</h1>
          <div className="inputContainer">
            <label htmlFor="user">Username</label>
            <input
              className="loginInput"
              placeholder="user"
              id="usern"
              autoComplete="false"
              ref={userRef}
              type="text"
              tabIndex="1"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            </div>
            <div className="inputContainer">
            <label htmlFor="password">Password</label>
            <input
              className="loginInput"
              placeholder="password"
              id="pwd"
              type="password"
              tabIndex="2"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
            </div>

            <button
            tabIndex="3"
            >Log in</button>
            <div className="linkContainer">
             <p className="forgotPwd"><a href="#">Forgot Password?</a></p>
             
             <p>Dont have an account yet? <a href="#">Sign Up</a></p>
             </div>
            </form>

           
          </div>
        </section>
      )}
    </>
  );
}
