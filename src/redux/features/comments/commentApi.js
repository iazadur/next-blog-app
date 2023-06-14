import { apiSlice } from "../api/apiSlice";

const url = "/comments"

export const commentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAnComment: builder.query({
            query: (id) => `${url}/${id}`,
            keepUnusedDataFor: 600,
            providesTags: ["Comments"],
        }),
        getAllComment: builder.query({
            query: () => url,
            keepUnusedDataFor: 600,
            providesTags: ["Comments"],
        }),

        addComment: builder.mutation({
            query: (data) => ({
                url,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Comments", "Posts"],
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
        updateComment: builder.mutation({
            query: (data) => ({
                url: `${url}/${data?.id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Comments"],
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
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `${url}/${id}`,
                method: "DELETE",

            }),
            invalidatesTags: ["Comments", "Posts"],

        }),











    }),
})


export const {
    useGetAnCommentQuery,
    useGetAllCommentQuery,
    useAddCommentMutation,
    useUpdateCommentMutation,
    useDeleteCommentMutation,
} = commentApi