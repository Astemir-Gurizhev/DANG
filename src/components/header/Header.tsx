import { Link } from "react-router-dom";
import { useState } from "react"; // Импортируем useState для состояния
import styles from "./Header.module.css";
import logo from "../../assets/header/logo2.png";
import tg from "../../assets/header/tg.png";
import HeaderMenuItem from "./HeaderMenuItem.tsx";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Состояние для управления меню

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <button className={styles.burger} onClick={toggleMenu}>
              &#9776; {/* Символ бургер-меню */}
            </button>
            <Link to={"/"}>
              <img src={logo} alt="logo" className={styles.headerLogo} />
            </Link>
            <ul className={styles.headerMenu}>
              <HeaderMenuItem link="/" name="Home" />
              <HeaderMenuItem link="/about" name="About" />
              <HeaderMenuItem link="/contacts" name="Contacts" />
            </ul>

            
            <div className="headerRight">
              <a
                href="https://t.me/GurizhevAstemir"
                className={styles.headerRightIcon}
              >
                <img src={tg} alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className={styles.menuOverlay} onClick={toggleMenu}>
          <div
            className={styles.menuContent}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className={styles.headerMenuMobile}>
              <HeaderMenuItem link="/" name="Home" />
              <HeaderMenuItem link="/about" name="About" />
              <HeaderMenuItem link="/contacts" name="Contacts" />
            </ul>
            <Link to={"/"}>
              <img src={logo} alt="logo" className={styles.headerLogo} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
