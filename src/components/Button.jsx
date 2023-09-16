import "./Button.css"
const Button = ({children, ...props}) => {
    return (
        <button onClick={props.onClick}>{children}</button>
    )

}

export default Button;