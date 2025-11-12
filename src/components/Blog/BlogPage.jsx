import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Fall 2025 Week 4: From Ideas to Impact, with Dequan & Darcel",
      date: "10/20/2025",
      excerpt: "On Monday, October 10th, BiT had special guests Dequan Guillebeau, Founder of DataDrift and Darcel Mugisha, Co-Founder of GenInnovation speak about how they became founders of their own tech companies!",
      slug: "fall-2025-week-4-from-ideas-to-impact",
      image: "/images/BlogPost/IMG_5075.jpg"
    }
  ];

  return (
    <div className="blog-page page-transition">
      <div className="blog-hero">
        <h1 className="fade-in-up">News & Blog</h1>
        <p className="fade-in-up">Stay updated with the latest news, events, and insights from Black in Tech at UCI</p>
      </div>

      <div className="blog-content">
        <div className="container">
          <div className="blog-posts">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post-card fade-in-up">
                {post.image && (
                  <div className="blog-post-image">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="blog-post-content">
                  <div className="blog-post-date">{post.date}</div>
                  <h2 className="blog-post-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

