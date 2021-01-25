import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { Link } from "gatsby";

const Blog = ({ id, title, date, category, desc, image, slug }) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog">
      <article>
        <Image fluid={image.childImageSharp.fluid} alt={title} />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

Blog.propTypes = {};

export default Blog;
