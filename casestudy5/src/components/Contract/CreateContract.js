import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import * as serviceContract from "../../service/ServiceContract";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

export function CreateContract() {
    const navigate = useNavigate()
    return (
        <>
            <h3 className="text-center" style={{marginTop: '10rem', marginBottom:'3rem'}}>Sửa thông tin khách hàng</h3>
            <div className="row ms-1 mb-3">
                <div className="col-5" style={{marginLeft: '2rem'}}>
                    <Formik
                        initialValues={{
                            id_contract:"",
                            name: "",
                            start:"",
                            end: "",
                            deposit: "",
                            total: ""
                        }}

                        validationSchema={Yup.object({
                            id_contract:Yup.string().required('Bắt buộc nhập'),
                            name:Yup.string().required('Bắt buộc nhập'),
                            start:Yup.string().required('Bắt buộc nhập'),
                            end:Yup.string().required('Bắt buộc nhập'),
                            deposit:Yup.string().required('Bắt buộc nhập').min(0),
                            total:Yup.string().required('Bắt buộc nhập')
                        })}
                        onSubmit={(values)=>{
                            const create = async () => {
                                await serviceContract.save(values)
                                toast(' Thêm mới hợp đồng thành công ')
                                navigate('/contract')
                            }
                            create()
                        }}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="example0">Số hợp đồng</label>
                                <Field type="text" className="form-control" id="example0" name="id_contract"/>
                                <ErrorMessage name="id_contract" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example1">Tên khách hàng </label>
                                <Field type="text" className="form-control" id="example1" name="name"/>
                                <ErrorMessage name="name" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example2">Ngày bắt đầu </label>
                                <Field type="text" className="form-control" id="example2" name="start"/>
                                <ErrorMessage name="start" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example4">Ngày kết thúc </label>
                                <Field type="text" className="form-control" id="example4" name="end"/>
                                <ErrorMessage name="end" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example5">Số tiền đặt cọc trước </label>
                                <Field type="text" className="form-control" id="example5" name="deposit"/>
                                <ErrorMessage name="deposit" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example6">Tổng tiền thanh toán</label>
                                <Field type="number" className="form-control" id="example6" name="total"/>
                                <ErrorMessage name="total" component="span" className="err-class"/>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <NavLink to="/contract" className="btn btn-outline-success me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-card-list" viewBox="0 0 16 16">
                                        <path
                                            d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                        <path
                                            d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                    </svg> Trở lại</NavLink>
                                <button type="submit" className="btn btn-outline-primary">Xác nhận</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div className="col-6">
                    <img width="888" height="480"
                         src="https://media.baodautu.vn/Images/ngoctan/2017/08/29/Furama_Resort_Danang_-_Ocean_Pool_2.JPG"/>
                </div>
            </div>
        </>
    )
}