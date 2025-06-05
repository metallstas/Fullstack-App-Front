import { FC } from 'react'
import './PostSkeleton.scss'

export const PostSkeleton: FC = () => {
    return (
        <section className="skeleton">
            <div className="skeleton__post"></div>
        </section>
    )
}
