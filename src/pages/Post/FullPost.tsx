import { Post } from '@/components/Post/Post'
import { PathParams, ROUTES } from '@/routes/routes'
import { useParams } from 'react-router'

import './fullpost.scss'
import { Comments } from '@/modules/Comments/Comments'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { postById } from '@/store/slices/posts'

const FullPost = () => {
    const dispatch = useAppDispatch()
    const params = useParams<PathParams[typeof ROUTES.POST]>()
    const post = useAppSelector((state) => state.posts.fullPost)
    console.log(post)
    useEffect(() => {
        dispatch(postById(`${params.postId}`))
    }, [])

    return (
        <section className="fullpost">
            {post ? (
                <Post
                    isFullPost={true}
                    title={post?.title}
                    text={post.text}
                    tags={post.tags}
                    id={post._id}
                    authorName={post.author.fullName}
                    viewCount={post.viewsCount}
                    createdAt={post.createdAt}
                    imagePost={post.imageUrl}
                    imageAuthor={''}
                />
            ) : null}
            <div className="fullpost__comments">
                <Comments />
            </div>
        </section>
    )
}

export const Component = FullPost
