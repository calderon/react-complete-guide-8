import { Fragment } from "react";
import { createPortal } from "react-dom";

import Button from "./Button.js";
import "./ErrorModal.css";

const Overlay = (props) => {
  return <div className="modal-overlay" onClick={props.onHide} />;
};

const Modal = (props) => {
  return (
    <div className="modal modal--error">
      <h2 className="modal__title">Invalid input</h2>
      <div className="modal__content">{props.errorMessage}</div>
      <div className="modal__footer">
        <Button onClick={props.onHide}>Close</Button>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <>
          <Overlay onHide={props.onHide} />
          <Modal errorMessage={props.errorMessage} onHide={props.onHide} />
        </>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
