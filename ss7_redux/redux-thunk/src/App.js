import './App.css';
import React from "react";
import {Routes,Route} from "react-router-dom"
import {ListPost} from "./componets/ListPost";
import {CreatePost} from "./componets/CreatePost";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ListPost/>}/>
                <Route path="/create" element={<CreatePost/>}/>
            </Routes>
        </>
    );
}

export default App;
