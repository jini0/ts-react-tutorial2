// 7.27 - typescript - react에서 props로 보내기💛
import React from 'react';
// import Greetings from './components/Greetings';
// import UserList from './components/UserList';
// 7.28 -ContextApI
import ReducerSample2 from './ReducerSample2';
import { SampleProvider } from './SampleContext';

const App2 = () => {
    return (
        <div>
            {/* <Greetings name="Green" mark="hihi" /> */}
            {/* <UserList /> */}

            {/* 7.28 */}
            {/* <SampleProvider>을 index.tsx에 넣어줘도 된다! -->index에 써주려면, <App2/>를 감싸야함!  ex> <SampleProvider><App2/></SampleProvider> */}
            {/* <ReducerSample2/> : props로 얘가 children이 됨 */}
            <SampleProvider>
                <ReducerSample2 />
            </SampleProvider>
        </div>
    );
};

export default App2;