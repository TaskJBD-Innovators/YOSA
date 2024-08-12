import React, { useState, useEffect } from "react";
import "../Styles/News.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/news")
      .then((response) => {
        console.log("Fetched data", response.data);
        setNewsData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the news!", error);
      });
  }, []);

  return (
    <div className="latest-news">
      <h2>Latest News</h2>
      <div className="news-container">
        {newsData.map((news, index) => (
          <div key={index} className="news-card">
            <img src={`http://localhost:3000${news.image}`} alt={news.title} className="news-image" />
            <div className="news-content">
              <div className="news-meta">
                <span className="author">
                  <i className="fa fa-user"></i> {news.author}
                </span>
                <span className="date">
                  <i className="fa fa-calendar"></i> {news.date}
                </span>
              </div>
              <h3>{news.title}</h3>
              <p>{news.body}</p>
              <button className="read-moree">Read More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="nav-button">&lt;</button>
        <button className="nav-button">&gt;</button>
      </div>
    </div>
  );
};

export default LatestNews;
