import React, {useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import * as Yup from "yup";
import * as serviceFacilities from "../../service/ServiceFacilities";
import {ErrorMessage, Field, Form, Formik} from "formik";

export function UpdateFacilities() {
    const navigate = useNavigate()
    const param = useParams()
    const [typeFacilities, setTypeFacilities] = useState([]);
    const [facilities, setFacilities] = useState();
    useEffect(() => {
        const findByIdFacilities = async () => {
            const res = await serviceFacilities.findById(param.id)
            setFacilities(res)
        }
        findByIdFacilities()
    }, [param.id])

    useEffect(() => {
        const findTypeFacilities = async () => {
            const result = await serviceFacilities.findTypeFacilities()
            setTypeFacilities(result)
        }
        findTypeFacilities()
    }, [])
    if (!facilities) {
        return null
    }
    return (
        <>
            <h3 className="text-center" style={{marginTop: '10rem', marginBottom: '3rem'}}>Sửa thông tin khách hàng</h3>
            <div className="row ms-1 mb-3">
                <div className="col-5" style={{marginLeft: '2rem'}}>
                    <Formik
                        initialValues={{
                            title: facilities?.title,
                            typeFacilities: facilities?.typeFacilities,
                            cost:facilities?.cost,
                            typeRent: facilities?.typeRent,
                            img: facilities?.img,
                            area: facilities?.area
                        }}

                        validationSchema={Yup.object({
                            title:Yup.string().required('bat buoc nhap'),
                            typeFacilities:Yup.number().required('bat buoc nhap').min(1),
                            area:Yup.number().required('bat buoc nhap'),
                            cost:Yup.number().required('bat buoc nhap'),
                            typeRent:Yup.string().required('bat buoc nhap'),
                            img:Yup.string().required('bat buoc nhap')
                        })}
                        onSubmit={(values)=>{
                            const update = async () => {
                                values.typeFacilities = parseInt(values.typeFacilities)
                                await serviceFacilities.update(param.id,values)
                                navigate('/')
                            }
                            update()
                        }}
                    >
                        <Form>
                            <div className="form-group">
                                <label htmlFor="example1">Tên phòng</label>
                                <Field type="text" className="form-control" id="example1" name="title"/>
                                <ErrorMessage name="title" component="span" className="err-class"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="example8"> Loại phòng</label>
                                <Field as="select" className="form-control" id="example8" name="typeFacilities">
                                    <option value="0">Select</option>
                                    {typeFacilities.map((type,index)=>(
                                        <option key={index} value={type.id}>
                                            {type.name}
                                        </option>
                                    ))
                                    }
                                </Field>
                                <ErrorMessage name="typeFacilities" component="span" className="err-class"/>
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
                    <img width="888" height="480"
                         src="https://media.baodautu.vn/Images/ngoctan/2017/08/29/Furama_Resort_Danang_-_Ocean_Pool_2.JPG"/>
                </div>
            </div>
        </>
    )
}