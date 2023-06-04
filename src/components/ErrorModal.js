import "./ErrorModal.css";

const ErrorModal = (props) => {
  const buttonClickHandler = () => {
    props.onHide();
  };

  return (
    <div className="errorModal">
      <div className="errorModal__modal">
        <h2 className="errorModal__title">Invalid input</h2>
        <div className="errorModal__content">{props.errorMessage}</div>
        <div className="errorModal__footer">
          <button className="errorModal__button" onClick={buttonClickHandler}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
