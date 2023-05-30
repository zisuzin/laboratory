function App(){
    return (
        <div>
            <h1>Super Converter</h1>
            <label>Minutes</label>
            <input placeholder="Minutes" type="number"/>
            <input placeholder="Hours" type="number"/>
        </div>
    )
}

const root = document.getElementById("root");
ReactDOM.render(<App/>, root);