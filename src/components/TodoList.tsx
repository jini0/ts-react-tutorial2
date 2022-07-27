// (7.27) 선생님이랑 todolist 만들기 (메모장 참고)
import React from 'react';
import { Todo } from '../App4';

type TodoProps = {
    todos: Todo[];
    onDelete(id:number): void;
}
const TodoList = ({todos, onDelete} : TodoProps) => {
    return (
        <div>
            <ul>
                {todos.map(todo=><li key={todo.id}><span>{todo.text}</span><button onClick={()=>onDelete(todo.id)}>삭제</button></li>)}
                {/* <li><span>할일1</span><button>삭제</button></li>
                <li><span>할일2</span><button>삭제</button></li> */}
            </ul>
        </div>
    );
};

export default TodoList;