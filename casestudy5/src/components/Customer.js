import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import * as serviceCustomer from "../service/ServiceCustomer"

export function Customer() {
    const [customers,setCustomer] = useState([])
    const [idDelete,setIdDelete] = useState()
    const [nameDelete,setNameDelete] = useState("")
    const findCustomer = async ()=>{
        const result = await serviceCustomer.findAll()
        setCustomer(result)
    }
    const propsDelete = async (id,name)=>{
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id) =>{
        await serviceCustomer.remove(id)
        findCustomer()
    }
    useEffect(()=>{
        findCustomer()
    },[])
    return (

        <>
            <div className='vc_custom '
                 style={{
                     position: 'relative',
                     left: '0px',
                     boxSizing: 'border-box',
                     paddingLeft: '0px',
                     paddingRight: '0px',
                     marginBottom: '2rem',
                     marginTop:'1rem'
                 }}>
                <div style={{height: '90px'}}></div>
                <h2 style={{
                    marginTop: '9rem',
                    fontSize: '40px',
                    color: '#ffffff',
                    textAlign: 'center',
                    fontWeight: '700',
                    fontStyle: 'normal'
                }}>
                    DANH SÁCH KHÁCH HÀNG</h2>
                <div style={{height: '102px'}}></div>
            </div>
            {/*<button type="button" className="btn btn-success"*/}
            {/*        style={{marginBottom: "2%", marginLeft: "8%", backgroundColor: "#a5eee6"}}>*/}
            {/*    <NavLink to="/update_customer" className="text-decoration-none btn btn-primary">Chỉnh sửa khách hàng*/}
            {/*    </NavLink>*/}
            {/*</button>*/}
            <table className="table table-striped table-inverse table-responsive" style={{marginLeft: '1rem'}}>
                <thead className="thead-inverse">
                <tr>
                    <th>Stt</th>
                    <th>Tên khách hàng</th>
                    <th>Năm sinh</th>
                    <th>Sđt</th>
                    <th>Địa chỉ</th>
                    <th>E-mail</th>
                </tr>
                </thead>
                <tbody>
                {
                    customers.map((customer,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{customer.name}</td>
                            <td>{customer.birth}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.address}</td>
                            <td>{customer.email}</td>
                            <td><NavLink to="/update_customer" className="text-decoration-none btn btn-primary">Sửa
                            </NavLink></td>
                            <td>
                                <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" onClick={()=> propsDelete(customer.id,customer.name)}>
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xoá khách hàng </h1>
                        </div>
                        <div className="modal-body">
                            Bạn có muốn xoá <span style={{color:'red'}}>{nameDelete}</span> ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng </button>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"
                            onClick={()=>handleDelete(idDelete)} >Xoá </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}