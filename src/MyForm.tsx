// 7.26
import React,{ useState } from 'react';

const MyForm = () => {
    const [ form, setForm ] = useState({
        name: '',
        description: ''         //name값과 description값을 관리해주는 객체를 만들어주고!
    }) 
    //객체구조분해할당
    const { name, description } = form;
    //onChange 이벤트
    const onChange = (e:any) => {               //일단 e의 타입을 모르니까 any로 지정(지정안해주면 빨간줄 error생김)
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    //onSubmit 이벤트
    const handleSubmit = (e:any) => {           //일단 e의 타입을 모르니까 any로 지정
        e.preventDefault();
        //name과 description 값 초기화 시켜주기 
        setForm({
            name: '',
            description: ''
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    );
};

export default MyForm;