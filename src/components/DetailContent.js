//Component
//小文字では認識が出来ません
function DetailContent(props){
    var title = props.title;
    var desc = props.desc;
    var reg_dt = props.reg_dt;
    console.log("DetailContent render");
  
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

  export default DetailContent;