// 내가 한거...
// import React, { useReducer } from 'react';
import React from 'react';

// 타입지정 - 1. 초기값
// type initialState = {
//     text: string,
//     todos: [
//         {
//             id: number,
//             todotext: string,
//             isDone: boolean
//         }
//     ],
//     todo: string
// }
// // 액션타입 지정
// type Action = {type: 'CHANGE_INPUT', text: string}
// | {type: 'CREATE_TODO', todos: any, todo: any }
// | {type: 'DELETE_TODO', todos: any }
// | {type: 'ISDONE_TODO', todos: any }

// //리듀서 함수
// function reducer(state: initialState, action: Action) : initialState {
//     switch(action.type) {
//         case 'CHANGE_INPUT':
//             return {
//                 ...state,
//                 text: action.text
//             }
//         case 'CREATE_TODO':
//             return {
//                 ...state,
//                 // todos: state.todos.concat(action.todo)
//             }
//         case 'DELETE_TODO':
//             return {
//                 ...state,
//                 todos: state.todos
//             }
//         case 'ISDONE_TODO':
//             return {
//                 ...state,
//                 todos: state.todos 
//             }
//     }
// }
const App3 = () => {
//     const [state, dispatch] = useReducer(reducer, {
//         text: "잠온당",
//         todos: [
//             {
//                 id: 0,
//                 todotext: "집에갈랭",
//                 isDone: true
//             }
//         ],
//         todo: "집에갈랭"
//     })
//     const { text, todos } = state;
//     const onChange = (e: any) => {
//         dispatch({
//             type:"CHANGE_INPUT",
//             text: e.traget.value
//         })
//     }
    return (
        <div>
            
        </div>
    );
};

export default App3;