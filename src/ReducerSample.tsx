// 7.27
import React,{ useReducer } from 'react';

// 타입 만들어줌
type Color = 'red' | 'orange' | 'green'
type State = {
    count: number;
    text: string;
    color: Color;       //color는 위에 만들어준 Color type으로 해주겠다!('red' | 'orange' | 'green' 이거만 사용가능)
    isGood: boolean;
}
//액션 타입 지정
//액션타입을 지정해줬기 때문에, SET_COUNT에서는 count를 꼭 숫자타입으로 같이 넣어줘야하고 / SET_TEXT는 text를 꼭 넣어줘야하고~~~  --> 안넣어주면 빨강색 error 뜸
//----> 개발시 실수를 줄일 수 있다!!!!
type Action = {type: 'SET_COUNT'; count: number}
| {type: 'SET_TEXT'; text: string}
| {type: 'SET_COLOR'; color: Color}
| {type: 'TOGGLE_GOOD'}

//reducer함수
function reducer(state: State, action: Action) : State {
    switch(action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count         //count가 자동으로 뜨고 count위에 마우스를 올려보면 count: number라고 타입도 뜬다!
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            }
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood       //state의 isGood을 반대로 해주겠다~! --> ! 사용(not)
            }
        default:
            throw new Error('액션이 없어요')
    }
}

const ReducerSample = () => {
    const [state, dispatch] = useReducer(reducer,{          //초기값 자리에는 State를 넣어주는데, 위에 State가 객체니까 여기도 객체로 넣어줌!!!
        count: 0,
        text: 'Hello',
        color: 'red',
        isGood: true
    });
    
    //dispatch할 함수 만들어주기
    const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 })
    const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' })
    const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange'})
    const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' })
    return (
        <div>
            <p>
                <code>count : </code> {state.count}
            </p>
            <p>
                <code>text : </code> {state.text}
            </p>
            <p>
                <code>color : </code> {state.color}
            </p>
            <p>
                <code>isGood : </code> {state.isGood ? 'true' : 'false'}
            </p>
            <div>
                <button onClick={setCount}>setcount</button>
                <button onClick={setText}>settext</button>
                <button onClick={setColor}>setcolor</button>
                <button onClick={toggleGood}>togglegood</button>
            </div>
        </div>
    );
};

export default ReducerSample;