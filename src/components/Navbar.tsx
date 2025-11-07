"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
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
          <Image
            src="/L_KRS_Forenklet_byvaapen_horisontal.png"
            alt="Kristiansand Kommune Logo"
            width={180}
            height={60}
            className={styles.logoImage}
          />
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
            <Link href="/." className={styles.navLink}>
              Hjem
            </Link>
          </li>
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
          <li className={styles.navItem}>
            <Link href="/status-2" className={styles.navLink}>
              Status 2
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/reflection" className={styles.navLink}>
              Avsluttende refleksjon
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
