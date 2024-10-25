import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "./Header.module.css";
import logo from "../../assets/images/header/logo2.png";
import tg from "../../assets/images/header/tg.png";
import HeaderMenuItem from "./ui/MenuItem.tsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className={cn.header}>
        <div className={cn.container}>
          <div className={cn.row}>
            <div className={cn.burger} onClick={toggleMenu}></div>
            <Link to={"/"}>
              <img src={logo} alt="logo" className={cn.logo} />
            </Link>
            <ul className={cn.menu}>
              <HeaderMenuItem link="/" name="Home" />
              <HeaderMenuItem link="/about" name="About" />
              <HeaderMenuItem link="/contacts" name="Contacts" />
            </ul>

            
            <div className={cn.icons}>
              <a
                href="https://t.me/GurizhevAstemir"
                className={cn.icon}
              >
                <img src={tg} alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className={cn.menuOverlay} onClick={toggleMenu}>
          <div
            className={cn.menuContent}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className={cn.menuMobile}>
              <HeaderMenuItem link="/" name="Home" />
              <HeaderMenuItem link="/about" name="About" />
              <HeaderMenuItem link="/contacts" name="Contacts" />
            </ul> 
            <Link to={"/"}>
              <img src={logo} alt="logo" className={cn.logo} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
