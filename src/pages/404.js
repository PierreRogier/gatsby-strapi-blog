import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import SEO from "../components/SEO";

const Error = () => {
  return (
    <Layout>
      <section className="error-page">
        <div className="error-container">
          <h1>oops, this page doesn't exist</h1>
          <Link to="/" className="btn" >back home</Link>
        </div>
      </section>
    </Layout>
  );
};

export default Error;
