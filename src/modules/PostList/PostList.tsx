import { Post } from '@/components/Post/Post'
import './posts.scss'

export const PostList = () => {
    return (
        <section className="posts">
            <Post />
            <Post />
            <Post />
        </section>
    )
}
