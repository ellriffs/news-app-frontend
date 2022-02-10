import "../styles/Home.css";
import { useState } from "react";
import Articles from "./Articles";
import Nav from "./Nav";

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
    </div>
  );
};

export default Home;
