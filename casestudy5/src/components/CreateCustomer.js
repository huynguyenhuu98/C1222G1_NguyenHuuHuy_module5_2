import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import * as serviceFacilities from "../service/ServiceCustomer";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function CreateCustomer() {
    const navigate = useNavigate()
    return (
        <>
            <h3 className="text-center" style={{marginTop: '10rem', marginBottom:'3rem'}}>Sửa thông tin khách hàng</h3>
            <div className="row ms-1 mb-3">
                <div className="col-5" style={{marginLeft: '2rem'}}>
                    <Formik
                        initialValues={{
                            name: "",
                            phone:"",
                            address: "",
                            email: "",
                            birth: ""
                        }}

                        validationSchema={Yup.object({
                            name:Yup.string().required('bat buoc nhap'),
                            phone:Yup.string().required('bat buoc nhap'),
                            address:Yup.string().required('bat buoc nhap'),
                            email:Yup.string().required('bat buoc nhap').email("khong hop le"),
                            birth:Yup.string().required('bat buoc nhap')
                        })}
                        onSubmit={(values)=>{
                            const create = async () => {
                                await serviceFacilities.save(values)
                                navigate('/customer')
                            }
                            create()
                        }}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="example1">Tên khách hàng </label>
                                <Field type="text" className="form-control" id="example1" name="name"/>
                                <ErrorMessage name="name" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example2">Số điện thoại </label>
                                <Field type="text" className="form-control" id="example2" name="phone"/>
                                <ErrorMessage name="phone" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example3">Địa chỉ</label>
                                <Field type="text" className="form-control" id="example3" name="address"/>
                                <ErrorMessage name="address" component="span" className="err-class"/>
                            </div>
                            {/*<div className="form-group">*/}
                            {/*    <label htmlFor="example4">Số lượng </label>*/}
                            {/*    <input type="number" className="form-control" id="example4"/>*/}
                            {/*</div>*/}
                            <div className="form-group">
                                <label htmlFor="example5">Email </label>
                                <Field type="text" className="form-control" id="example2" name="email"/>
                                <ErrorMessage name="email" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example6">Ngày sinh </label>
                                <Field type="date" className="form-control" id="example2" name="birth"/>
                                <ErrorMessage name="birth" component="span" className="err-class"/>
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