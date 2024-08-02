import React from 'react';
import '../Styles/News.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LatestNews = () => {
  const newsData = [
    {
      author: 'Esther Howard',
      date: '12 Sep 2021',
      title: 'Charity, Expectations Vs. Reality',
      description: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......'
    },
    {
      author: 'Jacob Jones',
      date: '22 Aug 2021',
      title: "This Week's Top Stories About Charity",
      description: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......'
    },
    {
      author: 'Floyd Miles',
      date: '30 Jul 2021',
      title: 'Why You Should Focus On Charity',
      description: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Sed Diam Nonumy Tempor Invidunt Ut Labore Et Magna Aliquyam Erat, Sed Diam Voluptua......'
    }
  ];

  return (
    <div className="latest-news">
      <h2>Latest News</h2>
      <div className="news-container">
        {newsData.map((news, index) => (
          <div key={index} className="news-card">
            <div className="image-placeholder"></div>
            <div className="news-content">
              <div className="news-meta">
                <span className="author"><i className="fa fa-user"></i> {news.author}</span>
                <span className="date"><i className="fa fa-calendar"></i> {news.date}</span>
              </div>
              <h3>{news.title}</h3>
              <p>{news.description}</p>
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