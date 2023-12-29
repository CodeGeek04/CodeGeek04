// components/Welcome.tsx

import React from "react";
import styles from "./Welcome.module.css";
import Link from "next/link";
import { Parallax, useParallax } from "react-scroll-parallax";

const Welcome: React.FC = () => {
  //   const { ref } = useParallax<HTMLDivElement>({
  //     speed: -100,
  //   });
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeContent}>
        <h1 className={styles.title}>
          THIS IS <span style={{ color: "#FF8C42" }}>SHIVAM MITTAL</span>
        </h1>
        <h1 className={styles.title}>
          AKA <span style={{ color: "#008000" }}>MR.ML</span>
        </h1>
        <p className={styles.description}>
          I amm Shivam Mittal, an AI-driven Full Stack Developer specializing in
          <span style={{ color: "#FF8C42" }}> ML Ops</span> and
          <span style={{ color: "#00BCD4" }}> DevOps</span>. With expertise in
          <span style={{ color: "#4CAF50" }}> Python</span> and the
          <span style={{ color: "#00FFFF" }}> T3 stack</span>, I have led the
          development of innovative applications, and collaborated with figures
          like Forbes 30 under 30,
          <span style={{ color: "#00FFFF" }}> Michael Gruen</span>. Beyond tech,
          I enjoy sports, sitcoms, and reading on
          <span style={{ color: "#FF8C42" }}> behavioral economics</span> and
          <span style={{ color: "#FF8C42" }}> personal development</span>.
        </p>
        <br />
        <Link href="#contact">
          <button className={styles.button}>GET IN TOUCH TODAY</button>
        </Link>
        <br />
        <br />
        {/* <p className={styles.description2}>
          SCROLL DOWN TO HAVE A LOOK AT MY PROJECTS, EXPERIENCE AND SKILLS
        </p> */}
      </div>
    </div>
  );
};

export default Welcome;
