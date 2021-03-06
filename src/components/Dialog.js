import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import PropTypes from 'prop-types';
import React from "react";

const useStyles = makeStyles(theme => ({
  dialogCustomizedWidth: {
    'min-width': '500px'
  }
}));

export default function MyDialog({ open, handleDialogClose, children }) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      fullScreen={fullScreen}
      maxWidth={"md"}
      open={open}
      onClose={handleDialogClose}
      aria-labelledby="responsive-dialog-title"
      classes={{ paper: fullScreen ? '' : classes.dialogCustomizedWidth }}
    >
      {children}
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

MyDialog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  open: PropTypes.bool.isRequired,
  handleDialogClose: PropTypes.func.isRequired
};
