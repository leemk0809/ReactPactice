import './App.css';
import Nav from "./components/nav";
import Content from "./components/Content";
import { useState } from 'react';

function App() {
  
  const [nav, navInput] = useState({
    title:'ブログ',
    sub:'.mk'
  })

  function updateNav(){    
    var newNav = {title:nav.title,sub:nav.sub};
    newNav.title = 'aaa';
    navInput(newNav);
  }

  const [contents, contentsInput] = useState([
    {id:1, title:'男性のコートおすすめ！', desc:'男性のコートおすすめ！', reg_dt : new Date()},
    {id:2, title:'女性のコートおすすめ', desc:'女性のコートおすすめ', reg_dt : new Date()},
    {id:3, title:'新宿の美味しい店のおすすめ！', desc:'新宿の美味しい店のおすすめ！', reg_dt : new Date()}
  ])

  const [welcome, welcomeInput] = useState({
    title : 'Welcome!', desc : 'Hello, welcome my Blog!', reg_dt : new Date()
  })

  const [mode, modeInput] = useState('welcome')

  var _title, _desc, _reg_dt = null;
  if(mode === 'welcome'){
    _title = welcome.title;
    _desc = welcome.desc;
    _reg_dt = welcome.reg_dt.toLocaleTimeString();
  } else if(mode === 'read'){
    _title = contents[0].title;
    _desc = contents[0].desc;  
    _reg_dt = contents[0].reg_dt.toLocaleTimeString();
  }

  return (
    <div className="App">
      <button onClick={updateNav}>aaaa</button>
      <Nav title={nav.title} sub={nav.sub}/>
      <Content data={contents} dataLength={contents.length} />
      <DetailContent title={_title} desc={_desc} reg_dt={_reg_dt}/>
    </div>
  );
}

//Component
//小文字では認識が出来ません
function DetailContent(props){
  var title = props.title;
  var desc = props.desc;
  var reg_dt = props.reg_dt;

  return(
    //divを使わなくreturnの奥へ結べます。
    <>
    <div className="detailContent">
      <h2>{title}</h2>
      <p>{reg_dt}</p>
      <p>{desc}</p>
    </div>
    </>
  )
}

export default App;
