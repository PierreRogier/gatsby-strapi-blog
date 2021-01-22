import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        url
        title
        strapiId
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        github
        description
        id
      }
    }
  }
`;

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  );
};

export default ProjectsPage;
