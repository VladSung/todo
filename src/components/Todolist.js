import { useState } from 'react';
import Todo from './Todo'
import TodoForm from './TodoForm'

function Todolist() {
    const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
    localStorage.setItem('todos', JSON.stringify([...todos]))

    const addTask = (todo) => {
        setTodos([...todos, {
            id: Math.random().toString(36).substr(2, 9),
            todo: todo,
            complete: false,
        }
        ])
    }
    const filterComplete = (sort) => {
        sort ? setTodos([
            ...todos.filter((e) => e.complete === false),
            ...todos.filter((e) => e.complete === true),
        ]) :
            setTodos([
                ...todos.filter((e) => e.complete === true),
                ...todos.filter((e) => e.complete === false),
            ])
    }
    const removeTask = (id) => {
        setTodos([
            ...todos.filter((e) => e.id !== id)
        ])
    }
    const changeComplete = (id) => {
        setTodos([
            ...todos.map((e) => e.id === id ? { ...e, complete: !e.complete } : { ...e })
        ])
    }
    return (
        <div>
            <TodoForm addTask={addTask} filterComplete={filterComplete} />
            <div className='todos'>
                {todos.map((todo) =>
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTask={removeTask}
                        changeComplete={changeComplete}
                    />)}
            </div>
        </div>
    )
}

export default Todolist