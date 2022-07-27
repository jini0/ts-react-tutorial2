// (7.27) 선생님이랑 todolist 만들기 (메모장 참고)
// https://blog.naver.com/pink_candy02/222830999376 선생님 블로그 참고하기!
// 1. app 
// 2. component 2개 만들거임
// -InsertTodo
// -TodoList
import React, { useReducer } from 'react';
import InsertTodo from './components/InsertTodo';
import TodoList from './components/TodoList';

//* 상태관리할 데이터
//1. input의 값
//2. 할 일 목록
//export 를 해줘서 내보내주고!! 
export type Todo = {            //Todo 타입 내보내기!! --> TodoList.tsx
    id: number;
    text: string;
    isDone: boolean;
}
type State = {
    inputText: string;
    todos: Todo [];        //배열안에 있는건 object객체! --> todos 배열 타입이 Todo의 배열이다!
}

//* 액션 타입지정
//input값이 변경될 때 inputText를 업데이트할거임(변경) - INPUT_CHANGE
//등록버튼 누르면 할 일 추가    - CREATE_TODO
//삭제버튼 누르면 할 일 삭제    - DELETE_TODO
//할 일 항목 클릭하면 isDone값을 반전   - DONE_TODO
type Action = { type: 'INPUT_CHANGE'; inputText: string }
| { type: 'CREATE_TODO'; todo: Todo }       //추가하기 위한 데이터니까 todo가 필요함 ->이 todo의 타입은 Todo
| { type: 'DELETE_TODO'; id: number }
| { type: 'DONE_TODO'; id: number }

//리듀서 함수
function reducer(state: State, action: Action) : State {
                                                //리턴은 State 타입으로
    switch(action.type){
        case 'INPUT_CHANGE':
            console.log(state.inputText);           //잘 되는지 찍어보기!
            return {
                ...state,
                inputText: action.inputText
            }
        case 'CREATE_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.todo
                ]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo=> todo.id !== action.id)     //todo의 id와 action이 들고온 id가 다른애만 가져옴
            }
        case 'DONE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo=> todo.id === action.id 
                    ? {...todo, isDone: !todo.isDone } : todo )
            }
        default:
            throw new Error("액션이 없어요")
    }
}
const App4 = () => {
    const [state, dispatch] = useReducer(reducer, {
        inputText: "",
        todos: [{
            id:1,
            text: "타입스크립트 공부",
            isDone: false
        },{
            id:2,
            text: "리덕스 공부",
            isDone: false
        }]
    })
    const { inputText, todos } = state;
    const onChange = (text: string)=> dispatch({type:'INPUT_CHANGE', inputText:text})       //(text: string) -string타입지정 해줘야함
    const onCreate = () => dispatch({type:'CREATE_TODO', todo: {        //원래는 useRef로 해줘야하는데 그냥 지금은 하나만 넣어보자!
        id:3,
        text:state.inputText,
        isDone: false
    }})
    const onDelete = (id:number) => dispatch({type:'DELETE_TODO', id:id})
    return (
        <div>
            <InsertTodo inputText={inputText} onChange={onChange} onCreate={onCreate} />
            <TodoList todos={todos} onDelete={onDelete}/>
        </div>
    );
};

export default App4;