// import { PathParams, ROUTES } from '@/routes/routes'
// import { href, Link, useParams } from 'react-router'

import { Tags } from '@/modules/Tags/Tags'
import './home.scss'
import { PostList } from '@/modules/PostList/PostList'
import { Comments } from '@/modules/Comments/Comment'

const Home = () => {
    // const params = useParams<PathParams[typeof ROUTES.POST]>()
    return (
        <div className="home">
            {/* <Link to={href(ROUTES.POST, { postId: '1' })}>
                Go to Post {params.postId}
            </Link> */}
            <PostList />
            <div className="info">
                <Tags />
                <Comments />
            </div>
        </div>
    )
}

export const Component = Home
