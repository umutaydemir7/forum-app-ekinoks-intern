import { useEffect, useState } from "react";
import { withCookies, Cookies } from 'react-cookie';
import { useCookies } from "react-cookie";

const Navbar = () => {

  const [cookies, setCookie] = useCookies();

  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [role, setRole] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("role");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  

  const handleClick = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    
  };
    
  var profileText =  "/Profile/" + {user}  ;

 
  return (
    
    <nav className="navbar">
      <h1 >The Forum of&nbsp;</h1>
      <h1>{user}</h1>
      <div className="links">
        <a href="/"> Home </a>
        { !user && <a href="/login"> Log In </a>}
        { !user && <a href="/signup"> Sign Up </a>}
        { user && <a href={"/Profile/" +  user}> Profile</a>}
        { role == "ROLE_MODERATOR" && <a href="/requests"> Topic Requests </a>}
        { user && <a href="/" user={user} onClick={handleClick} > Log Out </a>}
        
      </div>

    </nav>
  );
};

export default Navbar;
