import React, {useEffect, useState} from "react";
import * as servicePost from "../service/ServicePost"
import {NavLink} from "react-router-dom";
import {useParams} from "react-router";

export function DetailPost() {
    const param = useParams()
    const [post, setPost] = useState()
    const findById = async () => {
        const res = await servicePost.findById(param.id)
        setPost(res)
    }

    useEffect(() => {
        findById()
    }, [param.id])
    if (!post) {
        return null
    }
    return (
        <>
            <h2>Detail Post</h2>
            <NavLink to={'/'}>Home</NavLink>
            <table className="table-bordered">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>{post.updatedAt}</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}