import { Button, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import React from "react";
import NoteList from "./NoteList";

export default function Notes({ todo, addNoteToTodo }) {
  let input;

  return (
    <React.Fragment>
      <DialogTitle id="responsive-dialog-title">
        Notes for todo - {todo.text}
      </DialogTitle>
      <DialogContent>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            addNoteToTodo(todo.id, input.value);
            input.value = "";
          }}
        >
          <TextField
            autoFocus
            inputRef={node => (input = node)}
            id="standard-multiline-flexible"
            label="Place note here"
            multiline
            rowsMax="4"
            fullWidth
            margin="normal"
          />
          <Button color="primary" variant="outlined" type="submit">
            Add Note
          </Button>
        </form>
        <NoteList notes={todo.notes} />
      </DialogContent>
    </React.Fragment>
  );
}
