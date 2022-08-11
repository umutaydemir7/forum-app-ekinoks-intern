import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isblank, setIsBlank] = useState(false);
  

  let { name } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/" + name)
      .then((res) => {
        console.log();
        if (res.status !== 200) {
          setError(true);
          setIsLoading(false);
        }
        setUser(res.data);
        setIsLoading(false);
        if (res.data.length == 0) {
          setIsBlank(true);
        }
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  }, [name]);

  return (
    <div className="topic-list">
      {error && <div>Could not retrieve data from the resource</div>}
      {isLoading && <div>Retrieving data...</div>}
      {isblank && <div>This username doesn't exist</div>}

      <h2>Profile of  {user.username}</h2>
      <br />
        <div >      
            <div className="topic-view" >
              <h2>Username:  {user.username}</h2>
            </div>
        </div>
        <div >      
            <div className="topic-view" >
              <h2>E-Mail: {user.email}</h2>
            </div>
        </div>
        
      
    </div>
  );
};

export default Profile;