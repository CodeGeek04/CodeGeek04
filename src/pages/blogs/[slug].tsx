// src/pages/blogs/[slug].tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React, { useEffect, useRef } from "react";
import styles from "./slug.module.css"; // Import the styles

interface Post {
  slug: string;
  data: {
    title: string;
    date: string;
    image: string;
    image2: string;
    introduction: string;
    mainContent: string;
    conclusion: string;
  };
}

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show overlay on page load
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "1";
    }
  }, []);

  return (
    <div className={styles.blogPostContainer}>
      <div className={styles.header}>
        <div className={styles.imageContainer}>
          <img
            src={post.data.image}
            alt={post.data.title}
            className={styles.image}
          />
          <div className={styles.overlay} ref={overlayRef}>
            <div className={styles.overlayText}>{post.data.title}</div>
            <p className={styles.overlayText}>{post.data.date}</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <section>
          <p className={styles.paragraph}>{post.data.introduction}</p>
        </section>
        <br />
        <br />
        <section>
          <p className={styles.paragraph}>{post.data.mainContent}</p>
        </section>
        <br />
        <section>
          <img src={post.data.image2} alt="Image2" className={styles.image2} />
        </section>
        <br />
        <section>
          <p className={styles.paragraph}>{post.data.conclusion}</p>
        </section>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const blogPostsDirectory = path.join(process.cwd(), "src/pages/blogs");
  const fileNames = fs.readdirSync(blogPostsDirectory);

  const paths = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      params: { slug: fileName.replace(/\.md$/, "") },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), `src/pages/blogs/${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    props: {
      post: {
        slug,
        data,
      },
    },
  };
}

export default BlogPost;
