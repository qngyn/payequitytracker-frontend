import "./Button.css"
const Button = ({children, ...props}) => {
    return (
        <button onClick={props.onClick} type={props.type}>{children}</button>
    )

}

export default Button;