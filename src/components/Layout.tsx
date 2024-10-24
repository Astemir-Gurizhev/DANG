import Header from "./header/Header.tsx"
import Footer from "./footer/Footer.tsx"
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="main">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export {Layout}