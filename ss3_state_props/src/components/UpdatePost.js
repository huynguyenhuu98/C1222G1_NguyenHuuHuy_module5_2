import * as servicePost from "../service/ServicePost"
import {useNavigate, useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"

export function UpdatePost() {
    const navigate = useNavigate()
    const param = useParams()
    const [post, setPost] = useState(null)
    const findById = async () => {
        const res = await servicePost.findId(param.id)
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
            <Formik initialValues={{title: post?.title, category: post?.category, updatedAt: post?.updatedAt}}
                    validationSchema={Yup.object({
                        title: Yup.string().required("required"),
                        category: Yup.string().required("required"),
                        updatedAt: Yup.string().required("required"),
                    })}
                    onSubmit={values => {
                        const update = async () => {
                            await servicePost.updatePost(param.id, values)
                            navigate('/')
                        }
                        update()
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
                    <button type="submit">
                        Save
                    </button>
                </Form>
            </Formik>
        </>
    )
}