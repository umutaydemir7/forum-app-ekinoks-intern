import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { withCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies();
  const [loginStatus, setLoginStatus] = useState("");
  const [user, setUser] = useState();

  const handleClick = () => {
    let data = {
      username: name,
      password: password,
    };
    {
      axios
        .post("http://localhost:8080/api/auth/signin", data, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("user", JSON.stringify(res.data.username));
          navigate("/");
          window.location.reload();
        })
        .catch((error) => {
          if (error.response) {
            setLoginStatus(error.response.data.message);
            console.log(error.response.data.message); // => the response payload
          }
        });
    }
    //console.log({name}, {password});
    //console.log(cookies);
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
          Password: &nbsp;
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

      <button onClick={handleClick}>Log In</button>
    </div>
  );
};

export default Login;
