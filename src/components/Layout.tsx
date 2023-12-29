// components/Layout.js
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import { ReactNode } from "react";
import styles from "./Layout.module.css"; // Create a separate CSS file for styles
import { ParallaxProvider } from "react-scroll-parallax";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ParallaxProvider>
      <div className={styles.layout}>
        <TopBar />
        {children}
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Layout;
