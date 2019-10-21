import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { compareDesc, formatRelative, subDays } from "date-fns";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const NoteItem = ({ note }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={`${formatRelative(subDays(note.dateAdded, 0), new Date())}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {note.text}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
    </React.Fragment>
  );
};

export default function NoteList({ notes }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {notes
        .sort((a, b) => compareDesc(a.dateAdded, b.dateAdded))
        .map(note => (
          <NoteItem key={note.id} note={note} />
        ))}
    </List>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      dateAdded: PropTypes.instanceOf(Date)
    })
  ),
};
