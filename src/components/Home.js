import '../styles/Home.css';
import ArticleCard from './ArticleCard';
import Articles from './Articles';
import Header from './Header';
import Nav from './Nav';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Nav />
      <Articles />
      <ArticleCard />
    </div>
  );
};

export default Home;
