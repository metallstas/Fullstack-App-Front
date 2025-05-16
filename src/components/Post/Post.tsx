import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import './post.scss'
import { FC } from 'react'
import { LocalFireDepartment } from '@mui/icons-material'

type PostProps = {
    isFullPost?: boolean
}

export const Post: FC<PostProps> = ({ isFullPost }) => {
    return (
        <article className="post">
            <img
                className="post__img"
                src="https://www.socialpilot.co/wp-content/uploads/2024/12/Bluesky-image-sizes-complete.webp"
                alt="img post"
            />
            <div className="post__info">
                <div className="post__author">
                    <img
                        src="https://ps.w.org/wp-post-author/assets/icon-256x256.png?rev=2985820"
                        alt="img author"
                    />
                    <div className="author__info">
                        <h4>Joel</h4>
                        <p>12 июня 2023г.</p>
                    </div>
                </div>
                <p className="post__title">Roast the code</p>
                {isFullPost ? (
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eveniet accusantium blanditiis ducimus eos,
                        numquam fugit corrupti modi provident inventore cum quos
                        nulla rerum voluptates error. Dicta ipsum voluptatibus
                        dolores vero?
                    </p>
                ) : null}
                <p className="post__tags">#react #fun #typescript</p>
                <div className="post__views-block">
                    <div className="post__views-block__views">
                        <span>
                            <RemoveRedEyeOutlinedIcon />
                        </span>{' '}
                        <span className="post__views-block__count">150</span>
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
