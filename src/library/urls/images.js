import { Link } from "react-router-dom"

const loginLogo = () => {
    return   <Link to= "/main"><img src="/assets/images/logo.svg" alt="logo" className="site-logo" /></Link>
}
export {loginLogo}