
import React from 'react'
import './App.css';

function App() {
    const [result, setResult] = React.useState("Yes")
    function handleClick() {
        setResult("No")
    }
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick={handleClick} className="state--value">
                <h1>{result}</h1>
            </div>
        </div>
);
}

export default App;
