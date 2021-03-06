import React from "react";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <h1 className="f-headline">404</h1>
    <p>This page doesn&#39;t exist.</p>
    <p className="moon-gray">
      If you think it should, please send me an email at{" "}
      <a className="moon-gray b" href="mailto:a@tuzi.moe">
          a@tuzi.moe
      </a>
      .
    </p>
  </Layout>
);

export default NotFoundPage;
