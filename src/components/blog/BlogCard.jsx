import React from "react";

const BlogCard = ({ title, description, onClick }) => {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onClick}>Play Now</button>
    </div>
  );
};

export default BlogCard;
