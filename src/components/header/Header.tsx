import {Link} from "react-router-dom"
import styles from "./Header.module.css"
import logo from "../../assets/header/logo2.png"
import tg from "../../assets/header/tg.png"
function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headerRow}>
                        <div className={styles.headerLeft}>
                            <Link to={'/'}>
                                <img src={logo} alt="" className={styles.headerLogo} />
                            </Link>
                            <ul className={styles.headerMenu}>
                                <li><Link to={'/'} className={styles.headerMenuLink}>Home</Link></li>
                                <li><Link to={'/about'} className={styles.headerMenuLink}>About</Link></li>
                                <li><Link to={'/contacts'} className={styles.headerMenuLink}>Contacts</Link></li>
                            </ul>
                        </div>
                        <div className="headerRight">
                           <a href="https://t.me/GurizhevAstemir" className={styles.headerRightIcon}> <img src={tg} alt="" /> </a> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header