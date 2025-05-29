import { FC } from 'react'
import './postListSkeleton.scss'

export const PostListSkeleton: FC = () => {
    return (
        <section className="skeleton">
            <div className="skeleton__post"></div>
        </section>
    )
}
