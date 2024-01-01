// components/ProjectElement.tsx
import React from "react";
import styles from "./ProjectElement.module.css"; // Adjust the path accordingly
import Image from "next/image";

interface ProjectElementProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const ProjectElement: React.FC<ProjectElementProps> = ({
  title,
  description,
  link,
  image,
}) => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectImage}>
        <Image fill={true} src={image} alt={`Tech for ${title}`} />
        <div className={styles.projectTitleContainer}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <a
            className={styles.projectLink}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
      <div className={styles.projectDescription}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectElement;
