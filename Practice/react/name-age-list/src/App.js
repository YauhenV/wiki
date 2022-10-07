import NameInput from './components/NameInput/NameInput';
import NameList from './components/NameList/NameList';

import React, { useState } from 'react';
import './App.css';

function App() {

  const [dataList, setDataList] = useState([
    { name: "Eugene", age: 30, id: "1" },
    { name: "Djony", age: 25, id: "2" },
    { name: "Jany", age: 18, id: "3" },
  ]);

  const newDataSubmitHandler = (inputData) => {
    setDataList((prevData) => {
      const updateData = [...prevData];
      updateData.unshift({name: inputData[0], age:inputData[1],  id: Math.random()});
      return updateData;
    })
  }

  return (
    <div>
      <section className='name-input'>
        <NameInput onSubmit={newDataSubmitHandler}/>
      </section>
      <section className='name-list'>
        <NameList dataList={dataList}/>
      </section>
    </div>
  )
}

export default App;
