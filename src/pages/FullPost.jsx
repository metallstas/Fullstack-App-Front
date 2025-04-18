import React from 'react'

import { Post } from '../components/Post'
import { Index } from '../components/AddComment'
import { CommentsBlock } from '../components/CommentsBlock'
import { useParams } from 'react-router'
import { useGetPostByIdQuery } from '../redux/postsApi'

export const FullPost = () => {
    const { id } = useParams()
    const { data, isLoading, isSuccess } = useGetPostByIdQuery(id)

    return (
        <>
            {isLoading ? (
                <Post isLoading={isLoading} />
            ) : (
                <Post
                    id={data._id}
                    title={data.title}
                    imageUrl={data.imageUrl}
                    user={data.author}
                    createdAt={data.createdAt}
                    viewsCount={data.viewsCount}
                    commentsCount={3}
                    tags={data.tags}
                    isFullPost={isSuccess}
                    isLoading={isLoading}
                >
                    <p>{data.text}</p>
                </Post>
            )}

            <CommentsBlock
                items={[
                    {
                        user: {
                            fullName: 'Вася Пупкин',
                            avatarUrl:
                                'https://mui.com/static/images/avatar/1.jpg',
                        },
                        text: 'Это тестовый комментарий 555555',
                    },
                    {
                        user: {
                            fullName: 'Иван Иванов',
                            avatarUrl:
                                'https://mui.com/static/images/avatar/2.jpg',
                        },
                        text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
                    },
                ]}
                isLoading={false}
            >
                <Index />
            </CommentsBlock>
        </>
    )
}
