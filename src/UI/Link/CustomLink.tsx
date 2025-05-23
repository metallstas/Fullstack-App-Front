import { FC } from 'react'
import { Link } from 'react-router'
import './custorm-link.scss'

type CustomLinkProps = {
    text: string
    to: string
    customClass?: string
}

export const CustomLink: FC<CustomLinkProps> = ({ text, to, customClass }) => {
    return (
        <Link className={`custom-link ${customClass}`} to={to}>
            {text}
        </Link>
    )
}
