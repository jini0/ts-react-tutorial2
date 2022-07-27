// 7.27 - App2.tsx에 import해줄거임 💛①App2.tsx💛
import React from 'react';
//타입지정
type GreetingsPrps = {
    name: string;
    mark: string;
}

//props 보내줄때 타입지정해줘야 오류가 안생김!!
const Greetings = ({ name, mark }: GreetingsPrps) => {
    return (
        <div>
            Hello,{name} {mark}
        </div>
    );
};

export default Greetings;