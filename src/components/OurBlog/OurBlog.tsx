import React from "react";

import gallery1 from "../../assets/images/gallery-1-thumb.jpg";
import gallery2 from "../../assets/images/gallery-2-thumb.jpg";
import gallery3 from "../../assets/images/gallery-3-thumb.jpg";
import gallery4 from "../../assets/images/gallery-4-thumb.jpg";
import gallery5 from "../../assets/images/gallery-5-thumb.jpg";
import gallery6 from "../../assets/images/gallery-6-thumb.jpg";
import gallery7 from "../../assets/images/gallery-7-thumb.jpg";
import gallery8 from "../../assets/images/gallery-8-thumb.jpg";
import gallery9 from "../../assets/images/gallery-9-thumb.jpg";
import gallery10 from "../../assets/images/gallery-10-thumb.jpg";
import gallery11 from "../../assets/images/gallery-11-thumb.jpg";
import gallery12 from "../../assets/images/gallery-12-thumb.jpg";
import gallery13 from "../../assets/images/gallery-13-thumb.jpg";
import gallery14 from "../../assets/images/gallery-14-thumb.jpg";
import gallery15 from "../../assets/images/gallery-15-thumb.jpg";
import gallery16 from "../../assets/images/gallery-16-thumb.jpg";

import { blogs } from "../../assets/data/blogs";
import { posts } from "../../assets/data/posts";

import "./OurBlog.css";

const OurBlog: React.FC = () => {
  return (
    <div className="our-blog-container">
      <div className="our-blog-container-left">
        <ul className="our-blog-list">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <img src={blog.image} alt="blog" />
              <small>
                Type: {blog.type} / Author: {blog.author} / Date: {blog.date}
              </small>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
              <button className="our-blog-button">Read More</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="our-blog-container-right">
        <div className="our-blog-search-container">
          <h4>Search</h4>
          <input type="text" placeholder="Type your keyword" />
        </div>
        <div className="our-blog-post-container">
          <h4>Posts</h4>
          <ul className="our-blog-post-list">
            {posts.map((post) => (
              <li key={post.id}>
                <img src={post.image} alt="post" />
                <div className="our-blog-post-detail">
                  <h2>{post.title}</h2>
                  <small>{post.date}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="our-blog-category-container">
          <h4>Categories</h4>
          <ul className="our-blog-category-list">
            <li>
              <p>Adventure</p>
              <small>(1)</small>
            </li>
            <hr />
            <li>
              <p>Hiking</p>
              <small>(3)</small>
            </li>
            <hr />
            <li>
              <p>Culture</p>
              <small>(2)</small>
            </li>
            <hr />
            <li>
              <p>Uncategorized</p>
              <small>(4)</small>
            </li>
          </ul>
        </div>
        <div className="our-blog-gallery-container">
          <h4>Gallery</h4>
          <ul className="our-blog-gallery-list">
            <li>
              <img src={gallery1} alt="gallery" />
            </li>
            <li>
              <img src={gallery2} alt="gallery" />
            </li>
            <li>
              <img src={gallery3} alt="gallery" />
            </li>
            <li>
              <img src={gallery4} alt="gallery" />
            </li>
            <li>
              <img src={gallery5} alt="gallery" />
            </li>
            <li>
              <img src={gallery6} alt="gallery" />
            </li>
            <li>
              <img src={gallery7} alt="gallery" />
            </li>
            <li>
              <img src={gallery8} alt="gallery" />
            </li>
            <li>
              <img src={gallery9} alt="gallery" />
            </li>
            <li>
              <img src={gallery10} alt="gallery" />
            </li>
            <li>
              <img src={gallery11} alt="gallery" />
            </li>
            <li>
              <img src={gallery12} alt="gallery" />
            </li>
            <li>
              <img src={gallery13} alt="gallery" />
            </li>
            <li>
              <img src={gallery14} alt="gallery" />
            </li>
            <li>
              <img src={gallery15} alt="gallery" />
            </li>
            <li>
              <img src={gallery16} alt="gallery" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
