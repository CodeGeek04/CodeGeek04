// src/pages/blogs/index.tsx

import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from "./blogs.module.css"; // Import the styles

interface Post {
  slug: string;
  data: {
    title: string;
    date: string;
  };
}

interface BlogIndexProps {
  posts: Post[];
}

const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blogs/${post.slug}`}>
          <div className={styles.blog}>
            <img
              className={styles.image}
              src={`/vscode.webp`}
              alt={post.data.title}
            />
            <div className={styles.overlay}>
              <div className={styles.title}>{post.data.title}</div>
              <div className={styles.date}>{post.data.date}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const blogPostsDirectory = path.join(process.cwd(), "src/pages/blogs");
  const fileNames = fs.readdirSync(blogPostsDirectory);

  const posts: Post[] = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(blogPostsDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent) as unknown as {
        data: { title: string; date: string };
      };

      return {
        slug: fileName.replace(/\.md$/, ""),
        data,
      };
    });

  return {
    props: {
      posts,
    },
  };
}

export default BlogIndex;
