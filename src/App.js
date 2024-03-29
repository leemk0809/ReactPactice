import './App.css';
import Nav from "./components/Nav";
import Control from "./components/Control";
import Content from "./components/Content";
import DetailContent from "./components/DetailContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
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
    title : 'ようこそ!', desc : 'こんにちは, ようこそ私のブログへ！'
  })
  const [mode, modeInput] = useState('welcome')
  const [selected_content_id, scidInput] = useState(2);

  function getReadContent(){
    var i = 0;
      while(i < contents.length){
        var data = contents[i];
        if(data.id === selected_content_id){
          return data;
        }
        i = i + 1;
      }
  }

  function getContent(){
    var _title, _desc, _reg_dt, _article = null;
    var _content;
    if(mode === 'welcome'){
      _title = welcome.title;
      _desc = welcome.desc;
      _article = <DetailContent title={_title} desc={_desc} reg_dt={_reg_dt}/>
    } else if(mode === 'read'){
      _content = getReadContent();
      _article = <DetailContent title={_content.title} desc={_content.desc} reg_dt={_content.reg_dt.toLocaleDateString()}/>
    } else if(mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        max_content_id = max_content_id + 1 ;
        const _reg_dt = new Date();
        var _contents = {id:max_content_id, title:_title, desc:_desc, 
          reg_dt:_reg_dt};
        contentsInput(contents.concat(_contents));
        scidInput(max_content_id);
        modeInput('read');
        console.log(_title, _desc);
      }}/>
    } else if(mode === 'update'){
      _content = getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc, _reg_dt){
        var _contents = Array.from(contents);
        var i = 0 ;
        while(i < _contents.length){
          if(_contents[i].id === _id){
            _contents[i] = {id:_id, title:_title, desc:_desc, reg_dt:_reg_dt}
            break;
          }
          i = i + 1;
        }
        contentsInput(_contents);
        modeInput('read');
        console.log(_title, _desc);
      }}/>
    }

    return _article;
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
      {getContent()}
      <Control onChangeMode={function(mode){
        if(mode == 'delete'){
          if(window.confirm('本当ですか？')){
            var _contents = Array.from(contents);
            var i = 0;
            while(i < _contents.length){
              if(_contents[i].id === selected_content_id){
                _contents.splice(i, 1);
                break;
              }
              i = i + 1;
            }
            contentsInput(_contents);
            modeInput('mode');
          }
        } else {
          modeInput(mode);
        }
      }}></Control>
      <Content data={contents} dataLength={contents.length} onChangePage={function(id){
        modeInput('read');
        scidInput(Number(id));
      }}/>      
    </div>
  );
}

export default App;
