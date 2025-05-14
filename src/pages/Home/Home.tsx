import { PathParams, ROUTES } from '@/routes/routes'
import { href, Link, useParams } from 'react-router'

import './home.scss'

const Home = () => {
    const params = useParams<PathParams[typeof ROUTES.POST]>()
    return (
        <div className="home">
            <Link to={href(ROUTES.POST, { postId: '1' })}>
                Go to Post {params.postId}
            </Link>
        </div>
    )
}

export const Component = Home
