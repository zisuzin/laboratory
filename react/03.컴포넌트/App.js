function Header(){ // 사용자정의태그는 대문자로 시작!
    return <header>
        <h1>
            <a href="#">WEB</a>
        </h1>
    </header>
}

function App() { 
    return (
        <div>
            <Header></Header>
            <Header></Header>
            <nav>
            <ul>
                <li>
                    <a href="#">HTML</a>
                </li>
                <li>
                    <a href="#">CSS</a>
                </li>
                <li>
                    <a href="#">JavaScript</a>
                </li>
            </ul>
                </nav>
                <article>
            <h2>HTML</h2>
            HTML is HyperText Markup Language
                </article>
        </div>
    )
        
}
