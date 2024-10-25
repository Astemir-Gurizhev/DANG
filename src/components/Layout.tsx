import Header from "./header/Header.tsx"
import Footer from "./footer/Footer.tsx"
import {Outlet} from "react-router-dom"
import cn from "./Layout.module.css"

const Layout = () => {
    return (
        <div className={cn.wrapper}>
            <Header/>
            <main className={cn.main}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export {Layout}