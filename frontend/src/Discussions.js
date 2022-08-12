import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Discussions = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isblank, setIsBlank] = useState(false);
  const [inputText, setInputText] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);

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

  let { name } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8080/discussion/" + name)
      .then((res) => {
        console.log();
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

  const handleSubmit = () => {
    if (user) {
      let data = {
        sideTopicName: name,
        userSent: user,
        discussionName: inputText,
      };

      {
        axios
          .post("http://localhost:8080/discussion/request", data, {
            withCredentials: true,
          })
          .then((res) => {
            setRequestSubmitted(true);
            console.log(requestSubmitted);
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

  const handleDelete = (topic) => {
    if (user) {
      let data = {
        name: topic.name,
      };

      {
        axios
          .post("http://localhost:8080/discussion/delete", data, {
            withCredentials: true,
          })
          .then((res) => {
            navigate("/discussions/" + name);
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
      {isblank && <div>There is no data in this section</div>}
      <br />
      {topics.map((topic) => (
        <div key={topic.id}>
          <Link
            className="text-link"
            to={{ pathname: "/comments/" + topic.name }}
          >
            <div
              className="topic-view"
              style={{ marginTop: "3%" }}
              key={topic.id}
            >
              <h2>{topic.name}</h2>
              {role == "ROLE_MODERATOR" && (
                <button
                  style={{
                    border: "2px solid #333",
                    borderRadius: "10px",
                    fontSize: "150%",
                    cursor: "pointer",
                    marginLeft: "80%",
                    marginBottom: "1%",
                  }}
                  onClick={() => handleDelete(topic)}
                >
                  delete
                </button>
              )}
            </div>
            <h1
              style={{ fontSize: "100%", textAlign: "right", cursor: "auto" }}
            >
              User Created: {topic.userSent}
            </h1>
          </Link>
        </div>
      ))}
      <div className="comment-view" style={{ marginTop: "3%" }}>
        <div className="comment-style" style={{ width: "10%" }}>
          <h1 style={{ fontSize: "350%" }}>+</h1>
        </div>
        <div className="comment-style" style={{ width: "90%" }}>
          <input
            placeholder="Suggest a discussion:"
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
              Submit suggestion
            </button>
          </div>
        </div>
      </div>
      <br />
      {!user && <div>You have to be logged in to suggest a discussion</div>}
      {requestSubmitted && <div>Your request has successfully submitted</div>}
    </div>
  );
};

export default Discussions;
