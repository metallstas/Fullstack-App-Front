import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    tagTypes: ['Posts'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4444/' }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => `posts`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ _id }) => ({ type: 'Posts', _id })),
                          { type: 'Posts', id: 'LIST' },
                      ]
                    : [{ type: 'Posts', id: 'LIST' }],
        }),
        getTags: build.query({
            query: () => `tags`,
        }),
        getPostById: build.query({
            query: (id) => `posts/${id}`,
        }),
        addPost: build.mutation({
            query: (post) => ({
                url: `posts`,
                method: 'POST',
                headers: {
                    authorization:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VmYjI0NTZhZjJjZjYzMjMxZmI5MzMiLCJpYXQiOjE3NDQwOTYwMDQsImV4cCI6MTc0NjY4ODAwNH0.sTtjz3CwlEFx6FMvxn_oof0Ju--yTbIr1mOUveZqJ7w',
                },
                body: post,
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
        deletePost: build.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
                headers: {
                    authorization:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VmYjI0NTZhZjJjZjYzMjMxZmI5MzMiLCJpYXQiOjE3NDQwOTYwMDQsImV4cCI6MTc0NjY4ODAwNH0.sTtjz3CwlEFx6FMvxn_oof0Ju--yTbIr1mOUveZqJ7w',
                },
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
    }),
})

export const {
    useGetPostsQuery,
    useAddPostMutation,
    useDeletePostMutation,
    useGetTagsQuery,
    useGetPostByIdQuery,
} = postsApi
