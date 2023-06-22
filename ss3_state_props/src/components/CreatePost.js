import {useNavigate} from "react-router";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import * as servicePost from "../service/ServicePost"

export function CreatePost() {
    const navigate = useNavigate()
    return (
        <>
            <Formik initialValues={{title: '', category: '', updatedAt: ''}}
                    validationSchema={Yup.object({
                        title: Yup.string().required("required"),
                        category: Yup.string().required("required"),
                        updatedAt: Yup.string().required("required")
                    })}
                    onSubmit={values => {
                        const create = async () => {
                            await servicePost.addPost(values)
                            navigate('/')
                        }
                        create()
                    }}>
                <Form>
                    <div>
                        <label htmlFor="title">TITLE</label>
                        <Field id="title" name="title"/>
                        <ErrorMessage name="title" className="text-error" component="span"/>
                    </div>
                    <div>
                        <label htmlFor="category">CATEGORY</label>
                        <Field id="category" name="category"/>
                        <ErrorMessage name="category" className="text-error" component="span"/>
                    </div>
                    <div>
                        <label htmlFor="updatedAt">TIME</label>
                        <Field id="updatedAt" name="updatedAt"/>
                        <ErrorMessage name="updatedAt" className="text-error" component="span"/>
                    </div>
                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </>
    )
}