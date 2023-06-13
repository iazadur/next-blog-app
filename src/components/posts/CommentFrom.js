'use client'
import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { useAddCommentMutation } from '@/redux/features/comments/commentApi'

export default function CommentFrom({ id }) {
    const { user } = useSelector(state => state.auth)
    const [addComment] = useAddCommentMutation()
    const initialValues = {
        comment: '',
    }
    const validationSchema = Yup.object({
        comment: Yup.string().required('Required'),
    })
    const onSubmit = (values, { resetForm }) => {
        addComment({ ...values, post_id: id, author: user?._id })
        resetForm()
    }


    return (
        <div className='border rounded p-3'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form style={{ display: "flex", flexDirection: "column", gap: "10px", width: '400px', margin: '0 auto' }}>
                    
                    <h3 className="mb-4 text-xl font-bold text-gray-700">Add Comment</h3>
                    <Field  name="comment">
                        {({ field, form }) => (
                            <textarea {...field} placeholder="Comment" />
                        )}
                    </Field>
                    <button type="submit" className='w-fit px-5 py-1 rounded bg-black text-white font-semibold capitalize'>add</button>
                </Form>
            </Formik>
        </div >
    )
}
