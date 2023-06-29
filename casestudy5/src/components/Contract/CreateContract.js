import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import * as serviceContract from "../../service/ServiceContract";
import {ErrorMessage, Field, Form, Formik} from "formik";

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
                                <NavLink to="/" className="btn btn-outline-success me-2">Home</NavLink>
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