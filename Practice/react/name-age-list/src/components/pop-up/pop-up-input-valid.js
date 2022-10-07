import "./pop-up-input-valid.css";

const PopUpInputValid = (props) => {
  const closePopUpHandler = (event) => {
    if (event.target.dataset.close) {
      props.closePopUpFlag(true);
    }
  }

  return (
    <div className="pop-up-input__valid" onClickCapture={closePopUpHandler} data-close="true">
      <div className="pop-up-input__valid-body">
        <div className="div-pop">
          <h3 className="pop-up-input__valid-title">{props.title}</h3>
        </div>
        <div className="pop-up-input__valid-text">
          <p>{props.text}</p>
        </div>
        <div>
          <button className="pop-up-input__valid-button" type="button" data-close="true">Закрыть</button>
        </div>
      </div>
    </div>
  )
}

export default PopUpInputValid;