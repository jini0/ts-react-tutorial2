// 🧡(7.28) 선생님이랑 todolist 만들기 
//어제 선생님이랑 todo했던거 컨텍스트로 해주기!!!🧡
import React, { Dispatch, createContext, useReducer, useContext } from 'react';
// import InsertTodo from './components/InsertTodo';
// import TodoList from './components/TodoList';

//* 상태관리할 데이터
//1. input의 값
//2. 할 일 목록
//배열의 type을 정해주기 위해 Todo를 만들어준다!!
//export 를 해줘서 내보내주고!! (TodoList.tsx여기서 import해서 쓰기위해!)
export type Todo = {            //Todo 타입 내보내기!! --> TodoList.tsx
    id: number;
    text: string;
    isDone: boolean;
}
type State = {
    inputText: string;
    todos: Todo [];        //배열안에 있는건 object객체! --> todos 배열 타입이 Todo의 배열이다!
    //✨todos는 배열이라서 배열도 따로 type을 만들어줘야한다!!!✨
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


//🧡dispatch type 만들기
type TypeDispatch = Dispatch<Action>;

//🧡Context만들기
const todoStateContext = createContext<State | null>(null);
const todoDispatchContext = createContext<TypeDispatch | null>(null);

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
//🧡dotoStateContext state를 지정
//🧡dotoDispatchContext dispathc를 지정
export function TodoContext({children}: {children:React.ReactNode}){
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
    return (
        <todoStateContext.Provider value={state}>
            <todoDispatchContext.Provider value={dispatch}>
                { children }
            </todoDispatchContext.Provider>
        </todoStateContext.Provider>
    )
}

//🧡state와 dispatch를 쉽게 사용하기 위한 커스텀 hooks
export function useTodoState(){
    //state 만들어주기
    const state = useContext(todoStateContext);
    //에러처리
    if (!state) throw new Error("유효하지 않음")
    return state;   //state만 그냥 너는 받아 써!
}
export function useTodoDispatch(){
    //state 만들어주기
    const dispatch = useContext(todoDispatchContext);
    //에러처리
    if (!dispatch) throw new Error("유효하지 않음")
    return dispatch;   //dispatch만 그냥 너는 받아 써!
}