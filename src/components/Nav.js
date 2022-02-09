import { useState, useEffect } from "react";
import "../styles/Nav.css";
import { getTopics } from "../utils/api";

const Nav = ({ setTopicsValue }) => {
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicsData(topics);
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
