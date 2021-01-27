import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, text: '병원 예약', day: '2020-11-12', reminder: true },
        { id: 2, text: '학교 미팅', day: '2020-11-13', reminder: true },
        { id: 3, text: '물건 구매', day: '2020-12-19', reminder: false },
    ])

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))

        console.log('삭제 !!!', tasks)
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)))
        console.log(tasks)
    }

    return (
        <div className='App'>
            <Header title='React' />
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : '태스크가 없다'}
        </div>
    )
}

export default App
