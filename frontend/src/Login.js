import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const handleClick = () => {
    let data = {
      username: name,
      password: password,
    };
    {
      axios.post("http://localhost:8080/api/auth/signin", data).then((res) => {
        console.log(res);
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
      <button onClick={handleClick}>Log In</button>
      <p>{false && cookies}</p>
    </div>
  );
};

export default Login;
