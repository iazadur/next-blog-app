'use client'
import { useSignupMutation } from "@/redux/features/auth/authApi"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Link from "next/link"
import * as Yup from 'yup'

export default function SignupForm() {
    const [signup, { data,error }] = useSignupMutation()
    const initialValues = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    }
    const validationSchema = Yup.object({
        username: Yup.string().required(),
        password: Yup.string().min(8).required(),
        passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
        email: Yup.string().email('Invalid email format').required('Required'),
    })
    const onSubmit = (values) => {
        signup(values)
    }
    console.log(error);
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <>

                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Creact an account
                            </h2>

                        </div>
                        {error?.data?.status == 'fail' && <p className="text-center text-red-700 font-bold text-sm">{error?.data?.message}</p>}
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <Form className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <Field name="username">
                                            {({ field }) => (
                                                <input
                                                    id="username"
                                                    type="text"
                                                    autoComplete="username"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    {...field}
                                                />
                                            )
                                            }
                                        </Field>

                                    </div>
                                    <ErrorMessage name="username" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <Field name="email">
                                            {({ field }) => (
                                                <input
                                                    id="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    {...field}
                                                />
                                            )
                                            }
                                        </Field>

                                    </div>
                                    <ErrorMessage name="email" />
                                </div>

                                <div>

                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>


                                    <div className="mt-2">
                                        <Field name="password">
                                            {({ field }) => (
                                                <input
                                                    id="password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    {...field}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <ErrorMessage name="password" />
                                </div>
                                <div>

                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm Password
                                    </label>


                                    <div className="mt-2">
                                        <Field name="passwordConfirm">
                                            {({ field }) => (
                                                <input
                                                    id="passwordConfirm"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    {...field}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <ErrorMessage name="passwordConfirm" />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Register
                                    </button>
                                </div>
                            </Form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Already have an account?{' '}
                                <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Go to Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </>
            </Formik>
        </>
    )
}
