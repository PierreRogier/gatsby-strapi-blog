import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        position
        strapiId
        date
        company
        desc {
          id
          name
        }
      }
    }
  }
`;

const Jobs = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query);

  const [value, setValue] = React.useState(0);

  const { company, position, date, desc } = jobs[value];

  return (
    <section className="section jobs">
      <Title title="experiences" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                type="button"
                key={job.strapiId}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div className="job-desc" key={item.id}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
};

export default Jobs;
