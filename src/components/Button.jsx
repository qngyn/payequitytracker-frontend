import "./Button.css"
const Button = ({children, ...props}) => {
    console.log(props)
    return (
        <button onClick={props.onClick}>{children}</button>
    )

}

export default Button;