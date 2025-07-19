import React from 'react';
import { Link } from 'react-router-dom';
import SparkHeader from '../components/SparkHeader';

// Images
const tokyoImg = "https://wallpaperaccess.com/full/417584.jpg";
const visaImg = "https://l450v.alamy.com/450v/2k6ck4x/hand-holding-open-passport-with-republic-of-india-visa-in-british-passport-2k6ck4x.jpg";
const productivityImg = "https://thumbs.dreamstime.com/b/minimalist-office-desk-setup-laptop-coffee-plants-341168230.jpg";
const lisbonImg = "https://img.freepik.com/premium-photo/group-friends-laughing-enjoying-meal-together-outdoors-table-lit-by-string-lights_14117-809198.jpg";

const featuredArticle = {
  title: "Tokyo on a Budget: How Our Nomad Score Helps You Plan",
  excerpt:
    "Everyone dreams of Tokyo, but many are deterred by its reputation as an expensive city. But what if you could experience the best of this megacity without breaking the bank? Our in-depth analysis of Tokyo's Nomad Lifestyle Score (Cost: 91/100) shows you how. In this guide, we break down average costs, from accommodation to that perfect bowl of ramen, and share insider tips from our community on how to make your Japanese adventure affordable.",
  image: tokyoImg,
  category: "Destination Guides",
  link: "/blog/tokyo-budget-guide",
};

const latestArticles = [
  {
    id: 1,
    title: "The 2025 Digital Nomad Visa Roundup: 5 New Countries to Add to Your List",
    excerpt:
      "The world is opening its doors to remote workers faster than ever. From the beaches of Brazil to the mountains of Georgia, we explore five new and updated digital nomad visas you need to know about this year.",
    image: visaImg,
    category: "Visa Updates",
    link: "/blog/2025-visa-roundup",
  },
  {
    id: 2,
    title: "Mastering Productivity on the Road: 7 Essential Tools for the Modern Nomad",
    excerpt:
      "Staying focused while the world calls to be explored can be tough. We share our top 7 apps and gadgets that will help you stay on task, manage your projects, and keep your work-life balance in check, no matter your time zone.",
    image: productivityImg,
    category: "Remote Work Tips",
    link: "/blog/productivity-tools-nomads",
  },
  {
    id: 3,
    title: "Community Spotlight: Finding Your Tribe in Lisbon",
    excerpt:
      "Loneliness can be a real challenge for nomads. In our first community spotlight, we talk to three NomadNetwork members about how they built lasting friendships and professional connections in Portugal's vibrant capital.",
    image: lisbonImg,
    category: "Community Stories",
    link: "/blog/nomads-in-lisbon",
  },
];

function BlogPage() {
  return (
    <>
      {/* Banner Background with Header on Top */}
      <div
      className="relative w-full min-h-[80vh] flex items-center justify-center px-6 sm:px-12 py-20 pt-28 sm:pt-20"
      style={{
        backgroundImage: `url(${featuredArticle.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >

        <div className="absolute top-0 left-0 w-full z-30">
          <SparkHeader />
        </div>


        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

        {/* Content */}
        <div className="relative z-20 text-white max-w-2xl text-center">
          <p className="text-sm text-blue-300 uppercase tracking-wide font-semibold mt-10 mb-2">
            {featuredArticle.category}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{featuredArticle.title}</h1>
          <p className="text-lg mb-6">{featuredArticle.excerpt}</p>
          <Link
            to={featuredArticle.link}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Read More →
          </Link>
        </div>
      </div>

      {/* Main Blog Content */}
      <div className="bg-white text-gray-800 px-6 md:px-10 lg:px-20 py-16 max-w-[1440px] mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">Latest Articles</h3>

        {/* Article Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {latestArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition border border-gray-200"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <p className="text-xs text-blue-500 font-semibold mb-1">{article.category}</p>
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.excerpt.slice(0, 100)}...
                </p>
                <Link
                  to={article.link}
                  className="text-blue-600 hover:underline font-medium text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
