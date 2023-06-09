// 01. 시작하기 리액트 JS
/* 
    html 태그와 JS문법을 따옴표없이 사용하는 JSX문법을 사용한다!
    JSX(Javascript XML) 문법을 쓰는 파일은 .js대신 .jsx확장자사용!
    -> return 키워드 사용은 따옴표없이 바로 소괄호롤 묶어사용
    (소괄호 생략 가능!)

    [[ 주의사항 ]]
    1. 함수를 만들 경우 반드시 대문자로 시작해야 호출됨!(정해진규칙)
    2. 홀로태그를 사용할때는 마지막에 스스로 닫기를 꼭 해줌!(/>)
    3. 함수 내부의 리턴값으로 만든 요소는 반드시 최상위요소가 하나여여함!
*/

// 생성자 함수를 만들어서 사용한다!
// 대문자로 시작하는 이름으로 사용함!
function Header(){
    return (
        <header>
            <h1>WEB</h1>
            World wide web!
        </header>
    );
}

function Nav(){
    return (
        <nav>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
            </ul>
        </nav>
    )
}

function Info(props){ /* props는 해당 컴포넌트에 전달된 속성들을 포함하는 객체 */
    {/* - 각각의 컴포넌트에 데이터를 전달하기 위한 props 속성!
        - 컴포넌트에 전달된 속성을 함수의 매개변수로 받아옴 */}
    const clickMe = () => {
        alert("clicked!!")
    }

    /* 
        이를테면 다음 예에서 props 객체는 다음과 같을 것! 
        {
            idx: "1",
            name: "코알라"
        },
        {
            idx: "2",
            name: "하마"
        },
        {...}
    */

    return (
        <footer>
            <h2>cat{props.idx}</h2>
            {props['name']} {/* 컴포넌트 내부에서 props 객체 속성에 접근하려면,
                            props.idx / props['idx'] 같이 사용하여 접근! */}
            <button onClick={clickMe}>클릭!</button>
        </footer> 
    )
}

// 코드 재활용!
function MyFirstReact(){
    return (
        <div>
            <Header/>
            <Nav/>
            <Info idx="1" name="코알라"/> {/* Info태그에 정의된 속성들을 props 객체로 전달 */}
            <Info idx="2" name="하마"/>
            <Info idx="3" name="기린"/>
            <App/>
        </div>
    );

} ////////////// MyFirstReact 함수 ////////////

// 함수형 컴포넌트는 function 키워드를 사용하여 정의됨!!
function App(){ // 첫번째 요소 - 상태변수의 현재값, 두번째 요소 - 상태값 변경 함수
    const [counter, setCounter] = React.useState(0); // useState는 리액트의 상태변경 훅!-> 초기값을 인자로 전달하면, 해당값으로 상태변수 초기화!
    // useState, useEffect, useContext 등의 훅을 사용해 상태값 변경, 부작용 처리, 컨텍스트 접근 등을 간편하게 처리 가능함!
    // console.log(React.useState)

    const onClick = () => {
        // setCounter(counter + 1); // setCounter 함수를 사용해 클릭수 업데이트!
        setCounter((current)=> current +1); // 현재 state 기반의 증가 계산을 위한 함수 활용!(안전성 보장!)
    };
    
    return (
        <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={onClick}>Click me!</button>
        </div>
    )
}

ReactDOM.render(
<MyFirstReact />,
document.querySelector("#mydiv"));

