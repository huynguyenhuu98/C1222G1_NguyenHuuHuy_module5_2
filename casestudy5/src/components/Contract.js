import React from "react";

export function Contract() {
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
            {/*<button type="button" className="btn btn-success"*/}
            {/*        style={{marginBottom: "2%", marginLeft: "8%", backgroundColor: "#a5eee6"}}>*/}
            {/*    <NavLink to="/update_customer" className="text-decoration-none btn btn-primary">Chỉnh sửa khách hàng*/}
            {/*    </NavLink>*/}
            {/*</button>*/}
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
                <tr>
                    <td scope="row">1001</td>
                    <td>Nguyễn Văn A</td>
                    <td>20-05-2023</td>
                    <td>24-05-2023</td>
                    <td>1000000</td>
                    <td>4000000</td>
                    <td><a href="#" className="btn btn-outline-primary ">Sửa</a></td>
                    <td>
                        <button className="btn btn-outline-danger " data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Xóa
                        </button>
                    </td>
                </tr>
                <tr>
                    <td scope="row">1002</td>
                    <td>Nguyễn Thị B</td>
                    <td>20-04-2023</td>
                    <td>28-04-2023</td>
                    <td>1000000</td>
                    <td>6000000</td>
                    <td><a href="#" className="btn btn-outline-primary ">Sửa</a></td>
                    <td>
                        <button className="btn btn-outline-danger " data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Xóa
                        </button>
                    </td>
                </tr>
                <tr>
                    <td scope="row">1003</td>
                    <td>Nguyễn Khánh Đơn</td>
                    <td>14-06-2023</td>
                    <td>20-06-2023</td>
                    <td>500000</td>
                    <td>5000000</td>
                    <td><a href="#" className="btn btn-outline-primary ">Sửa</a></td>
                    <td>
                        <button className="btn btn-outline-danger " data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Xóa
                        </button>
                    </td>
                </tr>
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
                            Bạn có muốn xoá hợp đồng ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng </button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Xoá </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}