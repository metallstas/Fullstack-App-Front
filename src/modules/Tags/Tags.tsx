import { Tag } from '@/components/Tag/Tag'
import './tags.scss'
import { useAppSelector } from '@/store/hooks'

export const Tags = () => {
    const tags = useAppSelector((state) => state.tags.tags.slice(0, 5))
    return (
        <section className="tags">
            <h3>Теги</h3>
            {tags.map((tag) => {
                return <Tag key={tag} name={tag} />
            })}
        </section>
    )
}
