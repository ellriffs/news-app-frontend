import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import "../styles/Nav.css";

const Nav = ({ setTopicsValue, setSortValue, topicsValue }) => {
  const [topicValueData, setTopicValueData] = useState([]);

  useEffect(() => {
    getTopics()
      .then((topicValue) => {
        setTopicValueData(topicValue);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSort = (e) => {
    setSortValue(e.target.value);
  };

  const handleTopics = (e) => {
    setTopicsValue(e.target.value);
    console.log(topicsValue);
  };

  return (
    <nav className="nav-container">
      <Link className="categories_all-link" to={`/articles`}>
        <h3 className="categories_All" onChange={handleTopics}>
          All
        </h3>
      </Link>
      {topicValueData.map((topic) => {
        return (
          <Link
            key={topic.slug}
            className="categories-link"
            to={`/articles?topic=${topic.slug}`}
          >
            <h3 className="categories" onChange={handleTopics}>
              {topic.slug}
            </h3>
          </Link>
        );
      })}

      <h3 className="sort_by-title">Sort By</h3>
      <select onChange={handleSort} className="sort_by-container">
        <option value="votes">Votes</option>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
      </select>
    </nav>
  );
};

export default Nav;
