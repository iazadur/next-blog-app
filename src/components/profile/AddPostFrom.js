'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { useAddPostMutation } from '@/redux/features/posts/postsApi'

export default function AddPostFrom({ id }) {
    const { user } = useSelector(state => state.auth)
    const [addPost] = useAddPostMutation()
    const initialValues = {
        title: '',
        body: '',
    }
    const validationSchema = Yup.object({
        title: Yup.string().required('Post must have a title!'),
        body: Yup.string().required('Please provide post body!'),
    })
    const onSubmit = (values, { resetForm }) => {
        addPost({ ...values, author: user?._id })
        resetForm()
    }


    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form style={{ display: "flex", flexDirection: "column", gap: "10px", width: '400px', margin: '0 auto' }}>
                    <h1 className="mb-4 text-xl font-bold text-gray-700">Add Post</h1>
                    <Field name="title">
                        {({ field, form }) => (
                            <input type='text' {...field} placeholder="title" />
                        )}
                    </Field>
                    
                    <ErrorMessage name='title' />
                    <Field name="body">
                        {({ field, form }) => (
                            <textarea {...field} placeholder="body" />
                        )}
                    </Field>
                    <ErrorMessage name='body' />
                    <button type="submit" className='text-white font-semibold bg-black px-5 py-1 rounded'>Add Post</button>
                </Form>
            </Formik>
        </div >
    )
}
