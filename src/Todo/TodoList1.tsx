// 선생님자료 들고오기!! 
// App1.tsx에!
// https://blog.naver.com/pink_candy02/222832260016
import React from 'react';
import { Todo } from './todosContext1';
import './TodoList1Css.css';

type TodoProps = {
    todos: Todo[];
    onDelete(id:number):void;
    onToggle(id:number):void;
}
const TodoList1 = ({todos, onDelete, onToggle} : TodoProps) => {
    return (
        <div>
            <ul>
                {todos.map(todo=><li key={todo.id} className={todo.isDone? "active" : ""}><span onClick={()=>onToggle(todo.id)}>{todo.text}</span><button onClick={()=>onDelete(todo.id)}>삭제</button></li>)}
            </ul>
        </div>
    );
};

export default TodoList1;