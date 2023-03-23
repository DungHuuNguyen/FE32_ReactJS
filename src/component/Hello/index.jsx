import "./style.css"

const Hello = ({ content, gender, children }) => {
    // detructoring
    // const { content } = props
    //~ const content = props.content
    // muốn viết jsx thì dùng dấu {}
    return <div className='title'>
        {children}
        {content} - Gioi tinh: {gender}
    </div>
}
// viết xong phải export ra để khi khác sử dụng (gọi ra dùng import)
export default Hello
