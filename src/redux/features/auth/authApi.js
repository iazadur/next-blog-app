import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/users/login',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data?.token,
                        user: result.data?.data?.user
                    }))

                    dispatch(userLoggedIn({
                        accessToken: result.data?.token,
                        user: result.data?.data?.user
                    }))
                } catch (err) {
                    // do nothing 
                }
            }
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: '/users/signup',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["User"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result.data)
                    // console.log(result.data?.token);
                    // console.log(result.data?.data?.user);
                    // localStorage.setItem("auth", JSON.stringify({
                    //     accessToken: result.data.data.token,
                    //     user: result.data.data.user
                    // }))
                    // dispatch(userLoggedIn({
                    //     accessToken: result.data.data.token,
                    //     user: result.data.data.user
                    // }))
                } catch (err) {
                    // do nothing 
                }
            }
        }),
    })
})


export const {
    useLoginMutation,
    useSignupMutation,
} = authApi;