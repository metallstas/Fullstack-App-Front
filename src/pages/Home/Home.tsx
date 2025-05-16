// import { PathParams, ROUTES } from '@/routes/routes'
// import { href, Link, useParams } from 'react-router'

import { Tags } from '@/modules/Tags/Tags'
import { PostList } from '@/modules/PostList/PostList'
import { Comments } from '@/modules/Comments/Comments'
import { SortPost } from '@/modules/SortPost/SortPost'

import './home.scss'

const Home = () => {
    // const params = useParams<PathParams[typeof ROUTES.POST]>()
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
        </div>
    )
}

export const Component = Home
