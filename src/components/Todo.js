import styled from 'styled-components'

function Todo({ todo: { id, todo, complete }, removeTask, changeComplete }) {
    const Div = styled.div`
    box-sizing: border-box;
    align-items: center;
    span{
        width: 100%;
        text-align: start;
    }
    span.complete{
        text-decoration: line-through;
    }
    button{
        cursor: pointer;
        line-height: 1;
        padding: 10px;
        font-size: 18px;
        background: none;
        border: 0;
        color: #ffff;
    }
    button:hover{
        color: red;
    }
    `
    return (
        <Div className={complete ? 'complete' : ''}>
            <span className={complete ? 'complete' : ''}
                onClick={() => changeComplete(id)}
            >{todo}</span>
            <button
                onClick={() => removeTask(id)}
            >X</button>
        </Div>
    )
}
export default Todo
