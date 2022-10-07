import NameInput from './components/NameInput/NameInput';
import NameList from './components/NameList/NameList';

import React, { useState } from 'react';
import './App.css';
import PopUpInputValid from './components/pop-up/pop-up-input-valid';

function App() {

  let popUp;

  const [dataList, setDataList] = useState([
    { name: "Eugene", age: 30, id: "1" },
    { name: "Djony", age: 25, id: "2" },
    { name: "Jany", age: 18, id: "3" },
  ]);

  const [isInputValid, setIsInputValid] = useState(true);

  const newDataSubmitHandler = (inputData) => {
    setDataList((prevData) => {
      const updateData = [...prevData];
      updateData.unshift({name: inputData[0], age:inputData[1],  id: Math.random()});
      return updateData;
    })
  }

  const inputValidHandler = (inputValid) => {
    setIsInputValid(inputValid);
  }

  const closePopUpHandler = (closePopUpFlag) => {
    setIsInputValid(closePopUpFlag);
  }

  if (!isInputValid) {
    popUp = <PopUpInputValid 
      title={"Некорректный ввод"} 
      text = {"Эти поля не могут быть пустыми!"} 
      closePopUpFlag={closePopUpHandler}/>;
  }

  if (isInputValid === "lessOne") {
    popUp = <PopUpInputValid 
      title={"Некорректный возраст"} 
      text = {"Возраст должен быть больше единицы!"} 
      closePopUpFlag={closePopUpHandler}/>;
   
  }

  return (
    <div>
      <section className='name-input'>
        <NameInput onSubmit={newDataSubmitHandler} inputValid={inputValidHandler}/>
      </section>
      <section className='name-list'>
        <NameList dataList={dataList}/>
      </section>
      {popUp}
    </div>
  )
}

export default App;
