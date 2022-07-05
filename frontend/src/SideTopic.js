
import { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom";
import axios from "axios";

const  SideTopic= () => {

    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    let {name} = useParams();
  
    useEffect(() => {
      axios
        .get("http://localhost:8080/sidetopic/"+name)
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
    }, [name]);

    
    
    return (  
    <div className="topic-list">
      {error && <div>Could not retrieve data from the resource</div>}
      {isLoading && <div>Retrieving data...</div>}
      {topics.map((topic) => (

        <div key={topic.id}>
        <Link className='text-link' to={{ pathname: "/discussions/" + topic.name }}>
          
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
}
 
export default SideTopic;