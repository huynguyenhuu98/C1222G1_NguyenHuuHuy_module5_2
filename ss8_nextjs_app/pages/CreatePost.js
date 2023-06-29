import React from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {useRouter} from "next/router";


export default function CreatePost() {
    const router = useRouter()
    return (
        <>
            <Formik initialValues={{userId:'',title:'',body:''}}
            onSubmit={(values)=>{
                const create = async (post)=>{
                    await axios.post('http://localhost:8080/posts',post)
                    router.push()
                }
                create()
            }}>
                <Form>
                    <label htmlFor="userId">UserId</label>
                    <Field id="userId" name="userId"/>
                    <label htmlFor="title">Title</label>
                    <Field id="title" name="title"/>
                    <label htmlFor="body">Body</label>
                    <Field id="body" name="body"/>
                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </>
    )
}

// export const getServerSideProps = async (post) => {
//     const response = await axios.post(' http://localhost:8080/posts',post)
//     return {
//         props:{
//             posts: response.data
//         }
//     };
// }