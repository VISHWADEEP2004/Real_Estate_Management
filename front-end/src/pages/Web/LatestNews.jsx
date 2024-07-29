import React from 'react';

const articles = [
  {
    title: "5 Tips for First-Time Homebuyers",
    date: "July 25, 2024",
    description: "Navigating the real estate market for the first time can be challenging. Here are 5 tips to help you get started.",
    link: "#",
    image: "https://via.placeholder.com/300x200" // Replace with real images
  },
  {
    title: "Understanding the Real Estate Market Trends",
    date: "July 20, 2024",
    description: "Stay updated with the latest trends in the real estate market to make informed decisions.",
    link: "#",
    image: "https://via.placeholder.com/300x200" // Replace with real images
  },
  {
    title: "The Benefits of Investing in Real Estate",
    date: "July 15, 2024",
    description: "Real estate investment can be a lucrative opportunity. Discover the benefits and how to get started.",
    link: "#",
    image: "https://via.placeholder.com/300x200" // Replace with real images
  }
];

const LatestNews = () => {
  return (
    <section className="latest-news  text-secondary-foreground dark:bg-background dark:text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">Latest News & Blogs</h2>
        <div className="news-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="news-card bg-card text-card-foreground dark:bg-card dark:text-card-foreground p-6 rounded-lg shadow-md">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover mb-4 rounded-lg"/>
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-muted dark:text-muted-foreground mb-2">{article.date}</p>
              <p className="text-base mb-4">{article.description}</p>
              <a href={article.link} className="text-primary hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
