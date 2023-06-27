import React, {useEffect, useState} from "react";
import * as servicePost from "../service/ServicePost"
import {NavLink} from "react-router-dom";
import {useParams} from "react-router";
import {Field, Form, Formik} from "formik";

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
            <Formik initialValues={{title: post?.title, category: post?.category, updatedAt: post?.updatedAt}}>
                <Form>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <Field id='title' name='title' disabled/>
                    </div>
                    <div>
                        <label htmlFor='category'>Category</label>
                        <Field id='category' name='category' disabled/>
                    </div>
                    <div>
                        <label htmlFor='updatedAt'>T</label>
                        <Field id='updatedAt' name='updatedAt' disabled/>
                    </div>
                </Form>
            </Formik>
        </>
    )
}