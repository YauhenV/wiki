import Button from "./components/UI/button";
import "./App.css";
import React, {useState, useCallback } from "react";
import ParagraphOutput from "./components/Output/ParagraphOutput";

function App() {

  const [isParagraphShown, setIsParagraphShown] = useState(false);
  const [isTogglingActivated, setIsTogglingActivated] = useState(false);

  const activateToggling = () => {
    setIsTogglingActivated(prevIsParagraphShown => !prevIsParagraphShown);
  };

  const toogleParagraph = useCallback(() => {
    if (isTogglingActivated) {
      setIsParagraphShown(prevIsParagraphShown => !prevIsParagraphShown);
    } 
  }, [isTogglingActivated]);

  

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      <ParagraphOutput isShown = {isParagraphShown}/>
      <Button onClick = {activateToggling}>Активировать переключение</Button>
      {isTogglingActivated && <Button onClick = {toogleParagraph}>{isParagraphShown ? "Скрыть" : "Показать"}  Абзац</Button>}

    </div>
  );
}

export default App;
