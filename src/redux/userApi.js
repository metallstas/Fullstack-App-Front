import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4444/auth/' }),
    endpoints: (build) => ({
        login: build.mutation({
            query: (user) => ({
                url: `login`,
                method: 'POST',
                body: user,
            }),
        }),
    }),
})

export const { useLoginMutation } = userApi
