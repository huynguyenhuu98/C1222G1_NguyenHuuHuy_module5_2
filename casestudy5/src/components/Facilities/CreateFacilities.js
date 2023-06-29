import React from "react";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import * as serviceFacilities from "../../service/ServiceFacilities"

export function CreateFacilities() {
    const navigate = useNavigate()
    return (
        <>
            <h3 className="text-center" style={{marginTop: '8rem', marginBottom: '2rem'}}>Thêm mới phòng</h3>
            <div className="row ms-1 mb-3">
                <div className="col-5" style={{marginLeft: '2rem'}}>
                    <Formik
                        initialValues={{
                            title: "",
                            cost:"",
                            typeRent: "",
                            service: "",
                            img: "",
                            area: ""
                        }}

                        validationSchema={Yup.object({
                            title:Yup.string().required('bat buoc nhap'),
                            area:Yup.number().required('bat buoc nhap'),
                            cost:Yup.number().required('bat buoc nhap'),
                            typeRent:Yup.string().required('bat buoc nhap'),
                            service:Yup.string().required('bat buoc nhap'),
                            img:Yup.string().required('bat buoc nhap')
                        })}
                        onSubmit={(values)=>{
                            const create = async () => {
                                await serviceFacilities.save(values)
                                navigate('/')
                            }
                            create()
                        }}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="example1">Tên phòng</label>
                                <Field type="text" className="form-control" id="example1" name="title"/>
                                <ErrorMessage name="title" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example2">Diện tích</label>
                                <Field type="number" className="form-control" id="example2" name="area"/>
                                <ErrorMessage name="area" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example3">Chi phí </label>
                                <Field type="number" className="form-control" id="example3" name="cost"/>
                                <ErrorMessage name="cost" component="span" className="err-class"/>
                            </div>
                            {/*<div className="form-group">*/}
                            {/*    <label htmlFor="example4">Số lượng </label>*/}
                            {/*    <input type="number" className="form-control" id="example4"/>*/}
                            {/*</div>*/}
                            <div className="form-group">
                                <label htmlFor="example5">Loại thuê </label>
                                <Field as="select" className="form-control" id="example5" name="typeRent">
                                    <option>Giờ </option>
                                    <option>Ngày </option>
                                    <option>Tháng </option>
                                    <option>Năm </option>
                                </Field>
                                <ErrorMessage name="typeRent" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example6">Loại dịch vụ </label>
                                <Field as="select" className="form-control" id="example6" name="service">
                                    <option value="">Select </option>
                                    <option value="villa">Villa </option>
                                    <option value="house">House </option>
                                    <option value="room">Room </option>
                                </Field>
                                <ErrorMessage name="service" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example7">Hình ảnh </label>
                                <Field type="text" className="form-control" id="example7" name="img"/>
                                <ErrorMessage name="img" component="span" className="err-class"/>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <NavLink to="/" className="btn btn-outline-success me-2">Home</NavLink>
                                <button type="submit" className="btn btn-outline-primary">Xác nhận</button>
                            </div>
                        </Form>
                    </Formik>

                </div>
                <div className="col-6">
                    <img width="938" height="500"
                         src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-M-1047x563.jpg"
                         alt=''/>
                </div>
            </div>
        </>
    );
}