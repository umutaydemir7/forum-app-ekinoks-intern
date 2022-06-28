import {useState} from "react";
import TopicList from "./TopicList";




const Home = () => {
    const [topics, setTopics] = useState([
        { title: 'Sports', body: 'lorem ipsum...', commentCount:83, id: 1 },
        { title: 'Education', body: 'lorem ipsum...', commentCount:156, id: 2 },
        { title: 'Coding', body: 'lorem ipsum...', commentCount:74, id: 3 }

    ]);

const handleClick= () => { 

    setTopics( [{ title: 'Football', body: 'lorem ipsum...', commentCount:83, id: 1 },
    { title: 'Basketball', body: 'lorem ipsum...', commentCount:156, id: 2 },
    { title: 'Volleyball', body: 'lorem ipsum...', commentCount:74, id: 3 }]);

}
    return ( 
        <div className="Home">
           
            <div className="topic-list">
        {topics.map((topic) =>(
            <div onClick={() => handleClick()} className="topic-view" key={topic.id}>
                <h2>{topic.title}</h2>
                <h3>Comments: {topic.commentCount}</h3>
            </div>
        )      
        )}
        </div>
        </div>
     );
}
 
export default Home;