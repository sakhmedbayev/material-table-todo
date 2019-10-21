import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Note from "@material-ui/icons/Note";
import Remove from "@material-ui/icons/Remove";
import Save from "@material-ui/icons/Save";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable, { MTableEditField, MTableToolbar } from "material-table";
import React, { forwardRef } from "react";
import TodoNote from "../containers/TodoNote";
import NoteDialog from "./Dialog";
import Filter from "./Filter";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Save {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function TodoTable({ todos, addTodo, toggleTodo, deleteTodo, editTodo }) {
  const [open, setOpen] = React.useState(false);
  const [todoToNote, setTodoToNote] = React.useState();

  const handleDialogOpen = rowData => {
    setOpen(true);
    setTodoToNote(rowData);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const columns = [{ title: "Name", field: "text" }];

  return (
    <React.Fragment>
      <MaterialTable
        icons={tableIcons}
        title="All todos"
        columns={columns}
        data={todos}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                addTodo(newData.text);
              }, 600);
            }),
          onRowUpdate: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                editTodo(newData.id, newData.text);
              }, 600);
            }),
          onRowDelete: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                deleteTodo(newData.id);
              }, 600);
            })
        }}
        actions={[
          {
            icon: () => <Check />,
            tooltip: "set todo status",
            onClick: (event, rowData) => {
              toggleTodo(rowData.id);
            }
          },
          {
            icon: () => <Note />,
            tooltip: "add a note",
            onClick: (event, rowData) => {
              handleDialogOpen(rowData);
            }
          }
        ]}
        options={{
          actionsColumnIndex: -1,
          rowStyle: rowData => ({
            backgroundColor: rowData.completed ? "#EEE" : "#FFF",
            textDecoration: rowData.completed ? "line-through" : "none"
          })
        }}
        components={{
          Toolbar: props => (
            <div>
              <MTableToolbar {...props} />
              <div style={{ padding: "0px 10px" }}>
                <Filter />
              </div>
            </div>
          ),
          EditField: props => <MTableEditField autoFocus {...props} />
        }}
      />
      <NoteDialog open={open} handleDialogClose={handleDialogClose}>
        <TodoNote todoToNote={todoToNote} />
      </NoteDialog>
    </React.Fragment>
  );
}

export default TodoTable;
