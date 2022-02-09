import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Nav.css";

const Nav = ({ setTopicsValue }) => {
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    axios.get("https://ellriffs-api.herokuapp.com/api/topics").then((res) => {
      setTopicsData(res.data.topics);
    });
  }, []);

  const handleTopics = (e) => {
    setTopicsValue(e.target.value);
  };

  return (
    <nav className="nav-container">
      <h3>Filter By Topic</h3>
      <select onChange={handleTopics} className="Nav-select">
        {topicsData.map((topics, index) => {
          return (
            <>
              <option key={topics.description}>{topics.slug}</option>
            </>
          );
        })}
      </select>
    </nav>
  );
};

export default Nav;
