import "../styles/Home.css";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Articles from "./Articles";
import Nav from "./Nav";
import FullArticle from "./FullArticle";

const Home = () => {
  const [topicsValue, setTopicsValue] = useState("");

  return (
    <div className="Home">
      <Nav setTopicsValue={setTopicsValue} />
      <Articles topicsValue={topicsValue} />
      <ArticleCard />
      <FullArticle />
    </div>
  );
};

export default Home;
