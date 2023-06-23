import './App.css';
import React from "react";
import {Facilities} from "./components/Facilities";
import {Route, Routes} from "react-router";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Facilities/>}/>
            </Routes>

        </>
    );
}

export default App;
