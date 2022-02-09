import "../styles/Home.css";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import Articles from "./Articles";
import Nav from "./Nav";
import FullArticle from "./FullArticle";

const Home = () => {
  const [topicsValue, setTopicsValue] = useState("");
  const [loading, isLoading] = useState(false);

  return (
    <div className="Home">
      <Nav setTopicsValue={setTopicsValue} />
      <Articles
        loading={loading}
        isLoading={isLoading}
        topicsValue={topicsValue}
      />
      <ArticleCard />
      <FullArticle loading={loading} isLoading={isLoading} />
    </div>
  );
};

export default Home;
