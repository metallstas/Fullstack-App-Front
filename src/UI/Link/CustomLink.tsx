import { FC } from 'react'
import { Link } from 'react-router'
import './custorm-link.scss'

type CustomLinkProps = {
    text: string
    to: string
    customClass?: string
    onClick?: () => void
}

export const CustomLink: FC<CustomLinkProps> = ({
    text,
    to,
    customClass,
    onClick,
}) => {
    return (
        <Link
            onClick={onClick}
            className={`custom-link ${customClass}`}
            to={to}
        >
            {text}
        </Link>
    )
}
