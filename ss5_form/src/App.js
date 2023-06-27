import './App.css';
import {Route, Routes} from "react-router";
import React from "react";
import {ListPost} from "./components/ListPost";
import {CreatePost} from "./components/CreatePost";
import {UpdatePost} from "./components/UpdatePost";
import {DetailPost} from "./components/DetailPost";

function App() {
  return (
      <>
        <Routes>
          <Route path={'/'} element={<ListPost/>}/>
          <Route path={'/create'} element={<CreatePost/>}/>
          <Route path={'/edit/:id'} element={<UpdatePost/>}/>
          <Route path={'/detail/:id'} element={<DetailPost/>}/>
        </Routes>
      </>
  );
}

export default App;
