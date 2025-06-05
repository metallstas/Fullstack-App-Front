import { Comment } from '@/components/Comment/Comment'
// import { CommentSkeleton } from '@/UI/skeletons/CommentSkeleton/CommentSkeleton'

import './comments.scss'

export const Comments = () => {
    return (
        <section className="comments">
            <h3>Коментарии</h3>
            <Comment />
            <Comment />
            <Comment />
            {/* <CommentSkeleton /> */}
        </section>
    )
}
