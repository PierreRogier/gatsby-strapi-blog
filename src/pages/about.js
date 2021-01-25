import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Title from "../components/Title";
import Image from "gatsby-image";

export const query = graphql`
  {
    strapiAbout {
      title
      stack {
        id
        title
      }
      info
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const About = ({ data: { strapiAbout } }) => {
  const {
    title,
    stack,
    info,
    image: {
      childImageSharp: { fluid },
    },
  } = strapiAbout;

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className="about-img" alt={title} />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item)=>{
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;
