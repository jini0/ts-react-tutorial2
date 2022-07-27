// 7.27 💛③App2.tsx💛
import React from 'react'; 
import { UserType } from './UserList';

//타입지정 - userList의 props를 받아오기 위해 
type UserProps = {
    //부모컴포넌트에 import해온 타입을 재사용 
    user: UserType
}
const User = ({user}: UserProps) => {           //{user}: UserProps ->{user}의 타입을 지정해줌 UserProps타입으로
    const { name, age, position } = user
    return (
        <div>
            <p>이름 : {name}</p>
            <p>나이 : {age}</p>
            <p>포지션 : {position}</p>
        </div>
    );
};

export default User;