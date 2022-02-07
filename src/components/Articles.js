import ArticleCard from './ArticleCard';
import '../styles/Article.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Articles = () => {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    axios
      .get('https://ellriffs-api.herokuapp.com/api/articles')
      .then((res) => {
        setArticleData(res.data.article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(articleData);

  return (
    <section className="Content-Container">
      <h1 className="content-title">Latest Articles:</h1>
      {articleData &&
        articleData.map((content) => {
          return (
            <ArticleCard
              name={content.title}
              author={content.author}
              topic={content.topic}
              commentCount={content.comment_count}
              createdAt={content.created_at}
              votes={content.votes}
              articleData={articleData}
            />
          );
        })}
      }
    </section>
  );
};

export default Articles;
