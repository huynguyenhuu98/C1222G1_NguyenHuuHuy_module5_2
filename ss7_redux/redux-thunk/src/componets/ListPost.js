import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {deletePost, getAllPost} from "../redux/action/Posts";
import {NavLink} from "react-router-dom";

export function ListPost() {
    const post = useSelector(state => state.post)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllPost())
    }, [])

    const handleDelete=async (id) =>{
        dispatch(deletePost(id))
        dispatch(getAllPost())
    }

    return (
        <>
            <h1>List Posts</h1>
            <NavLink to="/create">Add new post</NavLink>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Category</th>
                    <th>Thumbnail URL</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>{
                    post.map((items)=>(
                        <tr key={items.id}>
                            <td>{items.title}</td>
                            <td>{items.slug}</td>
                            <td>{items.category}</td>
                            <td>{items.thumbnail_url}</td>
                            <td>
                                <button className="btn btn-outline-danger"
                                        type="button" onClick={()=>handleDelete(items.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}