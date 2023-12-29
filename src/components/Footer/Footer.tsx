// components/Footer.tsx

import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import styles from "./Footer.module.css"; // Adjust the path accordingly

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a href="tel:+918851660028">
          <FaPhone className={styles.icon} />
        </a>
        <a href="mailto:shivammittal2124@gmail.com">
          <FaEnvelope className={styles.icon} />
        </a>
        <a href="https://github.com/codegeek04">
          <FaGithub className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/shivam-mittal-559752225/">
          <FaLinkedin className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/shivam_mittal_21/">
          <FaInstagram className={styles.icon} />
        </a>
        <a href="https://twitter.com/shivam_mittal21">
          <FaTwitter className={styles.icon} />
        </a>
        {/* Add more icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
