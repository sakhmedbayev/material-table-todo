import React from "react";
import Layout from "../components/Layout";
import VisibleTodoList from "../containers/VisibleTodoList";

const Todos = () => (
  <Layout title={"Material-table todo app"}>
    <VisibleTodoList />
  </Layout>
);

export default Todos;
