// import { PathParams, ROUTES } from '@/routes/routes'
// import { href, Link, useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { fetchPosts } from '@/store/slices/posts'
import { Tags } from '@/modules/Tags/Tags'
import { PostList } from '@/modules/PostList/PostList'
import { Comments } from '@/modules/Comments/Comments'
import { SortPost } from '@/modules/SortPost/SortPost'

import './home.scss'
import { PostListSkeleton } from '@/UI/skeletons/PostListSkeleton/PostListSkeleton'

const Home = () => {
    const dispatch = useAppDispatch()
    const postStatus = useAppSelector((state) => state.posts.status)
    const error = useAppSelector((state) => state.posts.error)
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    // const params = useParams<PathParams[typeof ROUTES.POST]>()
    console.log(postStatus)

    if (postStatus === 'loading') {
        return <h2 className="home__error">Loading...</h2>
    }

    if (error) {
        // return <h2 className="home__error">{error}</h2>
        return <PostListSkeleton />
    }
    return (
        <div className="home">
            {/* <Link to={href(ROUTES.POST, { postId: '1' })}>
                Go to Post {params.postId}
            </Link> */}
            <SortPost />
            <div className="home__posts">
                <PostList />
                <aside className="info">
                    <Tags />
                    <Comments />
                </aside>
            </div>
            <PostListSkeleton />
        </div>
    )
}

export const Component = Home
