import './App.css';
import React from "react";
import {posts} from "./data/Post";

function App() {
        return (
        <>
            <h2 style={{textAlign: 'center'}}>LIST POSTS</h2>
            <table className="table-border">
                <thead>
                <tr style={{backgroundColor: '#54534f', color:'white'}}>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>SLUG</th>
                    <th>CATEGORY</th>
                    <th>TIME</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((value, index) =>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td style={{color:'blue'}}>{value.title}</td>
                            <td>{value.slug}</td>
                            <td>{value.category}</td>
                            <td>{value.updatedAt}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    );
}

export default App;
