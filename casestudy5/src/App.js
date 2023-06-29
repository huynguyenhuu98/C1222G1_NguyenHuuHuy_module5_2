import './App.css';
import React from "react";
import {Facilities} from "./components/Facilities/Facilities";
import {Route, Routes} from "react-router";
import {CreateFacilities} from "./components/Facilities/CreateFacilities";
import {Customer} from "./components/Customer/Customer";
import {CreateCustomer} from "./components/Customer/CreateCustomer";
import {Contract} from "./components/Contract/Contract";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {CreateContract} from "./components/Contract/CreateContract";
import {UpdateCustomer} from "./components/Customer/UpdateCustomer";
import {UpdateFacilities} from "./components/Facilities/UpdateFacilities";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Facilities/>}/>
                <Route path="/create" element={<CreateFacilities/>}/>
                <Route path="/update-facilities/:id" element={<UpdateFacilities/>}/>
                <Route path="/customer" element={<Customer/>}/>
                <Route path="/create-customer" element={<CreateCustomer/>}/>
                <Route path="/update-customer/:id" element={<UpdateCustomer/>}/>
                <Route path="/contract" element={<Contract/>}/>
                <Route path="/create-contract" element={<CreateContract/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
