import Layout from "@/components/Layout";
import SectionContainer from "@/components/SectionContainer";
import Welcome from "@/components/Welcome/Welcome";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import ParticleBackground from "@/components/Particles/ParticlesBackground";
import ContactForm from "@/components/Contact/ContactForm";

export default function Home() {
  return (
    <Layout>
      {/* <ParticleBackground /> */}
      <div className="flex flex-col items-center justify-center">
        <div id="about" />
        <Welcome />
        <div id="projects" />
        <SectionContainer
          title="My Projects"
          style={{ height: "75%", marginTop: "-100%" }}
        >
          <Projects />
        </SectionContainer>
        <div id="experience" />
        <SectionContainer
          title="My Experience"
          style={{ height: "75%", marginTop: "-100%" }}
        >
          <Experience />
        </SectionContainer>
        <div id="skills" />
        <SectionContainer
          title="My Skills"
          style={{ height: "75%", marginTop: "-100%" }}
        >
          <Skills />
        </SectionContainer>
        <div id="contact" />
        <SectionContainer
          title="Contact Me"
          style={{ height: "75%", marginTop: "-100%" }}
        >
          <ContactForm />
        </SectionContainer>
      </div>
    </Layout>
  );
}
