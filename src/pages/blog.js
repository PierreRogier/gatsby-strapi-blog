import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Blogs from "../components/Blogs";

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
        date
        desc
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        slug
      }
    }
  }
`;

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {

  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  );
};

export default Blog;
