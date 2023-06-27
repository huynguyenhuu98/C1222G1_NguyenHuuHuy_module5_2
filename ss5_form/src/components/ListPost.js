import React, {useEffect, useState} from "react";
import * as servicePost from "../service/ServicePost"
import {NavLink} from "react-router-dom";

export function ListPost() {
    const [post, setPost] = useState([])
    const [idDelete, setIdDelete] = useState()
    const [nameDelete, setNameDelete] = useState("")
    const findAll = async () => {
        const value = await servicePost.findPost()
        setPost(value)
    }
    const handleDelete = async (id)=> {
        await servicePost.remove(id)
        const res = await servicePost.findPost()
        setPost(res)


    }
    const propsDelete = async(id,name)=> {
        setIdDelete(id)
        setNameDelete(name)

    }
    useEffect(()=>{
        findAll()
    },[])
    return (
        <>
            <h1 style={{textAlign:'center'}}>LIST POSTS</h1>
            <NavLink to='/create'>Add new post</NavLink>
            <table className="table border-1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>TIME</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>{
                    post.map((items,index)=>(
                        <tr key={index}>
                            <td>{items.id}</td>
                            <td>{items.title}</td>
                            <td>{items.category}</td>
                            <td>{items.updatedAt}</td>
                            <td>
                                <NavLink to={`/edit/${items.id}`}>Edit</NavLink>
                            </td>
                            <td>
                                <NavLink to={`/detail/${items.id}`}>Detail</NavLink>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" onClick={()=>propsDelete(items.id,items.name)}>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">DELETE POST</h1>
                        </div>
                        <div className="modal-body">
                            Do you want delete {nameDelete} ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary"
                                    data-bs-dismiss="modal" onClick={()=> handleDelete(idDelete)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}