import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import * as serviceCustomer from "../../service/ServiceCustomer"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Customer() {
    const [customers,setCustomer] = useState([])
    const [typeCustomer,setTypeCustomer] = useState([])
    const [idDelete,setIdDelete] = useState()
    const [nameDelete,setNameDelete] = useState("")
    const findCustomer = async ()=>{
        const result = await serviceCustomer.findAll()
        setCustomer(result)
    }
    const findTypeCustomer = async ()=>{
        const result = await serviceCustomer.findTypeCustomer()
        setTypeCustomer(result)
    }
    const propsDelete = async (id,name)=>{
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id) =>{
        await serviceCustomer.remove(id)
        findCustomer()
        toast('Xoá thành công')
    }
    useEffect(()=>{
        findCustomer()
        findTypeCustomer()
    },[])

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Tính toán số trang
    const totalPages = Math.ceil(customers.length / itemsPerPage);

    // Lấy danh sách hiển thị cho trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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
            <button className="btn btn-outline-info"><NavLink to="/create-customer" className="bi bi-cart4 text-decoration-none"> Thêm khách hàng mới
            </NavLink></button>
            <table className="table table-striped table-inverse table-responsive" style={{marginLeft: '1rem'}}>
                <thead className="thead-inverse">
                <tr>
                    <th>Stt</th>
                    <th>Tên khách hàng</th>
                    <th>Loại khách hàng</th>
                    <th>Năm sinh</th>
                    <th>Sđt</th>
                    <th>Địa chỉ</th>
                    <th>E-mail</th>
                </tr>
                </thead>
                <tbody>
                {
                    currentItems.map((customer,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{customer.name}</td>
                            {/*<td>{typeCustomer.find(type=>type.id===customer.typeCustomer)?.name}</td>*/}
                            <td>{typeCustomer.filter(value=>(value.id===customer.typeCustomer))[0]?.name}</td>
                            <td>{customer.birth}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.address}</td>
                            <td>{customer.email}</td>
                            <td><NavLink to={`/update-customer/${customer.id}`} className="text-decoration-none btn btn-outline-primary">Sửa
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
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mt-3">
                    <li className="page-item">
                        <a className="page-link" onClick={prevPage} disabled={currentPage === 1} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {/*<li className="page-item"><a className="page-link" href="#">1</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                    <li className="page-item">
                        <a className="page-link" onClick={nextPage} disabled={currentPage === totalPages} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
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
            <ToastContainer/>
        </>
    )
}