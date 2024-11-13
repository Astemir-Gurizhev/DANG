import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "./Header.module.css";
import logo from "../../assets/images/header/logo2.png";
import tg from "../../assets/images/header/tg.png";
import HeaderMenuItem from "./ui/MenuItem";
import Modal from "../modal/Modal"

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
            <Link to="/">
              <img src={logo} alt="logo" className={cn.logo} />
            </Link>
            <ul className={cn.menu}>
              <HeaderMenuItem link="/" name="Home" />
              <HeaderMenuItem link="/coin" name="Coins" />
              <HeaderMenuItem link="/about" name="About" />
              <HeaderMenuItem link="/contacts" name="Contacts" />
            </ul>

            <div className={cn.icons}>
              <a href="https://t.me/GurizhevAstemir" className={cn.icon}>
                <img src={tg} alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && (
        <Modal toggleMenu={toggleMenu}>
          <ul className={cn.menuMobile}>
            <li onClick={toggleMenu}>
              <Link to="/" className={cn.menuLink}>
                Home
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/coin" className={cn.menuLink}>
                Coins
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/about" className={cn.menuLink}>
                About
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/contacts" className={cn.menuLink}>
                Contacts
              </Link>
            </li>
          </ul>
          <Link to="/" onClick={toggleMenu}>
            <img src={logo} alt="logo" className={cn.logo} />
          </Link>
        </Modal>
      )}
    </>
  );
};

export default Header;