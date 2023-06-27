
import './App.css';
import {Route, Routes} from "react-router";
import React from "react";
import {ListPost} from "./components/ListPost";
import {CreatePost} from "./components/CreatePost";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<ListPost/>}/>
                <Route path={'/create'} element={<CreatePost/>}/>
            </Routes>
        </>
    );
}

export default App;
