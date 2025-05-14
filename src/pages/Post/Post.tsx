import { PathParams, ROUTES } from '@/routes/routes'
import { useParams } from 'react-router'

const Post = () => {
    const params = useParams<PathParams[typeof ROUTES.POST]>()
    return <div>{params.postId}</div>
}

export const Component = Post
