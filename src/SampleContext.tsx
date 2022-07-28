// (7.28) - 🧡ReducerSample.tsx를 컨텍스트로 변경해보기 (ContextAPI)🧡
//ReducerSample.tsx꺼 복사해오기!  
//ReducerSample2.tsx 사용하기..!!! --> App2.tsx에 적어주기..!
//props로 전달해주지 않아도 따로 떼어내어서!
import React, { createContext, Dispatch, useContext, useReducer } from 'react';

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

//🧡디스패치를 위한 타입  (Dispatch를 리액트에서 불러올 수 있음)
type SampleDispatch = Dispatch<Action>          //Dispatch의 타입을 Action type으로 제네릭설정해준거!

//🧡Context 만들기
//값을 할당하면 얘는 기본적으로 타입이 null값이 들어갈거임 --> 제네릭설정해줄 거임!<State | null> (타입지정해준거) --> 위에 만들어준 State type이거나 null을 넣어줄 거임!!!
const SampleStateContext = createContext<State | null>(null);       //추론이 되어서 제네릭설정을 안해주면 null만 들어갈거라서 State를 사용하지 못함 --> <State | null>을 해주는 거임!
const SampleDispatchContext = createContext<SampleDispatch | null>(null);



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

//🧡SampleProvider 함수 만들기 -> export 내보내기
export function SampleProvider({children}:{children:React.ReactNode}){                 //{children}: {children:React.ReactNode} 타입지정해줌!
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'Hello',
        color: 'red',
        isGood: true
    });
    return (
        <SampleStateContext.Provider value={state}>
            {/* 어디서든 state를 사용할 수 있도록! / 어디서든 dispatch를 사용할 수 있도록((props는 자식요소에만 쓸 수 있는 반면 이렇게 해주면 전역에 다 사용가능이라서))*/}
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    )
}

//🧡state와 dispatch를 쉽게 사용하기위한 커스텀hook
//hook함수를 미리 만들어서 state와 dispatch를 반환함 --> state와 dispatch를 사용하려면 이 hook함수들만 불러오면 state와 dispatch를 return받을 수 있다!!!
export function useSampleState(){                       //이 함수를 호출하면 state 상태가 return 반환됨
    const state = useContext(SampleStateContext);
    if(!state) throw new Error('찾을 수 없어')  //state가 유효하지 않을 땐 에러를 발생
    return state;
}
export function useSampleDispatch(){                    //이 함수를 호출하면 dispatch를 다 쓸 수 있음!(return dispatch)
    const dispatch = useContext(SampleDispatchContext);
    if(!dispatch) throw new Error('찾을 수 없어')  //dispatch가 유효하지 않을 땐 에러를 발생
    return dispatch;
}