import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/maintopic/allmaintopics")
      .then((res) => {
        if (res.status !== 200) {
          setError(true);
          setIsLoading(false);
        }
        setTopics(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  }, []);
  
  return (
    
      <div className="topic-list">
        {error && <div>Could not retrieve data from the resource</div>}
        {isLoading && <div>Retrieving data...</div>}
        {topics.map((topic) => (

          <div key={topic.id}>
          <Link className='text-link' to={{ pathname: "/sidetopic/" + topic.name }}>
            
              <div
                className="topic-view"
                key={topic.id}
              >
                <h2>{topic.name}</h2>
              </div>
            
          </Link>
          </div>
        ))}
      </div>
    
  );
};

export default Home;
