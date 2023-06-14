'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { useAddPostMutation, useUpdatePostMutation } from '@/redux/features/posts/postsApi'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function AddPostFrom({ closeCreateModal, prevData }) {
    const { user } = useSelector(state => state.auth)
    const [addPost] = useAddPostMutation()
    const [updatePost] = useUpdatePostMutation()
    const initialValues = {
        title: prevData?.title ?? '',
        body: prevData?.body ?? '',
    }
    const validationSchema = Yup.object({
        title: Yup.string().required('Post must have a title!'),
        body: Yup.string().min(100).required('Please provide post body!'),
    })
    const onSubmit = (values, { resetForm }) => {
        const { _id } = prevData || {}
        if (prevData?.title) {
            updatePost({ _id, ...values })

        } else {
            addPost({ ...values, author: user?._id })
        }
        resetForm()
        closeCreateModal()
    }


    return (
        <>
            <div className="isolate bg-white px-6 py-5 lg:px-8">
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{prevData?.title ? "Edit Post" : "Create a Post"}</h2>
                    <p className="my-2 text-lg leading-8 text-gray-600">
                        {prevData?.title ? "" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae."}
                    </p>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                            {/* <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Select an image
                                </label>
                                <div className="mt-2.5">
                                    <Field name="image">
                                        {({ field }) => (
                                            <input
                                                type="file"
                                                autoComplete="title"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                {...field}
                                            />
                                        )}

                                    </Field>
                                </div>
                                <ErrorMessage name="image" component="p" className="text-red-500 font-semibold text-sm" />
                            </div> */}

                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2.5">
                                    <Field name="title">
                                        {({ field }) => (
                                            <input
                                                type="text"
                                                autoComplete="title"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                {...field}
                                            />
                                        )}

                                    </Field>
                                </div>
                                <ErrorMessage name="title" component="p" className="text-red-500 font-semibold text-sm" />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    body
                                </label>
                                <div className="mt-2.5">
                                    <Field name="body">
                                        {(({ field }) => <textarea
                                            name="body"
                                            id="body"
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                            {...field}
                                        />)}
                                    </Field>
                                </div>
                                <ErrorMessage name="body" component="p" className="text-red-500 font-semibold text-sm" />
                            </div>
                        </div>
                        <div className="mt-10 gap-2 flex justify-end">
                            <button
                                type="button"
                                onClick={closeCreateModal}
                                className="block w-fit rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="block w-fit rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {prevData?.title ? "Update Post" : "Add Post"}
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>


        </>
    )
}


