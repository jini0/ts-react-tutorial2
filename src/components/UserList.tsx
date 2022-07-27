// 7.27 props 넘겨주는거 알려주려고 선생님이 해주심 💛②App2.tsx💛
import React,{ useState } from 'react';
import User from './User';

//배열안에 들어갈 객체 타입을 지정해줄거임
//자식 컴포넌트로 넘겨주기위해 export --> 내보내기해주면 내가 불러서 쓸 수 있음!
export type UserType = {
    id: number;
    name: string;
    age: number;
    position: string;
}

const UserList = () => {
    // 제네릭을 이용해서 <UserType[]>  --> UserType이 [배열]이다 지정해주기
    const [ userList, setUserList ] = useState<UserType[]>([
        //배열로 넣어줄거임
        {
            id: 0,
            name: "김그린",
            age: 24,
            position: "front-end"
        },
        {
            id: 1,
            name: "이블루",
            age: 26,
            position: "back-end"
        }
    ])
    return (
        <div>
            {userList.map(user=><User key={user.id} user={user}></User>)}
        </div>
    );
};

export default UserList;