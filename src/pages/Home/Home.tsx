import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { fetchPosts } from '@/store/slices/posts'
import { Tags } from '@/modules/Tags/Tags'
import { PostList } from '@/modules/PostList/PostList'
import { Comments } from '@/modules/Comments/Comments'
import { SortPost } from '@/modules/SortPost/SortPost'
import { PostSkeleton } from '@/UI/skeletons/PostSkeleton/PostSkeleton'
import { fetchTags } from '@/store/slices/tags'

import './home.scss'

const Home = () => {
    const dispatch = useAppDispatch()
    const postStatus = useAppSelector((state) => state.posts.status)
    const error = useAppSelector((state) => state.posts.error)
    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchTags())
    }, [])

    if (error) {
        return <h2 className="home__error">{error}</h2>
    }
    return (
        <div className="home">
            <SortPost />
            <div className="home__posts">
                {postStatus === 'loading' ? <SkeletonPosts /> : <PostList />}

                <aside className="info">
                    <Tags />
                    <Comments />
                </aside>
            </div>
        </div>
    )
}

export const Component = Home

const SkeletonPosts = () => {
    return (
        <div className="home__skeleton-wrap">
            {Array(4)
                .fill(undefined)
                .map((_, i) => (
                    <PostSkeleton key={i} />
                ))}
        </div>
    )
}
