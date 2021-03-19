function Nav(props){
    return(
        <>
            <header className="black-nav">
                <h3><a href="/">{props.title}</a></h3>
                <h6>{props.sub}</h6>
            </header>
        </>
    )
}

export default Nav;