// pages/blogs/[slug].tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Post {
  slug: string;
  data: {
    title: string;
    date: string;
  };
  content: string;
}

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.data.title}</h1>
      <p>{post.data.date}</p>
      {/* Render your blog content here */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export async function getStaticPaths() {
  const blogPostsDirectory = path.join(process.cwd(), "src/pages/blogs");
  const fileNames = fs.readdirSync(blogPostsDirectory);

  const paths = fileNames.map((fileName) => ({
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
  const { data, content } = matter(fileContent);

  return {
    props: {
      post: {
        slug,
        data,
        content,
      },
    },
  };
}

export default BlogPost;
