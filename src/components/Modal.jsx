import React from 'react';
// material-ui components
import Slide from "@material-ui/core/Slide/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "./muik-components/CustomButtons/Button.js";
import modalStyle from "./muik-components/assets/jss/material-kit-react/modalStyle"
import { makeStyles } from "@material-ui/core/styles";

const styles = {
    ...modalStyle
  }
  
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Modal() {
  const [modal, setModal] = React.useState(false);
  const classes = useStyles();
  return (
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Modal title</h4>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >
          <h5>Are you sure you want to do this?</h5>
        </DialogContent>
        <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterCenter}
        >
          <Button onClick={() => setModal(false)}>Never Mind</Button>
          <Button onClick={() => setModal(false)} color="success">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
  );
}