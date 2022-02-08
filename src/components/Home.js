import "../styles/Home.css";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Articles from "./Articles";
import Header from "./Header";
import Nav from "./Nav";

const Home = () => {
  const [topicsValue, setTopicsValue] = useState("");

  return (
    <div className="Home">
      <Nav setTopicsValue={setTopicsValue} />
      <Articles topicsValue={topicsValue} />
      <ArticleCard />
    </div>
  );
};

export default Home;
