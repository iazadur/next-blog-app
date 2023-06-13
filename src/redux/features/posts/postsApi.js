import { apiSlice } from "../api/apiSlice";

const url = "/posts"

export const postApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAnPost: builder.query({
            query: (id) => `${url}/${id}`,
            keepUnusedDataFor: 600,
            providesTags: ["Posts"],
        }),
        getAllPosts: builder.query({
            query: () => url,
            keepUnusedDataFor: 600,
            providesTags: ["Posts"],
        }),


        addPost: builder.mutation({
            query: (data) => ({
                url,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Posts"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result);
                    // if (result.data.isSuccess) {
                    // toast.success(result?.data?.message)
                    // }
                    // if (!result.data.isSuccess) {
                    // toast.warning(result?.data?.message)
                    // }

                } catch (err) {
                    // do nothing 
                }
            }
        }),

        updatePost: builder.mutation({
            query: (data) => ({
                url,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Post"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result);
                    // if (result.data.isSuccess) {
                    // toast.success(result?.data?.message)
                    // }
                    // if (!result.data.isSuccess) {
                    // toast.warning(result?.data?.message)
                    // }

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `${url}/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ["Post"],

        }),











    }),
})


export const {
    useGetAnPostQuery,
    useGetAllPostsQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postApi