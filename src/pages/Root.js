import React from "react"
import FormClass from "../components/FormClass"
import './Root.css';

const Root = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Learn React</h1>
            </header>
            <div>
                <p> "npx create-react-app nameApp"</p>
            </div>
            <FormClass/>
        </div>
    );
}

export default Root;
