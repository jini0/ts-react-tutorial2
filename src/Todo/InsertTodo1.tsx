// 선생님자료 들고오기!! 
// App1.tsx에!
//https://blog.naver.com/pink_candy02/222832260016
import React from 'react';

type InsertProps = {
    inputText: string;
    onChange(text:string): void;
    onCreate(): void;
}
const InsertTodo1 = ({inputText, onChange, onCreate}:InsertProps) => {
    return (
        <div>
            <input value={inputText} onChange={(e)=>onChange(e.target.value)}/>
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default InsertTodo1;