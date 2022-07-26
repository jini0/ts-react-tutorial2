// (7.26) --> 💙typescript형태로 만듬! --> 그래서 파일들 확장자가 .tsx임!💙
//npx create-react-app ts-react-tutorial2 --template typescript			
//react를 만들 때, --template typescript를 지정해주면 typescript가 적용된 리액트를 만들어준다! (예전에는 --typescript만 해주면 됐는데 지금 버전에서는 --template typescript를 넣어줘야함!)
import React from 'react';
import './App.css';
import Counter from './Counter';
import MyForm from './MyForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <MyForm />
    </div>
  );
}

export default App;
