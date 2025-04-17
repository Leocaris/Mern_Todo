import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { FaTrash, FaRegCircle, FaRegCheckCircle } from 'react-icons/fa'; // Import icons

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);


    const handleEdit = (id, done) => {
        console.log("Clicked on task with ID:", id);
        axios.put(`http://localhost:3001/update/${id}`, { done: !done })
            .then(result => {
                setTodos(prev =>
                    prev.map(todo =>
                        todo._id === id ? { ...todo, done: !done } : todo
                    )
                );
            })
            .catch(err => console.log(err));
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then(res => {
                setTodos(prev => prev.filter(todo => todo._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='home'>
            <h2>Todo List</h2>
            <Create />
            {
                todos.length === 0 ? (
                    <div><h2>No Record</h2></div>
                ) : (
                    todos.map((todo) => (
                        <div key={todo._id} className="task">
                            <div className="checkbox"  onClick={() => handleEdit(todo._id, todo.done)}>
                                {todo.done ? <FaRegCheckCircle />
                                : <FaRegCircle className="icon" />}
                                <span>{todo.task}</span>
                            </div>
                            <FaTrash className="delete-icon" onClick={() => handleDelete(todo._id)} />
                        </div>
                    ))
                )
            }
        </div>
    );
}

export default Home;
