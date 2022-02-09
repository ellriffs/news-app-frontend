import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import FullArticle from "./FullArticle";
import Articles from "./Articles";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_id" element={<FullArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
