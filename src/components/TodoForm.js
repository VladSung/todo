import { useState } from 'react'
function TodoForm({ addTask, filterComplete }) {
    const [sort, setSort] = useState(true)
    const [task, setTask] = useState('')
    return (
        <div className='form'>
            <div>
                <input onChange={(e) => setTask(e.target.value)}></input>
                <button onClick={(e) => {
                    e.preventDefault()
                    task && addTask(task) //добавить таску если в task что-то есть

                }}>Добавить</button>
            </div>
            <div>
                <span>выполненные </span><button onClick={() => {
                    filterComplete(sort)
                    setSort(!sort)
                    console.log(sort);
                }}>{sort ? '↑' : '↓'}</button>
            </div>
        </div>
    )
}
export default TodoForm