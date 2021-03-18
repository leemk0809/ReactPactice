import { useState} from 'react';

function Content(){

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
  
    /*
    class BoardInfo extends Component{
      render(){
        return(
          <div className="list"> 
            <h3> { title }
              <span onClick={ ()=>{ goodChange(good + 1) }}>👍</span> { good }
            </h3>
            <p>2月17日発行</p>
            <hr/>
          </div>
        )
      }
    }*/
  
    return(
      <>
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
      </>
    )
  }

  export default Content;