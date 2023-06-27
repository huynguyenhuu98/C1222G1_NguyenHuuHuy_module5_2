import {useNavigate} from "react-router";
import React from "react";
import {Field, Form, Formik} from "formik";
import * as servicePost from "../service/ServicePost"
import {NavLink} from "react-router-dom";

export function CreatePost() {
    const navigate = useNavigate()
    return (
        <>
            <Formik
                initialValues={{title: '', slug: '', thumbnail_url: '', category: ''}}
                onSubmit={(values) => {
                    const create = async () => {
                        await servicePost.save(values)
                        navigate('/')
                    }
                    create()
                }}>
                <Form className="form-check-input">
                    <div>
                        <label htmlFor="title">Title</label>
                        <Field id="title" name="title"/>
                    </div>
                    <div>
                        <label htmlFor="slug">Slug</label>
                        <Field id="slug" name="slug"/>
                    </div>
                    <div>
                        <label htmlFor="thumbnail_url">Thumbnail_url</label>
                        <Field id="thumbnail_url" name="thumbnail_url"/>
                    </div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <Field id="category" name="category"/>
                    </div>
                    <button type="submit" className="btn btn-outline-info">Save</button>
                    <button><NavLink to="/">Cancel</NavLink></button>
                </Form>
            </Formik>
        </>
    )

}