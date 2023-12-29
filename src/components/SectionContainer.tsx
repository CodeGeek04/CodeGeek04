import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./SectionContainer.module.css"; // You'll need to create this CSS module

const SectionContainer = ({ title, children }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`${styles.section} ${inView ? styles.fadeIn : ""}`}
    >
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default SectionContainer;
