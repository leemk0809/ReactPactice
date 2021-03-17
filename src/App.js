import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  //ES6 destructuring 文法
  let [title,titleChange] = useState(['男性のコートおすすめ！'],　['女性のコートおすすめ！']);
  //let [title,titleChange] = useState('女性のコートおすすめ！');

  let posts = 'title';
  return (
    <div className="App">
      <div className="black-nav">
        <div>開発ブログ</div>
      </div>
      <div className="list"> 
        <h3> { title[1] } </h3>
        <p>2月17日発行</p>
        <p>asdasdasdasdasd</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
