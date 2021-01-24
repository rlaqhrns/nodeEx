import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';


function App() {
  const [tasks, setTasks] = useState([
    {id:1,text:"병원 예약",day:"2020-11-12",reminder:true},
    {id:2,text:"학교 미팅", day:"2020-11-13",reminder:true},
    {id:3,text:"물건 구매",day:"2020-12-19",reminder:false},
    ]);
  const deleteTask = (id) => {
    console.log("삭제 !!!",id);
  }
  return (
    <div className ="App">
      <Header title="React" />
      <h1>안녕하세요</h1>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
