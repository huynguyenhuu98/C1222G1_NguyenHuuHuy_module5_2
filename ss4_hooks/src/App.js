import './App.css';
import React from "react";
import {Greeting} from "./components/ClassComponent";
import {GreetingHook} from "./components/FunctionComponent";

function App() {
    return (
        <>
            {/*<Greeting/>*/}
            <GreetingHook/>
        </>
    );
}

export default App;
