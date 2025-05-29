import { Tag as TagMU } from '@mui/icons-material'

import './tag.scss'
import { FC } from 'react'

type TagsProps = {
    name: string
}

export const Tag: FC<TagsProps> = ({ name }) => {
    return (
        <div className="tag">
            <TagMU /> <span>{name}</span>
        </div>
    )
}
