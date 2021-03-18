import React, { useState } from 'react';
import './App.css';

function App() {
  
  //ES6 destructuring 文法
  let [title,titleChange] = useState(['男性のコートおすすめ！','女性のコートおすすめ！','新宿の美味しい店のおすすめ！']);
  let [good,goodChange] = useState(0);

  function updateTitle(){
      //リエットの大原則＝＞immutable data(直接修正はダメ。)
      // deep Copyが要ります。[...title]
      var newTitle = [...title];
      newTitle[0] = '女性のコートおすすめ！';
      titleChange(newTitle);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>開発ブログ</div>
      </div>
      <button onClick={updateTitle}>button</button>
      <div className="list"> 
        <h3> { title[0] }
          <span onClick={ ()=>{ goodChange(good + 1) }}>👍</span> { good }
        </h3>
        <p>2月17日発行</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>2月18日発行</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>2月19日発行</p>
        <hr/>
      </div>
      
      <Modal/>
    </div>
  );
}

//Component
//小文字では認識が出来ません
function Modal(){
  return(
    //divを使わなくreturnの奥へ結べます。
    <>
    <div className="modal">
      <h2>タイトル</h2>
      <p>作成日</p>
      <p>内容</p>
    </div>
    </>
  )
}

export default App;
