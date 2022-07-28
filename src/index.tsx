import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// (7.27)  App2, App4  // (7.28) App2
// import App2 from './App2';
// import App4 from './App4';
import reportWebVitals from './reportWebVitals';
// 7.28
// import App2 from './App2';
import { TodoContext } from './todosContext';
import App5 from './App5';
// import { TodoContext1 } from './Todo/todosContext1';
// import App1 from './App1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App4 /> */}
    {/* <App2 /> */}

    {/* 7.28 */}
    <TodoContext>
      <App5 />
    </TodoContext>
    {/* 선생님자료 */}
    {/* <TodoContext1>
      <App1 />
    </TodoContext1> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
