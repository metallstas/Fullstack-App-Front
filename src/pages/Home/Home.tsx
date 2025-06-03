// import { PathParams, ROUTES } from '@/routes/routes'
// import { href, Link, useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { fetchNewPost, fetchPosts } from '@/store/slices/posts'
import { Tags } from '@/modules/Tags/Tags'
import { PostList } from '@/modules/PostList/PostList'
import { Comments } from '@/modules/Comments/Comments'
import { SortPost } from '@/modules/SortPost/SortPost'

import './home.scss'
import { PostListSkeleton } from '@/UI/skeletons/PostListSkeleton/PostListSkeleton'
import { fetchTags } from '@/store/slices/tags'

const Home = () => {
    const dispatch = useAppDispatch()
    const postStatus = useAppSelector((state) => state.posts.status)
    const error = useAppSelector((state) => state.posts.error)
    useEffect(() => {
        // dispatch(
        //     fetchNewPost({
        //         title: 'new Title',
        //         text: 'some text new post',
        //         tags: ['programming', 'react', 'redux', 'learn'],
        //     })
        // )
        dispatch(fetchPosts())
        dispatch(fetchTags())
    }, [])

    // const params = useParams<PathParams[typeof ROUTES.POST]>()
    console.log(postStatus)

    // if (postStatus === 'loading') {
    //     return <h2 className="home__error">Loading...</h2>
    // }

    if (error) {
        return <h2 className="home__error">{error}</h2>
    }
    return (
        <div className="home">
            {/* <Link to={href(ROUTES.POST, { postId: '1' })}>
                Go to Post {params.postId}
            </Link> */}
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
                    <PostListSkeleton key={i} />
                ))}
        </div>
    )
}
