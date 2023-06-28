import './App.css';
import React from "react";
import {Facilities} from "./components/Facilities";
import {Route, Routes} from "react-router";
import {CreateFacilities} from "./components/CreateFacilities";
import {Customer} from "./components/Customer";
import {CreateCustomer} from "./components/CreateCustomer";
import {Contract} from "./components/Contract";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Facilities/>}/>
                <Route path="/create" element={<CreateFacilities/>}/>
                <Route path="/customer" element={<Customer/>}/>
                <Route path="/create-customer" element={<CreateCustomer/>}/>
                <Route path="/contract" element={<Contract/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
