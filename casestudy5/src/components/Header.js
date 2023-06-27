import React from "react";
import {NavLink} from "react-router-dom";

export function Header() {
    return (
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
                                        <li><a className="dropdown-item" ><NavLink to="/create" className="text-decoration-none btn btn-outline-light">Thêm mới dịch vụ</NavLink></a></li>
                                        <li><a className="dropdown-item"><NavLink to="/customer" className="text-decoration-none btn btn-outline-light">Khách hàng</NavLink></a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item"><NavLink to="/contract" className="text-decoration-none btn btn-outline-light">Hợp đồng</NavLink></a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit"
                                            style={{width: '8rem'}}>Tìm kiếm
                                    </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}