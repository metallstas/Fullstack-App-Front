import { Tag } from '@/components/Tag/Tag'
import './tags.scss'
import { useAppSelector } from '@/store/hooks'

export const Tags = () => {
    const tags = useAppSelector((state) => state.tags.tags)
    console.log(tags)
    return (
        <section className="tags">
            <h3>Теги</h3>
            {tags.map((tag) => {
                return <Tag key={tag} name={tag} />
            })}
        </section>
    )
}
