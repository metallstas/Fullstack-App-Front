import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import './post.scss'
import { FC } from 'react'
import { href, Link } from 'react-router'
import { ROUTES } from '@/routes/routes'
import defailtImg from '@/UI/images/default-img.png'
import defailtUserImg from '@/UI/images/user.png'

type PostProps = {
    isFullPost?: boolean
    id: string
    title: string
    text: string
    tags: string[]
    authorName: string
    viewCount: number
    createdAt: string
    imagePost: string | undefined
    imageAuthor: string
}

export const Post: FC<PostProps> = ({
    isFullPost,
    id,
    title,
    text,
    tags,
    viewCount,
    createdAt,
    authorName,
    imageAuthor,
    imagePost,
}) => {
    return (
        <article className="post">
            <Link to={href(ROUTES.POST, { postId: id })}>
                <img
                    className="post__img"
                    src={imagePost ? imagePost : defailtImg}
                    alt="img post"
                />
            </Link>
            <div className="post__info">
                <div className="post__author">
                    <img
                        src={imageAuthor ? imageAuthor : defailtUserImg}
                        alt="img author"
                    />
                    <div className="author__info">
                        <h4>{authorName}</h4>
                        <p>{createdAt}</p>
                    </div>
                </div>
                <Link
                    className="post__link"
                    to={href(ROUTES.POST, { postId: id })}
                >
                    <p className="post__title">{title}</p>
                </Link>
                {isFullPost ? <p>{text}</p> : null}
                <p className="post__tags">{tags.map((tag) => `#${tag} `)}</p>
                <div className="post__views-block">
                    <div className="post__views-block__views">
                        <span>
                            <RemoveRedEyeOutlinedIcon />
                        </span>{' '}
                        <span className="post__views-block__count">
                            {viewCount}
                        </span>
                    </div>
                    <div className="post__views-block__views">
                        <ChatBubbleOutlineOutlinedIcon />{' '}
                        <span className="post__views-block__count">3</span>
                    </div>
                </div>
            </div>
        </article>
    )
}
