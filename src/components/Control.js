function Control(props){
    console.log("Control render");
    return(
        <>
           <div className="control">
                <ul>
                <li><a href="/create" onClick={function(e){
                    e.preventDefault();
                    props.onChangeMode('create');
                }}>文の作成</a></li>
                <li><a href="/update" onClick={function(e){
                    e.preventDefault();
                    props.onChangeMode('update');
                }}>文の修正</a></li>
                <li><input type="button" value="文の削除" onClick={function(e){
                    e.preventDefault();
                    props.onChangeMode('delete');
                }}/></li>
                </ul>
            </div>
        </>
    )
}

export default Control;