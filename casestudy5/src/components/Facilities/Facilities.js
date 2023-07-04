import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import * as serviceFacilities from "../../service/ServiceFacilities"
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup"

export function Facilities() {
    const [facilities, setFacilities] = useState([]);
    const [typeFacilities, setTypeFacilities] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState("");
    const findFacilities = async () => {
        const value = await serviceFacilities.findAll();
        setFacilities(value);
    }
    const findTypeFacilities = async () => {
        const value = await serviceFacilities.findTypeFacilities();
        setTypeFacilities(value);
    }
    const propsDelete = async (id, name) => {
        setIdDelete(id);
        setNameDelete(name);
    }
    const handleDelete = async (id) => {
        await serviceFacilities.remove(id)
        findFacilities()
        toast('Xoá thành công')
    }
    useEffect(() => {
        findFacilities();
        findTypeFacilities();
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Tính toán số trang
    const totalPages = Math.ceil(facilities.length / itemsPerPage);

    // Lấy danh sách hiển thị cho trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = facilities.slice(indexOfFirstItem, indexOfLastItem);
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
            <>
                <div className="fixed-top">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary container-fluid">
                        <div className="container-fluid">
                            <img src="http://www.dongkhoitravel.com.vn/upload/product/furamresort-3272.png"
                                 alt=""
                                 width="120px" height="60px"/>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbarTogglerIcon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Trang
                                            chủ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Giới thiệu</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            Dịch vụ
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item"><NavLink to="/create"
                                                                                      className="text-decoration-none ">Thêm
                                                mới dịch vụ</NavLink></a></li>
                                            <li><a className="dropdown-item"><NavLink to="/customer"
                                                                                      className="text-decoration-none ">Khách
                                                hàng</NavLink></a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item"><NavLink to="/contract"
                                                                                      className="text-decoration-none ">Hợp
                                                đồng</NavLink></a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <Formik
                                    initialValues={{
                                        title: '',
                                        typeFacilities: ''
                                    }}
                                    onSubmit={(values) => {
                                        const findName = async () => {
                                            const result = await serviceFacilities.findByName(values.title, values.typeFacilities)
                                            setFacilities(result)
                                            console.log(result)
                                        }
                                        findName()
                                    }}>{
                                    <Form className="d-flex">
                                        <Field className="form-control me-1" type="text" name="title"/>
                                        <Field className="form-control me-2" style={{width: '5rem'}}
                                               component="select"
                                               name="typeFacilities">
                                            {/*<option value="0">Dịch vụ</option>*/}
                                            {
                                                typeFacilities.map((type, index) => (
                                                        <option key={index} value={type.id}>
                                                            {type.name}
                                                        </option>
                                                    )
                                                )
                                            }
                                        </Field>
                                        <button className="btn btn-outline-success" type="submit"
                                                style={{width: '10rem'}}>Tìm kiếm
                                        </button>
                                    </Form>}
                                </Formik>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="vc_custom"
                     style={{
                         position: 'relative',
                         left: '0px',
                         boxSizing: 'borderBox',
                         paddingLeft: '0px',
                         paddingRight: '0px',
                         marginBottom: '2rem'
                     }}>
                    <div style={{height: '100px'}}></div>
                    <h2 style={{
                        marginTop: '10rem',
                        fontSize: '40px',
                        color: '#ffffff',
                        textAlign: 'center',
                        fontWeight: '700',
                        fontStyle: 'normal'
                    }}>
                        PHÒNG THUÊ</h2>
                    <div style={{height: '102px'}}></div>
                </div>
                <button type="button" className="btn btn-success"
                        style={{marginBottom: "2%", marginLeft: "8%", backgroundColor: "#a5eee6"}}>
                    <NavLink to="/customer" className="text-decoration-none"> Danh sách khách hàng
                    </NavLink>
                </button>
                <button type="button" className="btn btn-success"
                        style={{marginBottom: "2%", marginLeft: "8%", backgroundColor: "#a5eee6"}}>
                    <NavLink to="/contract" className="text-decoration-none"> Danh sách hợp đồng
                    </NavLink>
                </button>
                <button type="button" className="btn btn-success"
                        style={{marginBottom: "2%", marginLeft: "8%", backgroundColor: "#a5eee6"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" color="black"
                         className="bi bi-cart4" viewBox="0 0 16 16">
                        <path
                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    <NavLink to="/create" className="bi bi-cart4 text-decoration-none"> Thêm phòng mới
                    </NavLink>
                </button>
                <div className="row" style={{marginLeft: '50px'}}>
                    {currentItems?.map((facility) => (
                            <div className="col-sm-6 col-lg-4 mb-4">
                                <div className="card" style={{width: '23rem'}}>
                                    <img width="370" height="239"
                                         src={facility.img}
                                         className="card-img-top" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">{facility.title}</h5>
                                        <p className="card-text">Loại
                                            Phòng: {typeFacilities.find(type => type.id === facility.typeFacilities)?.name} </p>
                                        <p className="card-text">Diện Tích Phòng: {facility.area} m2</p>
                                        <NavLink to={`/update-facilities/${facility.id}`}
                                                 className="text-decoration-none btn btn-outline-primary me-2">Sửa
                                        </NavLink>
                                        <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                                onClick={() => propsDelete(facility.id, facility.title)}>
                                            Xóa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                    {/*<div>*/}
                    {/*    /!* Hiển thị danh sách *!/*/}

                    {/*    <button onClick={prevPage} disabled={currentPage === 1}>*/}
                    {/*        Lùi*/}
                    {/*    </button>*/}
                    {/*    <button onClick={nextPage} disabled={currentPage === totalPages}>*/}
                    {/*        Tới*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>

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
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Xóa dịch vụ</h1>
                            </div>
                            <div className="modal-body">
                                Bạn muốn xóa <span style={{color: 'red'}}>{nameDelete}</span> ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary"
                                        data-bs-dismiss="modal">Đóng
                                </button>
                                <button type="submit" className="btn btn-outline-danger" data-bs-dismiss="modal"
                                        onClick={() => handleDelete(idDelete)}>Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <ToastContainer/>
        </>
    )
}