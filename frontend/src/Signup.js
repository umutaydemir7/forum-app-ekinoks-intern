import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { withCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cookies, setCookie] = useCookies();
  const [loginStatus, setLoginStatus] = useState("");
  const [user, setUser] = useState();
 

  const handleClick = () => {
    let data = {
      username: name,
      password: password,
      email: email,
    };
    {
      axios
        .post("http://localhost:8080/api/auth/signup", data, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setLoginStatus(res.data.message);
        })
        .catch((error) => {
          if (error.response) {
            setLoginStatus(error.response.data.message);
            console.log(error.response.data.message); // => the response payload
          }
        });
    }
    
  };

  return (
    <div>
      <form>
        <label>
          Username: &nbsp;
          <input
            value={name}
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          E-Mail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            value={email}
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Password: &nbsp;&nbsp;
          <input
            value={password}
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
       
      </form>
      <br />
      <p>{loginStatus}</p>
      <br />

      <button onClick={handleClick}>Sign Up</button>
    </div>
  );
};

export default Signup;
