import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Blog.css';

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    "fall-2025-week-4-from-ideas-to-impact": {
      id: 1,
      title: "Fall 2025 Week 4: From Ideas to Impact, with Dequan & Darcel",
      date: "10/20/2025",
      content: `On Monday, October 10th, Black in Tech at UCI had the incredible honor of hosting two inspiring tech founders who shared their remarkable journeys from concept to company. Dequan Guillebeau, Founder of DataDrift, and Darcel Mugisha, Co-Founder of GenInnovation, captivated our members with their stories of innovation, perseverance, and entrepreneurial spirit.

The event, titled "From Ideas to Impact," provided our community with invaluable insights into the world of tech entrepreneurship. Both speakers shared their unique paths to founding their companies, discussing the challenges they faced, the lessons they learned, and the impact they're making in the tech industry.

Dequan Guillebeau, the visionary behind DataDrift, shared how he identified a gap in the market and transformed his idea into a thriving data analytics company. His story highlighted the importance of recognizing opportunities and having the courage to pursue them, even when the path forward wasn't always clear.

Darcel Mugisha, Co-Founder of GenInnovation, inspired attendees with his journey of building a company focused on generational innovation. He emphasized the power of collaboration, mentorship, and staying true to your vision while navigating the complexities of the startup world.

The evening was filled with engaging discussions, thoughtful questions from our members, and networking opportunities that allowed students to connect directly with these accomplished founders. Our members left feeling inspired and equipped with practical advice for their own entrepreneurial aspirations.

This event exemplifies Black in Tech's commitment to providing our community with access to successful Black tech professionals and entrepreneurs. We're proud to create spaces where our members can learn from those who have paved the way and are actively shaping the future of technology.

We extend our heartfelt gratitude to Dequan and Darcel for sharing their time, wisdom, and experiences with our community. Their stories serve as powerful reminders that with vision, determination, and the right support, anyone can transform their ideas into meaningful impact.`,
      image: "/images/BlogPost/IMG_5075.jpg"
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="blog-page">
        <div className="blog-hero">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="cta-button">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page page-transition">
      <div className="blog-post-page">
        <div className="container">
          <Link to="/blog" className="blog-back-link">
            <i className="fas fa-arrow-left"></i> Back to Blog
          </Link>
          
          <article className="blog-post-full">
            <div className="blog-post-header">
              <div className="blog-post-date">{post.date}</div>
              <h1 className="blog-post-title-full">{post.title}</h1>
            </div>

            {post.image && (
              <div className="blog-post-image-full">
                <img 
                  src={post.image} 
                  alt={post.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}

            <div className="blog-post-body">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="blog-post-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

