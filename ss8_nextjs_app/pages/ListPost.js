import React from "react";
import axios from "axios";

export default function ListPost({posts}) {
    return (
        <>
            <a href="/CreatePost">Add new post</a>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                </thead>
                <tbody>{
                    posts.map(post => (
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export const getStaticProps = async () => {
    const response = await axios.get(' http://localhost:8080/posts')
    return {
        props:{
            posts: response.data
        }
    };
}