import { Post } from '@/components/Post/Post'
import { PathParams, ROUTES } from '@/routes/routes'
import { useParams } from 'react-router'

import './fullpost.scss'
import { Comments } from '@/modules/Comments/Comments'

const FullPost = () => {
    const params = useParams<PathParams[typeof ROUTES.POST]>()
    return (
        <section className="fullpost">
            <Post isFullPost={true} />
            <div className="fullpost__comments">
                <Comments />
            </div>
        </section>
    )
}

export const Component = FullPost
