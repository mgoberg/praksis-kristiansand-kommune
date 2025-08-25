"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Praksis KRS
        </Link>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.change : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.change : ""}`}
          ></div>
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.change : ""}`}
          ></div>
        </div>

        <ul className={`${styles.navmenu} ${isMenuOpen ? styles.active : ""}`}>
          <li className={styles.navItem}>
            <Link href="/projectJournal" className={styles.navLink}>
              Prosjektdagbok
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/status-1" className={styles.navLink}>
              Status 1
            </Link>
          </li>
          {/* Commented out Status 2 link
          <li className={styles.navItem}>
            <Link href="/status-2" className={styles.navLink}>
              Status 2
            </Link>
          </li>
          */}
        </ul>
      </div>
    </nav>
  );
}
