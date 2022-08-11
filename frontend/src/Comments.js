import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Comments = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isblank, setIsBlank] = useState(false);
  const [inputText, setInputText] = useState("");

  let { name } = useParams();

  const [user, setUser] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/comments/" + name)
      .then((res) => {
        if (res.status !== 200) {
          setError(true);
          setIsLoading(false);
        }
        setTopics(res.data);
        console.log(res.data);
        setIsLoading(false);
        if (res.data.length == 0) {
          setIsBlank(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setIsLoading(false);
      });
  }, [name]);

  const handleSubmit = () => {
    if (user) {
      let data = {
        comment: inputText,
        user: user,
        discussionName: name,
      };
      console.log(data);
      {
        axios
          .post("http://localhost:8080/comments/add", data, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            window.location.reload();
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data.message); // => the response payload
            }
          });
      }
    } else if (!user) {
      console.log("no user");
    }
  };

  return (
    <div className="topic-list">
      {error && <div>Could not retrieve data from the resource</div>}
      {isLoading && <div>Retrieving data...</div>}
      {isblank && <div>This discussion is empty</div>}
      <br/>
      {topics.map((topic) => (
        <div key={topic.id}>
          <div className="comment-view" key={topic.id}>
            <div className="comment-style" style={{ width: "33.33%" }}>
              <h2 style={{ color: "aqua" }}>
                Sent by:
                <br />
              </h2>
              <Link to={{ pathname: "/Profile/" + topic.userSent }}>
                <h2> {topic.userSent}</h2>
              </Link>

              <h2 style={{ color: "aqua" }}>
                Date:
                <br />
              </h2>
              <h2> {topic.date}</h2>
            </div>
            <div className="comment-style" style={{ width: "66.66%" }}>
              <h2>{topic.text}</h2>
            </div>
          </div>
        </div>
      ))}

      <input
        placeholder="Enter Your Comment:"
        style={{
          width: "99%",
          border: "2px solid #333",

          borderRadius: "10px",
          fontSize: "150%",
        }}
        value={inputText}
        type="text"
        required
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            border: "2px solid #333",
            borderRadius: "10px",
            fontSize: "100%",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
        >
          Submit comment
        </button>
      </div>
    </div>
  );
};

export default Comments;
