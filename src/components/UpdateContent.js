//Component

import { useState } from "react";

//小文字では認識が出来ません
function UpdateContent(props){
    console.log("UpdateContent render");
    console.log(props.data);

    const [data, dataInput] = useState({
      id: props.data.id,
      title:props.data.title,
      desc:props.data.desc,
      reg_dt:props.data.reg_dt
    });

    // function inputFormHandler(e){
    //   //[e.target.name] => targetタッグのnameValueが入ります。
    //   dataInput({[e.target.name]:e.target.value});
    // }

    return(
      <>
        <article　className="detailContent">
          <h2>修正</h2>
          <form action="/update_process" method="post" onSubmit={function(e){
            e.preventDefault();
            //props.onSubmit(e.target[0].value, e.target[1].value);
            props.onSubmit(data.id,data.title,data.desc,data.reg_dt);
          }}>
            <input type="hidden" name="id" value={data.id}></input>
            {/* props.dataのリードオンニの解決ために使いました。 */}
            <p><input type="text" name="title" placeholder="タイトル" value={data.title}
              onChange={function(e){
                dataInput({id:data.id, title:e.target.value, desc:data.desc, reg_dt:data.reg_dt});
              }}/></p>
            <p>
              <textarea name="desc" placeholder="内容" value={data.desc} 
              onChange={function(e){
                dataInput({id:data.id, title:data.title, desc:e.target.value, reg_dt:data.reg_dt});
              }}></textarea>  
            </p>             
            <p>
              <input type="submit" value="作成完了"></input>  
            </p>   
          </form>
        </article>
      </>
    )
  }

  export default UpdateContent;