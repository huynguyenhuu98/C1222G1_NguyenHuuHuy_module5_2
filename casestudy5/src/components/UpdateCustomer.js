import React from "react";
import {NavLink} from "react-router-dom";

export function UpdateCustomer() {
    return (
        <>
            <h3 className="text-center" style={{marginTop: '10rem', marginBottom:'3rem'}}>Sửa thông tin khách hàng</h3>
            <div className="row ms-1 mb-3">
                <div className="col-5" style={{marginLeft: '2rem'}}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="example1">Tên khách hàng</label>
                            <input type="email" className="form-control" id="example1"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="example2">Thẻ khách</label>
                            <select className="form-control" id="example2">
                                <option>Diamond</option>
                                <option>Gold</option>
                                <option>Silver</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="example3">Năm sinh</label>
                            <input type="number" className="form-control" id="example3"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="example4">Số điện thoại</label>
                            <input type="number" className="form-control" id="example4"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="example5">Địa chỉ</label>
                            <input type="text" className="form-control" id="example5"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="example6">Email</label>
                            <input type="text" className="form-control" id="example6"/>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <NavLink to="/customer" className="btn btn-outline-success me-2">
                                Quay lại
                            </NavLink>
                            <button type="submit" className="btn btn-outline-primary">Xác nhận</button>
                        </div>
                    </form>
                </div>
                <div className="col-6">
                    <img width="888" height="480"
                         src="https://media.baodautu.vn/Images/ngoctan/2017/08/29/Furama_Resort_Danang_-_Ocean_Pool_2.JPG"/>
                </div>
            </div>
        </>
    )
}