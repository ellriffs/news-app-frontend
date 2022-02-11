import "../styles/Home.css";
import { useState } from "react";
import Articles from "./Articles";
import Nav from "./Nav";

const Home = () => {
  const [topicsValue, setTopicsValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [loading, isLoading] = useState(false);

  return (
    <div className="Home">
      <Nav
        sortValue={sortValue}
        setTopicsValue={setTopicsValue}
        setSortValue={setSortValue}
        topicsValue={topicsValue}
      />
      <Articles
        loading={loading}
        isLoading={isLoading}
        topicsValue={topicsValue}
        sortValue={sortValue}
      />
    </div>
  );
};

export default Home;
