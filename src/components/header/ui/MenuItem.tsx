import { Link } from "react-router-dom";
import cn from "../Header.module.css";


const MenuItem = (props: any) => {
  return (
      <li>
        <Link to={props.link} className={cn.menuLink}>
          {props.name}
        </Link>
      </li>
  );
}

export default MenuItem;
