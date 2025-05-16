import { FC, MouseEventHandler } from 'react'
import { activeSort } from '@/store/slices/posts'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

import './sortPost.scss'

export const SortPost: FC = () => {
    const dispatch = useAppDispatch()
    const sortByStore = useAppSelector((state) => state.posts.sort)
    // const [sortActive, setSortActive] = useState<string>('new')
    // console.log(sortByStore)
    const handlerSort: MouseEventHandler<HTMLButtonElement> = (e) => {
        const id = e.currentTarget.id
        dispatch(activeSort(id))
    }

    return (
        <div className="sort">
            <button
                onClick={handlerSort}
                id={'new'}
                className={`sort__btn ${sortByStore === 'new' && 'sortActive'}`}
            >
                Новые
            </button>
            <button
                onClick={handlerSort}
                id={'popular'}
                className={`sort__btn ${
                    sortByStore === 'popular' && 'sortActive'
                }`}
            >
                Популярные
            </button>
        </div>
    )
}
