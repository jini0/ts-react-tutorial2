// 선생님자료 들고오기!! 
// App1.tsx에!
//https://blog.naver.com/pink_candy02/222832260016
import React, { createContext, Dispatch, useContext, useReducer } from "react";

export type Todo = {
    id: number;
    text: string;
    isDone: boolean;
}
type State = {
    inputText: string;
    todos: Todo[]
}
//액션
//input값이 변경될때 inputText 변경 - INPUT_CHANGE
//등록버튼 누르면 할일추가 - CREATE_TODO
//삭제버튼 누르면 할일삭제 - DELETE_TODO
//할일항목 클릭하면 isDone값을 반전 - DONE_TODO
type Action = { type:'INPUT_CHANGE'; inputText: string}
| { type:'CREATE_TODO'; todo: Todo}
| { type:'DELETE_TODO'; id: number}
| { type:'DONE_TODO'; id: number}

type TypeDispatch = Dispatch<Action>

//Context만들기
const todoStateContext = createContext<State|null>(null);
const todoDispatchContext = createContext<TypeDispatch|null>(null)

function reducer(state:State, action: Action) : State { 
    switch(action.type){
        case 'INPUT_CHANGE':
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
                ],
                inputText: ""
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo=> todo.id !== action.id)
            }
        case 'DONE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo=> todo.id === action.id 
                    ? {...todo, isDone: !todo.isDone } : todo)
            }
        default:
            throw new Error("액션이 없어요")
    }
}
//dotoStateContext state를 지정
//dotoDispatchContext dispatch를 지정
export function TodoContext1({children}: { children: React.ReactNode}){
  const [state, dispatch]  = useReducer(reducer,{
        inputText: "",
        todos:[{
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

//state와 dispatch를 쉽게사용하기위한 커스텀 hooks
export function useTodoState(){
    const state = useContext(todoStateContext);
    if (!state) throw new Error("유효하지 않음")
    return state;
}
export function useTodoDispatch(){
    const dispatch = useContext(todoDispatchContext);
    if (!dispatch) throw new Error("유효하지 않음")
    return dispatch;
}
