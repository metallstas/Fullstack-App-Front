import './postListSkeleton.scss'

export const PostListSkeleton = () => {
    return (
        <section className="skeleton">
            <div className="skeleton__post"></div>
            <div className="skeleton__info"> </div>
        </section>
    )
}
