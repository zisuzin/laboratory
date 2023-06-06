// 배너 컴포넌트 - Ban.js
import "./css/ban.css"
import ban_data from "./data/banner";
import $ from "jquery";

// 반복리스트 코드 생성용 컴포넌트 
function MakeList(props){ // rec - 개별레코드값(객체형식)
    return (
        <li data-seq={props.idx}>
        <img className="banimg" src={props.rec['src']} alt="배너"/>
        <section className="bantit">
            <h3>{props.rec['tit1']}</h3>
            <h2>{props.rec['tit2']}</h2>
            <p>{props.rec['cont'].split('^')[0]}</p>
            <p>{props.rec['cont'].split('^')[1]}</p>
            <button>{props.rec['btn']}</button>
        </section>
    </li>
    )
}

// 배너출력용 컴포넌트 
function Ban(props){ // props.cat은 배너데이터 구분속성명
    const sel_data = ban_data[props.cat];
    return (
        <div className="banner">
            <ul className="slider">
                {
                    sel_data.map((x,i) => <MakeList rec={x} idx={i} key={i}/>)
                }
            </ul>
        </div>
    )
}

export default Ban;