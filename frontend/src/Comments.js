import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Comments = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isblank, setIsBlank] = useState(false);

  let { name } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8080/comments/" + name)
      .then((res) => {
        if (res.status !== 200) {
          setError(true);
          setIsLoading(false);
        }
        setTopics(res.data);
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
      {isblank && <div>There is no data in this section</div>}
      {topics.map((topic) => (
        <div key={topic.id}>
          <div className="comment-view" key={topic.id}>
            <div className="comment-style" style={{ width: "33.33%" }}>
              <h2>
                {" "}
                Sent by:
                <br /> {topic.userSent}
              </h2>
              <h2>
                {" "}
                Date:
                <br /> {topic.userSent}
              </h2>
            </div>
            <div className="comment-style" style={{ width: "66.66%" }}>
              <h2>{topic.text}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
