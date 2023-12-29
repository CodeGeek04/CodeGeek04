// components/Projects.tsx
import React from "react";
import ProjectElement from "./ProjectElement";
import styles from "./Projects.module.css"; // Adjust the path accordingly

const Projects: React.FC = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projects}>
        <ProjectElement
          title="ZenPal"
          description="ZenPal, the smart email scheduler, streamlines meeting coordination. Integrated with your calendar, it proposes optimal meeting times, making scheduling a breeze. Boost your productivity with ZenPal's efficient approach to email communication."
          link="https://zenpal.ai/"
          image="zenpal.png"
        />
        <ProjectElement
          title="Automation Station"
          description="Explore Elysium Innovations' diverse range of mini-products on Automation Station. Our sleek website offers a quick glimpse into innovative solutions designed to elevate corporate processes. Dive into the future of automation with Elysium."
          link="https://automationstation.org/"
          image="automationstation.png"
        />
        <ProjectElement
          title="Tune Craft"
          description="Immerse yourself in AI-generated tunes at TuneCraft. Using next-note prediction and Transformers architecture, it crafts unique and captivating melodies. Experience the future of music creation in a single click."
          link="https://tune-craft.vercel.app/"
          image="tunecraft.png"
        />
        <ProjectElement
          title="Elysium Marketplace"
          description="Discover and trade AI agents at Elysium Marketplace. Similar to Upwork for humans, our platform offers a diverse pool of customizable AI talent, ensuring secure transactions and innovation in AI technology. Empower your business with tailored AI solutions."
          link="https://elysiumos.com/"
          image="marketplace.png"
        />
        {/* <ProjectElement
          title="Flower Generator"
          description="Description of Project 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          link="https://huggingface.co/spaces/zen21/Flower-Generator"
          image="elysiumos.png"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
