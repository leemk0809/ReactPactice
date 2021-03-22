import './App.css';
import Nav from "./components/Nav";
import Control from "./components/Control";
import Content from "./components/Content";
import DetailContent from "./components/DetailContent";
import CreateContent from './components/CreateContent';
import { useState } from 'react';

function App() {
  console.log("App render");
  const [nav, navInput] = useState({
    title:'ブログ',
    sub:'.mk'
  })
  const [contents, contentsInput] = useState([
    {id:1, title:'男性のコートおすすめ！', desc:'男性のコートおすすめ！', reg_dt : new Date()},
    {id:2, title:'女性のコートおすすめ', desc:'女性のコートおすすめ', reg_dt : new Date()},
    {id:3, title:'新宿の美味しい店のおすすめ！', desc:'新宿の美味しい店のおすすめ！', reg_dt : new Date()}
  ])
  //UIに影響がないValueなのでsteateを使いません。
  let max_content_id = 3;
  const [welcome, welcomeInput] = useState({
    title : 'Welcome!', desc : 'Hello, welcome my Blog!', reg_dt : new Date()
  })
  const [mode, modeInput] = useState('create')
  const [selected_content_id, scidInput] = useState(2);

  var _title, _desc, _reg_dt, _article = null;
  if(mode === 'welcome'){
    _title = welcome.title;
    _desc = welcome.desc;
    _reg_dt = welcome.reg_dt.toLocaleTimeString();
    _article = <DetailContent title={_title} desc={_desc} reg_dt={_reg_dt}/>
  } else if(mode === 'read'){
    var i = 0;
    while(i < contents.length){
      var data = contents[i];
      if(data.id === selected_content_id){
        _title = contents[i].title;
        _desc = contents[i].desc;  
        _reg_dt = contents[i].reg_dt.toLocaleTimeString();
        break;
      }
      i = i + 1;
    }
    _article = <DetailContent title={_title} desc={_desc} reg_dt={_reg_dt}/>
  } else if(mode === 'create'){
    _article = <CreateContent onSubmit={function(_title, _desc){
      max_content_id = max_content_id + 1 ;
      const _reg_dt = new Date();
      var _contents = {id:max_content_id, title:_title, desc:_desc, 
        reg_dt:_reg_dt};
      contentsInput(contents.concat(_contents));
      console.log(_title, _desc);
    }}/>
  }

  // function updateNav(){    
  //   var newNav = {title:nav.title,sub:nav.sub};
  //   newNav.title = 'aaa';
  //   navInput(newNav);
  // }
  return (
    <div className="App">
      {/*<button onClick={updateNav}>updateNav</button>*/}
      <Nav title={nav.title} sub={nav.sub} onChangePage={function(){
        modeInput('welcome');
      }}/>
      {/* <header className="black-nav">
        <h3><a href="/" onClick={function(e){
          console.log(e);
          e.preventDefault();
          modeInput('welcome');
        }}>{nav.title}</a></h3>
        <h6>{nav.sub}</h6>
      </header> */}
      <Content data={contents} dataLength={contents.length} onChangePage={function(id){
        modeInput('read');
        scidInput(Number(id));
      }}/>
      <Control onChangeMode={function(mode){
        modeInput(mode);
      }}></Control>      
      {_article}
    </div>
  );
}

export default App;
