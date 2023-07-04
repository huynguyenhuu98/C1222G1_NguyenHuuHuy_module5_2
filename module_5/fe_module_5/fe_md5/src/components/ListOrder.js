import * as serviceOrder from "../service/ServiceOrder"
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import {Field, Form, Formik} from "formik";

export function ListOrder() {
    const [order,setOrder] = useState([])
    const [product,setProduct] = useState([])
    const [idDelete,setIdDelete] = useState()
    const [nameDelete,setNameDelete] = useState()
    const propsDelete = async (id,name)=>{
        setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id)=>{
        await serviceOrder.remove(id)
        findAllOrder()
    }
    const findAllOrder = async () =>{
        const result = await serviceOrder.findAllOrder()
        setOrder(result)
    }
    const findAllProduct = async () =>{
        const result = await serviceOrder.findAllProduct()
        setProduct(result)
    }
    useEffect(()=>{
        findAllOrder();
        findAllProduct();
    },[])
    return (
        <>
            {/*<Formik initialValues={{dateBuy:'',product:''}}*/}
            {/*onSubmit={values => {*/}
            {/*    const search = async ()=>{*/}
            {/*        const result = await serviceOrder.findByName(values.dateBuy,values.product)*/}
            {/*        if (result.length===0){*/}
            {/*            // alert('No have result search !')*/}
            {/*            toast('No have result search !')*/}
            {/*        }*/}
            {/*        setOrder(result)*/}
            {/*    }*/}
            {/*    search()*/}
            {/*}}>*/}
            {/*    <Form className="mt-2">*/}
            {/*        <Field name="dateBuy"/>*/}
            {/*        <Field name="product" as="select" style={{height:'30px',marginLeft:'5px',marginRight:'5px'}}>*/}
            {/*            <option value="">All</option>*/}
            {/*            {*/}
            {/*                product.map((items,index)=>(*/}
            {/*                    <option key={index} value={items.id}>{items.name}</option>*/}
            {/*                ))*/}
            {/*            }*/}
            {/*        </Field>*/}
            {/*        <button type="submit" className="btn btn-outline-warning">Search</button>*/}
            {/*    </Form>*/}
            {/*</Formik>*/}
            <h1 style={{textAlign:'center'}}>List Order</h1>
            <NavLink to={'/create'}>Add new order</NavLink>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Id Order</th>
                    <th>Name Product</th>
                    <th>Price (USD)</th>
                    <th>Type Product</th>
                    <th>Date Buy</th>
                    <th>Amount</th>
                    <th>Total (USD)</th>
                </tr>
                </thead>
                <tbody>{
                    order?.map((order,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{order.idOrder}</td>
                            {/*<td>{product.find((type)=>(type.id===order.product))?.name}</td>*/}
                            {/*<td>{product.find((type)=>(type.id===order.product))?.price}</td>*/}
                            {/*<td>{product.find((type)=>(type.id===order.product))?.type}</td>*/}
                            <td>{order.product.name}</td>
                            <td>{order.product.price}</td>
                            <td>{order.product.type}</td>
                            <td>{order.dateBuy}</td>
                            <td>{order.amount}</td>
                            <td>{order.total}</td>
                            <td>
                                <button
                                    type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                onClick={()=>handleDelete(order.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Order </h1>
                        </div>
                        <div className="modal-body">
                            Delete order {nameDelete} ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                            onClick={()=>handleDelete(idDelete)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}