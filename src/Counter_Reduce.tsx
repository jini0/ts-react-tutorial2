// 7.27 - 어제 useState로 Counter만들어서 상태관리한 걸 useReduce로 만들기!!
import React, { useReducer } from 'react';

// * 액션타입과 리듀서함수 생성
// 액션을 | 로 연달아서 쭉 나열
// Counter는 액션타입이 increase와 decrease 2개뿐임!!!
// typescript로 react의 reduce할 때, 차이점 -- 액션이라는 타입을 만들어서 써준다!
type Action = { type: 'INCREASE' } | { type: 'DECREASE' }

// 리듀서 함수 - 타입 정해주기
function reducer(state: number, action: Action): number {
                                //액션 객체를 받을 때 Action으로 지정해주면 -> type이 2개만 적용됨!
    switch(action.type) {
        //case에 자동적으로 INCREASE / DECREASE 두개의 타입만 뜬다!!!(자동완성) --> 다른 타입을 작성할 수 없음(타입을 미리 지정해줘서) -> 오타날 일 없을거임 
        case 'INCREASE':
            return state+1;
        case 'DECREASE':
            return state-1;
        default:
            throw new Error('없는 액션 타입입니다.')
    }
}

const Counter_Reduce = () => {
    const [count, dispatch] = useReducer(reducer,0);        //useReducer(리듀서함수, 초깃값)
    const onIncrease = () => dispatch({ type: 'INCREASE'})  //dispatch할 때도, 자동적으로 type이 2개만 뜬다!
    const onDecrease = () => dispatch({ type: 'DECREASE'})
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>        
        </div>
    );
};

export default Counter_Reduce;