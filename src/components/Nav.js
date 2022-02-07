import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../styles/Nav.css';

const Nav = () => {
  const [topicsData, setTopicsData] = useState([]);
  const [topicsValue, setTopicsValue] = useState('');

  useEffect(() => {
    axios.get('https://ellriffs-api.herokuapp.com/api/topics').then((res) => {
      setTopicsData(res.data.topics);
    });
  }, []);

  const handleTopic = (e) => {
    setTopicsValue(e.target.value);
  };

  console.log(topicsData);
  return (
    <nav className="nav-container">
      <h3>Filter By Topic</h3>
      <select onChange={handleTopic} className="Nav-select">
        {topicsData.map((topics, index) => {
          return (
            <>
              <option key={index}>{topics.slug}</option>
            </>
          );
        })}
      </select>
    </nav>
  );
};

export default Nav;
