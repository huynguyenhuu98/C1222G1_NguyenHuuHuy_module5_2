import React, {useEffect, useState} from "react";
import * as serviceContract from "../../service/ServiceContract";
import {NavLink} from "react-router-dom";

export function Contract() {
    const [contracts,setContract] = useState([])
    const [idDelete,setIdDelete] = useState()
    const [nameDelete,setNameDelete] = useState("")
    const findContract = async ()=>{
        const result = await serviceContract.findAll()
        setContract(result)
    }
    const propsDelete = async (id,name)=>{
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id) =>{
        await serviceContract.remove(id)
        findContract()
    }
    useEffect(()=>{
        findContract()
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
                    DANH SÁCH HỢP ĐỒNG</h2>
                <div style={{height: '102px'}}></div>
            </div>
            <NavLink to="/create-contract" className="bi bi-cart4 text-decoration-none"> Thêm hợp đồng mới
            </NavLink>
            <table className="table table-striped table-inverse table-responsive me-2">
                <thead className="thead-inverse">
                <tr>
                    <th>Số hợp đồng</th>
                    <th>Tên khách hàng</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số tiền cọc trước</th>
                    <th>Tổng số tiền thanh toán</th>
                </tr>
                </thead>
                <tbody>
                {
                    contracts.map((contract,index)=>(
                        <tr key={index}>
                            <td>{contract.id_contract}</td>
                            <td>{contract.name}</td>
                            <td>{contract.start}</td>
                            <td>{contract.end}</td>
                            <td>{contract.deposit}</td>
                            <td>{contract.total}</td>
                            <td><NavLink to="/update_customer" className="text-decoration-none btn btn-primary">Sửa
                            </NavLink></td>
                            <td>
                                <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" onClick={()=> propsDelete(contract.id,contract.name)}>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Xoá hợp đồng </h1>
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