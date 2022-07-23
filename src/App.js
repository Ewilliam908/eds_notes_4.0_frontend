import React from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = React.useState([])
    const [task, setTask] = React.useState("")

    return (
        <div className="App">
            <form>
                <input type="text" />
                <button type="submit">Commit</button>
            </form>
        </div>
    );
} 

export default App;