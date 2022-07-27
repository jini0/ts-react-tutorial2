// (7.27) 선생님이랑 todolist 만들기 (메모장 참고)
import React from 'react';

//타입지정
type InsertProps = {
    inputText: string;
    onChange(text:string): void;       //onChange는 함수인데 반환해주는 값이 없으니 void!!
    onCreate(): void;
}

const InsertTodo = ({inputText, onChange, onCreate}:InsertProps) => {
    return (
        <div>
            <input value={inputText} onChange={(e)=>onChange(e.target.value)} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default InsertTodo;