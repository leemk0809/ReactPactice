import './App.css';
import Nav from "./components/nav";
import Content from "./components/Content";
import { useState } from 'react';

function App() {
  
  const [nav, navInput] = useState({
    title:'開発ブログ',
    sub:'.mk'
  })

  function updateNav(){    
    var newNav = {title:nav.title,sub:nav.sub};
    newNav.title = 'aaa';
    navInput(newNav);
  }

  return (
    <div className="App">
      <button onClick={updateNav}>aaaa</button>
      <Nav title={nav.title} sub={nav.sub}/>
      <Content/>
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
