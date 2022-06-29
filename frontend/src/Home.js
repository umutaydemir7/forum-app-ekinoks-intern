import { useEffect, useState } from "react";
import TopicList from "./TopicList";
import axios from "axios";

const Home = () => {
  const [topics, setTopics] = useState([
   
  ]);

  useEffect(() => {
    axios.get("http://localhost:8080/maintopic/allmaintopics").then((res) => {
      console.log(res.data);
      setTopics(res.data)
    });
  }
  ,[]);

  

  const handleDelete = (name) => {
    const newTopics = topics.filter((topic) => topic.name !== name);
    setTopics(newTopics);
  };

  const handleClick = (name) => {
    axios.get("http://localhost:8080/sidetopic/"+name).then((res) => {
      console.log(res.data);
      setTopics(res.data)
    });
  };


  return (
    <div className="Home">
      <div className="topic-list">
        {topics.map((topic) => (
          <div>
            <div
              onClick={() => handleClick(topic.name)}
              className="topic-view"
              key={topic.id}
            >
              <h2>{topic.name}</h2>
             
            </div>
            <div>
              <button onClick={() => handleDelete(topic.name)}>
                Delete me
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
