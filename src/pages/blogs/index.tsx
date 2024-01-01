// src/pages/blogs/index.tsx

import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
    <div>
      <h1>My Daily Blogs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blogs/${post.slug}`}>{post.data.title}</Link>
          </li>
        ))}
      </ul>
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
