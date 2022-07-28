// 🧡(7.28) 선생님이랑 todolist 만들기 -- 컨택스트 이용!🧡
import React from 'react';
import InsertTodo from './components/InsertTodo';
import TodoList from './components/TodoList';
import { useTodoDispatch, useTodoState } from './todosContext';


const App5 = () => {
    const state = useTodoState();
    const dispatch = useTodoDispatch();
    const { inputText, todos } = state;

    const onChange = (text: string)=> dispatch({type:'INPUT_CHANGE', inputText:text})       //(text: string) -string타입지정 해줘야함
    const onCreate = () => dispatch({type:'CREATE_TODO', todo: {        //원래는 useRef로 해줘야하는데 그냥 지금은 하나만 넣어보자!
        id:3,
        text:state.inputText,
        isDone: false
    }})
    const onDelete = (id:number) => dispatch({type:'DELETE_TODO', id:id})
    return (
        // * TodoContext를 index.tsx에 적어주자!!! -> 화면에 자꾸 안나와서!!!
        // <TodoContext>
            <div className='app4'>
                <InsertTodo inputText={inputText} onChange={onChange} onCreate={onCreate} />
                <TodoList todos={todos} onDelete={onDelete}/>
            </div>
        // </TodoContext>
    );
};

export default App5;