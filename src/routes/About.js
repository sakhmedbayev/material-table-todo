import React from "react";
import { Box, Typography } from "@material-ui/core";
import Layout from "../components/Layout";

const About = () => (
  <Layout title="About me">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Said Akhmedbayev
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        React and React-Native full-stack web and mobile developer
      </Typography>
      <Typography component="p" gutterBottom>
        Extensive 7+ years’ work experience as a web and mobile full-stack
        developer writing clean, maintainable, and modern code. Shipped
        cross-platform mobile and web apps. Competent in working with React,
        React Native, Apollo Stack, GraphQL and REST API’s and serverless
        infrastructures such as AWS AppSync.
      </Typography>
    </Box>
  </Layout>
);

export default About;
