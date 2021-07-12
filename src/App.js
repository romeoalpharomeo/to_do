import './App.css';
import { useState } from 'react';
import ToDoCard from './components/ToDoCard';
import Form from './components/Form';

function App() {
  const [toDos, setToDos] = useState([
    {
      name: 'MERN',
      isComplete: false,
    },
    {
      name: 'Python',
      isComplete: false,
    }
  ])

  const onCheckHandler = (idx) => {
    const temp = {
      ...toDos[idx],
      isComplete: !toDos[idx].isComplete
    }

    setToDos([
      ...toDos.slice(0,idx),
      temp,
      ...toDos.slice(idx+1)
    ])

  }

  const onDeleteHandler = (idx) => {
    setToDos([
      ...toDos.slice(0,idx),
      ...toDos.slice(idx+1)
    ])
  }


  return (
    <div className="App">

      <Form toDos={toDos} setToDos={setToDos}/>
      {
        toDos.map((toDo, idx) => {
          return <ToDoCard onDeleteHandler={onDeleteHandler} onCheckHandler={onCheckHandler} key={idx} toDo={toDo} idx={idx}/>
        })
      }
    </div>
  );
}

export default App;
