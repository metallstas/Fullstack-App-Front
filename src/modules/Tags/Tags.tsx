import { useAppSelector } from '@/store/hooks'
import { Tag } from '@/components/Tag/Tag'
import { TagsSkeleton } from '@/UI/skeletons/TagsSkeleton/TagSkeleton'

import './tags.scss'

export const Tags = () => {
    const tags = useAppSelector((state) => state.tags.tags)
    const statusTags = useAppSelector((state) => state.tags.status)
    const skeletonTags = new Array(5).fill(undefined)
    const skeletonOrTags =
        statusTags === 'loading' ? skeletonTags : tags.slice(0, 5)
    return (
        <section className="tags">
            <h3>Теги</h3>
            {skeletonOrTags.map((tag, i) => {
                if (statusTags === 'loading') {
                    return <TagsSkeleton key={i} />
                }
                if (statusTags === 'idle') {
                    return <Tag key={tag} name={tag} />
                }
            })}
        </section>
    )
}
