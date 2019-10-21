import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DoneAll from "@material-ui/icons/DoneAll";
import SentimentSatisfiedAlt from "@material-ui/icons/SentimentSatisfiedAlt";
import React from "react";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
      <ListItem button>
        <ListItemIcon>
          <DoneAll />
        </ListItemIcon>
        <ListItemText primary="To-do's" />
      </ListItem>
    </Link>
    <Link to="/about-me" style={{textDecoration: "none", color: "inherit"}}>
      <ListItem button>
        <ListItemIcon>
          <SentimentSatisfiedAlt />
        </ListItemIcon>
        <ListItemText primary="About me" />
      </ListItem>
    </Link>
  </div>
);
