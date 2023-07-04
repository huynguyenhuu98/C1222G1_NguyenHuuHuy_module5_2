
import './App.css';
import {Route, Routes} from "react-router";
import React from "react";
import {CreateOrder} from "./components/CreateOrder";
import {ListOrder} from "./components/ListOrder";

function App() {
  return (
      <>
          <Routes>
              <Route path={'/'} element={<ListOrder/>}/>
              <Route path={'/create'} element={<CreateOrder/>}/>
          </Routes>
      </>
  );
}

export default App;
