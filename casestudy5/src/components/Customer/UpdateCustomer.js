import React, {useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup";
import * as serviceCustomer from "../../service/ServiceCustomer";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function UpdateCustomer() {
    const navigate = useNavigate()
    const param = useParams()
    const [typeCustomer, setTypeCustomer] = useState([])
    const [customer, setCustomer] = useState()
    useEffect(() => {
        const findByIdCustomer = async () => {
            const res = await serviceCustomer.findById(param.id)
            setCustomer(res)
        }
        findByIdCustomer()
    }, [param.id])

    useEffect(() => {
        const findTypeCustomer = async () => {
            const result = await serviceCustomer.findTypeCustomer()
            setTypeCustomer(result)
        }
        findTypeCustomer()
    }, [])
    if (!customer) {
        return null
    }
    return (
        <>
            <h3 className="text-center" style={{marginTop: '10rem', marginBottom: '3rem'}}>Sửa thông tin khách hàng</h3>
            <div className="row ms-1 mb-3">
                <div className="col-5" style={{marginLeft: '2rem'}}>
                    <Formik
                        initialValues={{
                            name: customer?.name,
                            typeCustomer: customer?.typeCustomer,
                            phone: customer?.phone,
                            address: customer?.address,
                            email: customer?.email,
                            birth: customer?.birth
                        }}

                        validationSchema={Yup.object({
                            name:Yup.string().required('Bắt buộc nhập').matches(/^[A-Z][a-zA-Z\s]*$/, "Tên khách hàng không hợp lệ"),
                            typeCustomer:Yup.number().required('Bắt buộc nhập').min(1),
                            phone:Yup.string().required('Bắt buộc nhập').matches(/^(090|091|8490|8491)\d{7}$/, 'Số điện thoại phải có 10 chữ số'),
                            address:Yup.string().required('Bắt buộc nhập'),
                            email:Yup.string().required('Bắt buộc nhập').email('Email phải có định dạng xxxx@yyyy.com'),
                            birth:Yup.string().required('Bắt buộc nhập').matches(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/, 'Định dạng ngày tháng không hợp lệ (dd/mm/yyyy)'),
                        })}
                        onSubmit={(values) => {
                            const update = async () => {
                                values.typeCustomer = parseInt(values.typeCustomer);
                                await serviceCustomer.update(param.id, values)
                                navigate('/customer')
                            }
                            update()
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
                                    {typeCustomer.map((type, index) => (
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