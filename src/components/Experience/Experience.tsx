// components/Experience.tsx

import React from "react";
import styles from "./Experience.module.css"; // Adjust the path accordingly
import Image from "next/image";

const Experience: React.FC = () => {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.companyContainer}>
        <div className={styles.companyLogo}>
          {/* Add your company logo or an image */}
          <Image src="elysium-logo.png" alt="Elysium Logo" />
        </div>
        <div className={styles.companyDetails}>
          <h3 className={styles.position}>Full Stack Developer</h3>
          <p className={styles.companyName}>Elysium Innovations</p>
          <p className={styles.duration}>September 2023 - November 2023</p>
          <ul className={styles.responsibilities}>
            <li>
              Led the development of cutting-edge full-stack applications.
            </li>
            <li>Collaborated with Michael Gruen on innovative projects.</li>
            <li>
              Contributed to the creation of AI-driven components for websites.
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.companyContainer}>
        <div className={styles.companyLogo}>
          {/* Add your company logo or an image */}
          <Image src="talko-logo.png" alt="TalkO Logo" />
        </div>
        <div className={styles.companyDetails}>
          <h3 className={styles.position}>CTO</h3>
          <p className={styles.companyName}>TalkO</p>
          <p className={styles.duration}>March 2023 - August 2023</p>
          <ul className={styles.responsibilities}>
            <li>Worked on a user application using Flutter and Firebase.</li>
            <li>Developed/fine-tuned a Large Language Model for a chatbot.</li>
            <li>
              Handled complete flow including user authentication and database
              management.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
