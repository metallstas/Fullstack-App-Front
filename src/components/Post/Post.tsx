import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import './post.scss'

export const Post = () => {
    return (
        <div className="post">
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
                        <p>Joel</p>
                        <p>12 июня 2023г.</p>
                    </div>
                </div>
                <div className="post__title">Roast the code</div>
                <div className="post__tags">#react #fun #typescript</div>
                <div className="post__views">
                    <div>
                        <RemoveRedEyeOutlinedIcon /> 150
                    </div>
                    <div>
                        <ChatBubbleOutlineOutlinedIcon /> 3
                    </div>
                </div>
            </div>
        </div>
    )
}
