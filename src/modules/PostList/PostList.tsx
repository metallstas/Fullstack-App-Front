import { Post } from '@/components/Post/Post'
import './posts.scss'
import { useAppSelector } from '@/store/hooks'

export const PostList = () => {
    const posts = useAppSelector((state) => state.posts.posts)
    if (!posts) {
        return <h2>Нет постов</h2>
    }

    return (
        <section className="posts">
            {posts.map((post) => {
                return (
                    <Post
                        authorId={post.author._id}
                        key={post._id}
                        id={post._id}
                        title={post.title}
                        text={post.text}
                        tags={post.tags}
                        viewCount={post.viewsCount}
                        imageAuthor={post.author.avatarUrl}
                        imagePost={post.imageUrl}
                        createdAt={post.createdAt}
                        authorName={post.author.fullName}
                    />
                )
            })}
        </section>
    )
}
