import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Header} from "./Header";
import * as serviceFacilities from "../service/ServiceFacilities"
import {Footer} from "./Footer";

export function Facilities() {
    const [facilities, setFacilities] = useState([]);
    const [idDelete, setIdDelete] = useState("");
    const [nameDelete, setNameDelete] = useState("");
    const findFacilities = async () => {
        const value = await serviceFacilities.findAll();
        setFacilities(value);
    }
    const propsDelete = async (id, name) => {
        setIdDelete(id);
        setNameDelete(name);
    }
    const handleDelete = async (id) => {
        await serviceFacilities.remove(id)
        findFacilities()
    }
    useEffect(() => {
        findFacilities();
    },[])
    return (
        <>
            <>
                <Header/>
            </>
            <>
                <div className="vc_custom"
                     style={{position: 'relative', left: '0px', boxSizing: 'borderBox', paddingLeft: '0px', paddingRight: '0px', marginBottom: '2rem'}}>
                    <div style={{height: '100px'}}></div>
                    <h2 style={{marginTop: '10rem',fontSize: '40px',color: '#ffffff',textAlign: 'center',fontWeight:'700',fontStyle:'normal'}}>
                        PHÒNG THUÊ</h2>
                    <div style={{height: '102px'}}></div>
                </div>

            <div className="row" style={{marginLeft: '8rem'}}>
                {facilities?.map((facility) => (
                        <div className="col-sm-6 col-lg-4 mb-4">
                            <div className="card" style={{width: '23rem'}}>
                                <img width="370" height="239"
                                     src={facility.img}
                                     className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{facility.title}</h5>
                                    <p className="card-text">Diện Tích Phòng: {facility.area} m2</p>
                                    <a href="#" className="btn btn-outline-primary me-2">Sửa</a>
                                    <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal" onClick={()=> propsDelete(facility.id,facility.title)}>
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                )}

            </div>



            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end mt-3">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
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
                            Bạn muốn xóa {nameDelete} ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="submit" className="btn btn-outline-danger" data-bs-dismiss="modal"
                                    onClick={() => handleDelete(idDelete)}>Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
            <>
                <Footer/>
            </>
        </>
    )
}