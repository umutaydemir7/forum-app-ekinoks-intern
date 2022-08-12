import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ApproveRequests = () => {
  const [discussions, setDiscussions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isblank, setIsBlank] = useState(false);
  const [sideTopics, setSideTopics] = useState([]);
  const [mainTopics, setMainTopics] = useState([]);

  let { name } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8080/discussion/pending")
      .then((res) => {
        if (res.status !== 200) {
          setError(true);
          setIsLoading(false);
        }
        setDiscussions(res.data);
        setIsLoading(false);
        if (res.data.length === 0) {
          setIsBlank(true);
        }
        else if (res.data.length != 0) {
          setIsBlank(false);
        }
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });

      axios
      .get("http://localhost:8080/sidetopic/pending")
      .then((res) => {
        if (res.status !== 200) {
          setError(true);
          setIsLoading(false);
        }
        setSideTopics(res.data);
        setIsLoading(false);
        if (res.data.length === 0) {
          setIsBlank(true);
        }
        else if (res.data.length != 0) {
          setIsBlank(false);
        }
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });

      axios
      .get("http://localhost:8080/maintopic/pending")
      .then((res) => {
        if (res.status !== 200) {
          setError(true);
          setIsLoading(false);
        }
        setMainTopics(res.data);
        setIsLoading(false);
        if (res.data.length === 0) {
          setIsBlank(true);
        }
        else if (res.data.length != 0) {
          setIsBlank(false);
        }
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });



  }, [name]);

  const handleDiscussionApprove = (discussion) => {
    let data2 = {
        name: discussion.name,
        status:"approved",
      };
    axios
    .post("http://localhost:8080/discussion/approve", data2, {
      withCredentials: true,
    })
    .then((res) => {
      window.location.reload();   
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data.message); // => the response payload
      }
    });
  };

  const handleDiscussionReject = (discussion) => {
    let data3 = {
        name: discussion.name,
        status:"rejected"
      };
    axios
    .post("http://localhost:8080/discussion/approve", data3, {
      withCredentials: true,
    })
    .then((res) => {
        window.location.reload();   
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data.message); // => the response payload
      }
    });
    
  };

  const handleSideTopicApprove = (topic) => {
    let data3 = {
        name: topic.name,
        status:"approved",
      };
    axios
    .post("http://localhost:8080/sidetopic/approve", data3, {
      withCredentials: true,
    })
    .then((res) => {
      window.location.reload();   
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data.message); // => the response payload
      }
    });
  };


  const handleSideTopicReject = (topic) => {
    let data4 = {
        name: topic.name,
        status:"approved",
      };
    axios
    .post("http://localhost:8080/sidetopic/approve", data4, {
      withCredentials: true,
    })
    .then((res) => {
      window.location.reload();   
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data.message); // => the response payload
      }
    });
  };


  const handleMainTopicApprove = (mainTopic) => {
    let data5 = {
        name: mainTopic.name,
        status:"approved",
      };
    axios
    .post("http://localhost:8080/maintopic/approve", data5, {
      withCredentials: true,
    })
    .then((res) => {
      window.location.reload();   
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data.message); // => the response payload
      }
    });
  };


  const handleMainTopicReject = (mainTopic) => {
    let data6 = {
        name: mainTopic.name,
        status:"approved",
      };
    axios
    .post("http://localhost:8080/maintopic/approve", data6, {
      withCredentials: true,
    })
    .then((res) => {
      window.location.reload();   
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data.message); // => the response payload
      }
    });
  };




  return (
    <div className="topic-list">
      {error && <div>Could not retrieve data from the resource</div>}
      {isLoading && <div>Retrieving data...</div>}
      
      <div style={{marginBottom:"1%"}}>Discussion Requests:</div>
      {discussions.map((discussion) => (
        <div key={discussion.id}>
          <div className="comment-view">
            <div className="comment-style" style={{ width: "50%" }}>
              <h1 style={{ fontSize: "100%", color: "aqua" }}>
                Discussion Name:
              </h1>
              <h1 style={{ fontSize: "100%" }}>{discussion.name}</h1>
              <h1 style={{ fontSize: "100%", color: "aqua" }}>
                Side Topic Name:
              </h1>
              <h1 style={{ fontSize: "100%" }}>{discussion.sideTopicName}</h1>
              <h1 style={{ fontSize: "100%", color: "aqua" }}>
                User Sent:
              </h1>
              <h1 style={{ fontSize: "100%" }}>{discussion.userSent}</h1>
            </div>
            <div className="comment-style" style={{ width: "50%" }}>
              <button
                style={{
                  border: "2px solid #333",
                  borderRadius: "10px",
                  fontSize: "150%",
                  cursor: "pointer",
                  marginTop: "3%",
                }}
                onClick={ () => handleDiscussionApprove(discussion)}
              >
                Approve
              </button>

              <button
                style={{
                  border: "2px solid #333",
                  borderRadius: "10px",
                  fontSize: "150%",
                  cursor: "pointer",
                  marginLeft: "5%",
                }}
                onClick={ () => handleDiscussionReject(discussion)}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      ))}
<div style={{marginBottom:"1%"}}>Side Topic Requests:</div>
{sideTopics.map((topic) => (
        <div key={topic.id}>
          <div className="comment-view">
            <div className="comment-style" style={{ width: "50%" }}>
              <h1 style={{ fontSize: "100%", color: "aqua" }}>
                Side Topic Name:
              </h1>
              <h1 style={{ fontSize: "100%" }}>{topic.name}</h1>
              <h1 style={{ fontSize: "100%", color: "aqua" }}>
                Main Topic Name:
              </h1>
              <h1 style={{ fontSize: "100%" }}>{topic.mainTopicName}</h1>
              <h1 style={{ fontSize: "100%", color: "aqua" }}>
                User Sent:
              </h1>
              <h1 style={{ fontSize: "100%" }}>{topic.userSent}</h1>
            </div>
            <div className="comment-style" style={{ width: "50%" }}>
              <button
                style={{
                  border: "2px solid #333",
                  borderRadius: "10px",
                  fontSize: "150%",
                  cursor: "pointer",
                  marginTop: "3%",
                }}
                onClick={ () => handleSideTopicApprove(topic)}
              >
                Approve
              </button>

              <button
                style={{
                  border: "2px solid #333",
                  borderRadius: "10px",
                  fontSize: "150%",
                  cursor: "pointer",
                  marginLeft: "5%",
                }}
                onClick={ () => handleSideTopicReject(topic)}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      ))}

<div style={{marginBottom:"1%"}}>Main Topic Requests:</div>
{mainTopics.map((mainTopic) => (
        <div key={mainTopic.id}>
          <div className="comment-view">
            <div className="comment-style" style={{ width: "50%" }}>
              <h1 style={{ fontSize: "100%", color: "aqua" }}>
                Main Topic Name:
              </h1>
              <h1 style={{ fontSize: "100%" }}>{mainTopic.name}</h1>
              
              <h1 style={{ fontSize: "100%", color: "aqua" }}>
                User Sent:
              </h1>
              <h1 style={{ fontSize: "100%" }}>{mainTopic.userSent}</h1>
            </div>
            <div className="comment-style" style={{ width: "50%" }}>
              <button
                style={{
                  border: "2px solid #333",
                  borderRadius: "10px",
                  fontSize: "150%",
                  cursor: "pointer",
                  marginTop: "3%",
                }}
                onClick={ () => handleMainTopicApprove(mainTopic)}
              >
                Approve
              </button>

              <button
                style={{
                  border: "2px solid #333",
                  borderRadius: "10px",
                  fontSize: "150%",
                  cursor: "pointer",
                  marginLeft: "5%",
                }}
                onClick={ () => handleMainTopicReject(mainTopic)}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      ))}





    </div>
  );
};

export default ApproveRequests;
