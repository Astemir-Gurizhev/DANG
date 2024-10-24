import {Link} from "react-router-dom"
import styles from "./Header.module.css"
function HeaderMenuItem(props:any) {
    return (
        <>
            <li><Link to={props.link} className={styles.headerMenuLink}>{props.name}</Link></li>
        </>
    )
}

export default HeaderMenuItem