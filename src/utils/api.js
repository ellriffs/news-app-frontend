import axios from "axios";

const API = axios.create({ baseURL: "https://ellriffs-api.herokuapp.com/api" });

export const getTopics = () => {
  return API.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topicsValue) => {
  const ifTopics = topicsValue ? `/articles?topic=${topicsValue}` : "/articles";
  return API.get(ifTopics).then((res) => {
    return res.data.articles;
  });
};

export const getSingleArticle = (article_id) => {
  return API.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComment = (article_id) => {
  return API.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postComment = (article_id, inputValue) => {
  return API.post(`/articles/${article_id}/comments`, inputValue).then(
    (res) => {
      return res.data.newComment;
    }
  );
};

export const deleteComment = (comment_id) => {
  return API.delete(`/comments/${comment_id}`).then((res) => {
    return res.data;
  });
};

export const patchVotes = (article_id, voteCount) => {
  return API.patch(`/articles/${article_id}`, voteCount).then((res) => {
    return res.data.article;
  });
};

export const patchCommentVotes = (comment_id, voteCount) => {
  return API.patch(`/comments/${comment_id}`, voteCount).then((res) => {
    return res.data.article;
  });
};
