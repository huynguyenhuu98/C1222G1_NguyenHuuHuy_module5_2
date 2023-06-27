import React, {useEffect, useState} from "react";
import * as servicePost from "../service/ServicePost"
import {NavLink} from "react-router-dom";

export function ListPost() {
    const [posts,setPost] = useState([])
    const findPost = async ()=> {
        const result = await servicePost.findAll()
        setPost(result)
    }
    useEffect(()=>{
        findPost()
    },[])
    return (
        <>
            <h1 className="align-content-center">List Posts</h1>
            <button className="text-decoration-none"><NavLink to="/create">Add new post</NavLink></button>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>SLUG</th>
                    <th>CATEGORY</th>
                    <th>THUMBNAIL URL</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((post)=>(
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.slug}</td>
                            <td>{post.category}</td>
                            <td>{post.thumbnail_url}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}