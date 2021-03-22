import { useState} from 'react';

function Content(props){
  console.log("Content render");
  //ES6 destructuring 文法
  let [title,titleChange] = useState(['男性のコートおすすめ！','女性のコートおすすめ！','新宿の美味しい店のおすすめ！']);
  let [good,goodChange] = useState(0);
  var lists = [];
  var data = props.data;
  var dataLength = props.dataLength;

  function updateTitle(){
      //リエットの大原則＝＞immutable data(直接修正はダメ。)
      // deep Copyが要ります。[...title]
      var newTitle = [...title];
      newTitle[0] = '女性のコートおすすめ！';
      titleChange(newTitle);
  }

  var i = 0;
  while(i < dataLength){
    lists.push(
      <div className="list" key={data[i].id}>
        <h3>
          <a href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              props.onChangePage(e.target.dataset.id);
            }}>{ data[i].title }
          </a> 
          <span onClick={ ()=>{ goodChange(good + 1) }}>👍</span> { good }
        </h3>
        <p>{data[i].desc}</p>
        <p>{data[i].reg_dt.toLocaleTimeString()}</p>
        <hr/>
      </div>
    );
    i = i + 1;
  }

  return(
    <>
      <button onClick={updateTitle}>button</button>
      {lists}
    </>
  )
}

  export default Content;