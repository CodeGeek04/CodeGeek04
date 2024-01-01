// components/Skills.tsx

import React from "react";
import styles from "./Skills.module.css"; // Adjust the path accordingly
import Image from "next/image";

const Skills: React.FC = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillCategory}>
        <div className={styles.categoryHeader}>
          <h3>Programming Languages</h3>
        </div>
        <div className={styles.skillIcons}>
          {/* Use Next.js logo for all skills in this example */}
          <Image fill={true} src="/python.png" alt="Python Logo" />
          <Image fill={true} src="/java.png" alt="Next.js Logo" />
          <Image fill={true} src="/js.png" alt="Next.js Logo" />
          {/* Add more logos as needed */}
        </div>
      </div>

      <div className={styles.skillCategory}>
        <div className={styles.categoryHeader}>
          <h3>Frameworks</h3>
        </div>
        <div className={styles.skillIcons}>
          <Image fill={true} src="/pytorch.png" alt="Next.js Logo" />
          <Image fill={true} src="/tf.png" alt="Next.js Logo" />
          <Image fill={true} src="/react.png" alt="Next.js Logo" />
          {/* Add more logos as needed */}
        </div>
      </div>

      <div className={styles.skillCategory}>
        <div className={styles.categoryHeader}>
          <h3>Tools</h3>
        </div>
        <div className={styles.skillIcons}>
          <Image fill={true} src="/vscode.webp" alt="Next.js Logo" />
          <Image fill={true} src="/github.png" alt="Next.js Logo" />
          <Image fill={true} src="/postgres.png" alt="Next.js Logo" />
          {/* Add more logos as needed */}
        </div>
      </div>

      {/* Add more categories and logos as needed */}
    </div>
  );
};

export default Skills;
