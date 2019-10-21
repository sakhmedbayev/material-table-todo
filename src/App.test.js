import {
  cleanup,
  fireEvent,
  render,
  waitForElement
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import reducer from "./reducers";
import App from "./routes";

afterEach(cleanup);

function renderWithRedux(ui, { store = createStore(reducer) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

const addATodo = (getByTitle, getByPlaceholderText, text) => {
  const addButton = getByTitle("Add");
  fireEvent.click(addButton);

  const inputTodo = getByPlaceholderText("Name");
  fireEvent.click(inputTodo);
  fireEvent.change(inputTodo, { target: { value: text } });

  const saveButton = getByTitle("Save");
  fireEvent.click(saveButton);
};

test("can initialize a todo", () => {
  const { getByTitle, getByText, getByPlaceholderText } = renderWithRedux(
    <App />
  );

  const addButton = getByTitle("Add");
  expect(getByText("No records to display"));
  fireEvent.click(addButton);
  getByPlaceholderText("Name");
});
test("can add a new todo", async () => {
  const { getByTitle, getByText, getByPlaceholderText } = renderWithRedux(
    <App />
  );

  addATodo(getByTitle, getByPlaceholderText, "My first todo");

  await waitForElement(() => getByText("My first todo"));
});
test("can add two todos", async () => {
  const { getByTitle, getByText, getByPlaceholderText } = renderWithRedux(
    <App />
  );

  addATodo(getByTitle, getByPlaceholderText, "My first todo");

  await waitForElement(() => getByText("My first todo"));

  addATodo(getByTitle, getByPlaceholderText, "My second todo");

  await waitForElement(() => getByText("My second todo"));
});
test("can edit a todo", async () => {
  const {
    container,
    debug,
    getByTitle,
    getByText,
    getByPlaceholderText,
    getByDisplayValue
  } = renderWithRedux(<App />);

  addATodo(getByTitle, getByPlaceholderText, "My first todo");

  await waitForElement(() => getByText("My first todo"));

  const editButton = getByTitle("Edit");
  fireEvent.click(editButton);

  const inputTodo = await waitForElement(
    () => getByDisplayValue("My first todo"),
    { container }
  );

  fireEvent.change(inputTodo, { target: { value: "My first todo edited" } });
  const saveButton = getByTitle("Save");
  fireEvent.click(saveButton);

  await waitForElement(() => getByDisplayValue("My first todo edited"), {
    container
  });

  const cancelButton = getByTitle("Cancel");
  fireEvent.click(cancelButton);

  await waitForElement(() => getByText("My first todo edited"), { container });
});

test("can delete a todo", async () => {
  const { getByTitle, getByText, getByPlaceholderText } = renderWithRedux(
    <App />
  );

  addATodo(getByTitle, getByPlaceholderText, "My first todo");

  await waitForElement(() => getByText("My first todo"));

  const deleteButton = getByTitle("Delete");
  fireEvent.click(deleteButton);

  await waitForElement(() =>
    getByText("Are you sure you want to delete this row?")
  );

  const saveButton = getByTitle("Save");
  fireEvent.click(saveButton);

  await waitForElement(() => getByText("No records to display"));
});
test("can toggle todo", async () => {
  const {
    container,
    getByTitle,
    getByText,
    getByPlaceholderText,
    get
  } = renderWithRedux(<App />);

  addATodo(getByTitle, getByPlaceholderText, "My first todo");

  await waitForElement(() => getByText("My first todo"));

  const setStatusButton = getByTitle("set todo status");
  fireEvent.click(setStatusButton);

  expect(
    container.getElementsByTagName("tr")[1].getAttribute("style")
  ).toContain("text-decoration: line-through");

  fireEvent.click(setStatusButton);

  expect(
    container.getElementsByTagName("tr")[1].getAttribute("style")
  ).toContain("text-decoration: none");
});
test("can persist todos' state on revisit", async () => {
  const history = createMemoryHistory();
  const { getByText, getByTitle, getByPlaceholderText } = renderWithRedux(
    <Router history={history}>
      <App />
    </Router>
  );

  addATodo(getByTitle, getByPlaceholderText, "My first todo");
  await waitForElement(() => getByText("My first todo"));

  fireEvent.click(getByText(/About me/i));

  getByText("Said Akhmedbayev");

  fireEvent.click(getByText(/To-do's/i));
  getByText("My first todo");
});
