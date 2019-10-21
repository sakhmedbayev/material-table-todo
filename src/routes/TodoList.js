import React from "react";
import Layout from "../components/Layout";
import VisibleTodoList from "../containers/VisibleTodoList";

const TogoList = () => (
  <Layout title={"Material-table to-do app"}>
    <VisibleTodoList />
  </Layout>
);

export default TogoList;
