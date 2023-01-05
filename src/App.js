
import React from 'react'
import './App.css';

function App() {
  const [result, func] = React.useState("Yes")
    console.log(result)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
  );
}

export default App;
