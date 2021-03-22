//Component
//小文字では認識が出来ません
function CreateContent(props){
    console.log("CreateContent render");
  
    return(
      //divを使わなくreturnの奥へ結べます。
      <>
        <article　className="detailContent">
          <h2>作成</h2>
          <form action="/create_process" method="post" onSubmit={function(e){
            e.preventDefault();
            props.onSubmit(e.target[0].value, e.target[1].value);
          }}>
            <p><input type="text" name="title" placeholder="タイトル"/></p>
            <p>
              <textarea name="desc" placeholder="内容"></textarea>  
            </p>             
            <p>
              <input type="submit" value="作成完了"></input>  
            </p>   
          </form>
        </article>
      </>
    )
  }

  export default CreateContent;