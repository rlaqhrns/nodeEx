const Book = ({ img, title, author, children }) => {
    return (
        <article
            className='book'
            onMouseOver={() => {
                console.log('Mouse over!!')
            }}
        >
            <img src={img} alt='' />
            <h1>{title}</h1>
            <h4>{author}</h4>
            {children}
            <button type='button' onClick={(e) => clickHandler(e)}>
                clickHandler
            </button>
            <button type='button' onClick={(e) => complexHandler(e, author)}>
                complexHandler
            </button>
        </article>
    )
}
const clickHandler = (e) => {
    console.log(e)
}
const complexHandler = (e, author) => {
    console.log('click!!', e, author)
}

export default Book
