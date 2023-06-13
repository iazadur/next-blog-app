import { apiSlice } from "../api/apiSlice";

const url = "/users"

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAllUser: builder.query({
            query: () => url,
            keepUnusedDataFor: 600,
            providesTags: ["Posts"],
        }),

    }),
})


export const {
   useGetAllUserQuery
} = usersApi