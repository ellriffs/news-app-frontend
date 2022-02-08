import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Nav from "./Nav";
import FullArticle from "./FullArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:article_name" element={<FullArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
