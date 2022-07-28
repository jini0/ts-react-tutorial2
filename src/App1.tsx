//7.27 -7.28 선생님이 하신 자료 블로그에서 들고오기!  ==> 선생님 토글도 하셔서!!!
//https://blog.naver.com/pink_candy02/222832260016
import React,{ useRef } from 'react';
import './App.css'
import { useTodoDispatch, useTodoState } from './Todo/todosContext1';
import TodoList1 from './Todo/TodoList1';
import InsertTodo1 from './Todo/InsertTodo1';

const App1 = () => {
    const idNum = useRef(2);
    const state = useTodoState();
    const dispatch = useTodoDispatch();
    const { inputText, todos } = state;
    const onChange = (text:string)=> dispatch({type:'INPUT_CHANGE', inputText:text})
    const onCreate = () => {
        idNum.current++;
        console.log(idNum.current)
        dispatch({type:'CREATE_TODO', todo: {
            id:idNum.current,
            text:state.inputText,
            isDone: false
        }})
    }
    const onToggle = (id:number) => dispatch({type:"DONE_TODO", id:id})
    const onDelete = (id:number) => dispatch({type:'DELETE_TODO', id:id})
  return( 
            <div>
                <InsertTodo1 inputText={inputText} onChange={onChange} onCreate={onCreate}/>
                <TodoList1 todos={todos} onDelete={onDelete} onToggle={onToggle}/>
            </div>
    )
};

export default App1;