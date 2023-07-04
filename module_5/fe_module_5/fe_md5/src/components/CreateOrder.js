import * as serviceOrder from "../service/ServiceOrder"
import {useNavigate} from "react-router";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {toast} from "react-toastify";
import {NavLink} from "react-router-dom";

export function CreateOrder() {
    const navigate = useNavigate()
    const [product, setProduct] = useState([])
    const findAllProduct = async () => {
        const result = await serviceOrder.findAllProduct()
        setProduct(result)
    }
    useEffect(() => {
        findAllProduct();
    }, [])
    return (
        <>
            <h1 style={{textAlign:'center'}}>Create New Order</h1>
            <button className="btn btn-outline-success">
                <NavLink className="text-decoration-none" to={'/'}>Home</NavLink>
            </button>
            <Formik initialValues={{idOrder: '', dateBuy: '', amount: '', product: 0, total: ''}}
                    validationSchema={Yup.object({
                        idOrder: Yup.string().required('required'),
                        dateBuy: Yup.string().required('required').matches(/^[0-2][0-9][/][0-1][0-9][/]20[0-9]{2}$/,'input with dd/MM/yyyy'),
                        amount: Yup.number().required('required').min(1,'amount must more 0'),
                        product: Yup.number().required('required').min(1)
                    })}
                    onSubmit={values => {
                        const submit = async () => {
                            await serviceOrder.createOrder(values)
                            navigate('/')
                            toast('add new order success')
                        }
                        submit()
                    }}>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput1" className="form-label">ID ORDER</label>
                        <Field type="text" name="idOrder" id="disabledTextInput1" className="form-control"/>
                        <ErrorMessage name="idOrder" component="span" className="err-order"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput2" className="form-label">DATE BUY</label>
                        <Field type="text" name="dateBuy" id="disabledTextInput2" className="form-control"/>
                        <ErrorMessage name="dateBuy" component="span" className="err-order"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput3" className="form-label">AMOUNT</label>
                        <Field type="number" name="amount" id="disabledTextInput3" className="form-control"/>
                        <ErrorMessage name="amount" component="span" className="err-order"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledSelect" className="form-label">PRODUCT</label>
                        <Field name="product" id="disabledSelect" className="form-select" as="select">
                            <option value="0">Select</option>
                            {
                                product.map((items, index) => (
                                    <option key={index} value={items.id}>{items.name}</option>
                                ))
                            }

                        </Field>
                    </div>
                    <div>
                        <label htmlFor="total">TOTAL</label>
                        <Field type="number" name="total" id="total" className="form-control"/>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}