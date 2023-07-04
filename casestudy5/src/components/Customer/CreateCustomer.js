import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import * as serviceCustomer from "../../service/ServiceCustomer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

export function CreateCustomer() {
    const navigate = useNavigate()
    const [typeCustomer,setTypeCustomer] = useState([])
    useEffect(()=>{
        const findTypeCustomer = async ()=>{
            const result = await serviceCustomer.findTypeCustomer()
            setTypeCustomer(result)
        }
        findTypeCustomer()
    },[])

    return (
        <>
            <h3 className="text-center" style={{marginTop: '10rem', marginBottom:'3rem'}}>Sửa thông tin khách hàng</h3>
            <div className="row ms-1 mb-3">
                <div className="col-5" style={{marginLeft: '2rem'}}>
                    <Formik
                        initialValues={{
                            name: "",
                            typeCustomer:0,
                            phone:"",
                            address: "",
                            email: "",
                            birth: ""
                        }}

                        validationSchema={Yup.object({
                            name:Yup.string().required('Bắt buộc nhập').matches(/^[A-Z][a-zA-Z\s]*$/, "Tên khách hàng không hợp lệ"),
                            typeCustomer:Yup.number().required('Bắt buộc nhập').min(1),
                            phone:Yup.string().required('Bắt buộc nhập').matches(/^(090|091|8490|8491)\d{7}$/, 'Số điện thoại phải có 10 chữ số'),
                            address:Yup.string().required('Bắt buộc nhập'),
                            email:Yup.string().required('Bắt buộc nhập').email('Email phải có định dạng xxxx@yyyy.com'),
                            birth:Yup.string().required('Bắt buộc nhập').matches(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/, 'Định dạng ngày tháng không hợp lệ (dd/mm/yyyy)'),
                        })}
                        onSubmit={(values)=>{
                            const create = async () => {
                                values.typeCustomer = parseInt(values.typeCustomer);
                                await serviceCustomer.save(values)
                                toast(' Thêm mới khách hàng thành công ')
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
                            <div>
                                <label htmlFor="example7">Loại khách hàng </label>
                                <Field as="select" className="form-control" id="example7" name="typeCustomer">
                                    <option value="0">Chọn</option>
                                    {typeCustomer.map((type,index)=>(
                                        <option key={index} value={type.id}>
                                            {type.name}
                                        </option>
                                    ))
                                }
                                </Field>
                                <ErrorMessage name="typeCustomer" component="span" className="err-class"/>
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
                            <div className="form-group">
                                <label htmlFor="example5">Email </label>
                                <Field type="text" className="form-control" id="example2" name="email"/>
                                <ErrorMessage name="email" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example6">Ngày sinh </label>
                                <Field type="text" className="form-control" id="example2" name="birth"/>
                                <ErrorMessage name="birth" component="span" className="err-class"/>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <NavLink to="/customer" className="btn btn-outline-success me-2">
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