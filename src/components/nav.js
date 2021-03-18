function Nav(props){
    return(
        <>
            <header className="black-nav">
                <h3>{props.title}</h3>
                <h6>{props.sub}</h6>
            </header>
        </>
    )
}

export default Nav;