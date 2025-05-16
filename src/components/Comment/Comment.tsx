import './comment.scss'

export const Comment = () => {
    return (
        <div className="comment">
            <img
                className="comment__photo"
                src="https://headshots-inc.com/wp-content/uploads/2021/04/author-headshots.jpg"
                alt="photo author"
            />
            <div className="comment__info">
                <h4>Вася Пупкин</h4>
                <p>
                    Это тестовый комментарий Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Soluta cumque amet, sunt ea
                    laboriosam delectus molestias adipisci cupiditate? Velit in
                    maiores fuga, nostrum autem quisquam eos expedita sit?
                    Fugiat, facere!
                </p>
            </div>
        </div>
    )
}
