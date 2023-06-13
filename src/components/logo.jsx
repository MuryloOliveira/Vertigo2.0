import logo from '../images/logo.png'
import '../Logo.css'

export function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
    )
}