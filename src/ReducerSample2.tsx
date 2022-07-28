// 7.28  --> App2.tsx에 적어주기..!
//ReducerSample.tsx꺼 복사해서 수정해주기!
import React from 'react';
import { useSampleDispatch, useSampleState } from './SampleContext';

//🧡위에꺼 다 제거하고 hook함수인 useSampleState()와 useSampleDispatch()를 써주기🧡
const ReducerSample = () => {
    const state = useSampleState();
    const dispatch = useSampleDispatch();
    
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