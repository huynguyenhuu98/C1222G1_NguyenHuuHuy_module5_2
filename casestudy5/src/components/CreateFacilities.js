import React from "react";
import {NavLink} from "react-router-dom";

export function CreateFacilities() {
    return (
        <>
            <>
                <h3 className="text-center" style={{marginTop: '8rem', marginBottom:'2rem'}}>Thêm mới phòng</h3>
                <div className="row ms-1 mb-3">
                    <div className="col-5" style={{marginLeft: '2rem'}}>
                        <form>
                            <div className="form-group">
                                <label htmlFor="example1">Tên phòng</label>
                                <input type="email" className="form-control" id="example1"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example2">Loại giường</label>
                                <select className="form-control" id="example2">
                                    <option>Giường đơn</option>
                                    <option>Giường đôi</option>
                                    <option>Hai giường</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example3">Diện tích</label>
                                <input type="number" className="form-control" id="example3"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Loại phòng</label>
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Diamond</option>
                                    <option>Gold</option>
                                    <option>Silver</option>
                                    <option>Copper</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect2">Tính năng phòng</label>
                                <select className="form-control" id="exampleFormControlSelect2">
                                    <option>Wifi</option>
                                    <option>Máy Giặt</option>
                                    <option>Máy Điều hòa</option>
                                    <option>Két sắt</option>
                                    <option>Minibar</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example4">Hình ảnh </label>
                                <input type="file" className="form-control" id="example4"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="textarea1">Chi tiết phòng</label>
                                <textarea className="form-control" id="textarea1" rows="3"/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <NavLink to="/" className="btn btn-outline-success me-2">
                                    Home
                                </NavLink>
                                <button type="submit" className="btn btn-outline-primary">Xác nhận</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-6">
                        <img width="938" height="500"
                             src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-M-1047x563.jpg"
                             alt=''/>
                    </div>
                </div>
            </>
        </>
    );
}