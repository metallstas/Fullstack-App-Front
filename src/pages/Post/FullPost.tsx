import { Post } from '@/components/Post/Post'
import { PathParams, ROUTES } from '@/routes/routes'
import { useParams } from 'react-router'
import { Comments } from '@/modules/Comments/Comments'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { FC, useEffect } from 'react'
import { fetchPostById } from '@/store/slices/posts'

import './fullpost.scss'
import { PostSkeleton } from '@/UI/skeletons/PostSkeleton/PostSkeleton'

const FullPost: FC = () => {
    const postById = useAppSelector((state) => state.posts.postById)
    const statusPost = useAppSelector((state) => state.posts.statusFullPost)
    const params = useParams<PathParams[typeof ROUTES.POST]>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const data = dispatch(fetchPostById(params.postId))
        console.log(data)
    }, [])

    if (statusPost === 'loading') {
        return <PostSkeleton />
    }

    return (
        <section className="fullpost">
            {postById ? (
                <Post
                    isFullPost={true}
                    title={postById?.title}
                    text={postById.text}
                    tags={postById.tags}
                    id={postById._id}
                    authorName={postById.author.fullName}
                    viewCount={postById.viewsCount}
                    createdAt={postById.createdAt}
                    imagePost={postById.imageUrl}
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
