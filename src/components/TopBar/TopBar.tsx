// pages/index.tsx

import React from "react";
import Link from "next/link";
import styles from "./TopBar.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="#about">
            <div className={styles.link}>About Me</div>
          </Link>
          <Link href="#projects">
            <div className={styles.link}>Projects</div>
          </Link>
          <Link href="#experience">
            <div className={styles.link}>Experience</div>
          </Link>
          <Link href="#skills">
            <div className={styles.link}>Skills</div>
          </Link>
          {/* <Link href="#contact">
            <div className={styles.link}>Contact Me</div>
          </Link> */}
        </nav>
      </header>

      {/* Other sections of your homepage */}
    </div>
  );
};

export default Home;
