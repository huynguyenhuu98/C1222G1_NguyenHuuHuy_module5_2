import {useDispatch} from "react-redux";
import React from "react";
import {createPost} from "../redux/action/Posts";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

export function CreatePost() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <>
            <h1>Create Posts</h1>
            <Formik initialValues={{title:'',slug:'',category:'',thumbnail_url:''}}
            onSubmit={(values) => {
                    dispatch(createPost(values))
                    navigate('/')
            }}>
               <Form>
                   <label htmlFor="title">Title</label>
                   <Field id="title" name="title"/>
                   <label htmlFor="slug">Slug</label>
                   <Field id="slug" name="slug"/>
                   <label htmlFor="category">Category</label>
                   <Field id="category" name="category"/>
                   <label htmlFor="thumbnail_url">Thumbnail URL</label>
                   <Field id="thumbnail_url" name="thumbnail_url"/>
                   <button type="submit">Save</button>
               </Form>
            </Formik>
        </>
    )
}