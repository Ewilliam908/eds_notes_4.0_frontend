import React from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = React.useState([])
    const [task, setTask] = React.useState("")

    function handleSubmit (e) {
        e.preventDefault()

        const newTask ={
            id: new Date().getTime(),
            text: task,
            completed: false,
        }

        setTasks([...tasks].concat(newTask))
        setTask("")
    }

    function deleteTask(id) {
        const updatedTasks = [...tasks].filter((task) => task.id !== id )

        setTasks(updatedTasks)
    }


    function toggleComplete(id) {
        const updatedTasks =[...tasks].map((task) => {
            if (task.id === id) {
                task.completed =!task.completed
            }
            return task
        })

        setTasks(updatedTasks)
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTask(e.target.value)} value={task}/>
                <button type="submit">Commit</button>
            </form>
            {tasks.map((task) => <div key={task.id}>
                <div>{task.text}</div>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <input 
                    type="checkbox" 
                    onChange={() => toggleComplete(task.id)} 
                    checked={task.completed} />
             </div>)}
        </div>
    );
}

export default App;