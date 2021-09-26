import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <p>
        ソースはgithubにあります。
        <br />
        <a href="https://github.com/ktsnkmrcom/from-room-401">
          https://github.com/ktsnkmrcom/from-room-401
        </a>
      </p>
      <StaticImage alt="1" src="../images/1.png" />
    </Layout>
  );
};

export default IndexPage;
