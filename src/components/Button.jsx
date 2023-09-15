import "./Button.css"
const Button = ({children}) => {
    console.log(children)
    return (
        <button>{children}</button>
    )

}

export default Button;