import { useParams } from "react-router";
import "./BlogDetailsHero.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import type { Blog } from "@/lib/blog/types";

const formatDate = (timestamp: number) =>
  new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const getInitials = (name: string) => {
  const words = name.trim().split(/\s+/);
  if (words.length === 0 || words[0] === "") return "";

  const firstInitial = words[0].charAt(0);
  const lastInitial = words[words.length - 1].charAt(0);

  return (firstInitial + lastInitial).toUpperCase();
};

const BlogDetailsHero = () => {
  const params = useParams();

  const [blog, setBlog] = useState<Blog | null>(null);
  const getBlog = async () => {
    try {
      const response = await axiosInstance.get(
        `/data/Blogs/${params.objectId}`,
      );
      setBlog(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getBlog();
  }, []);

  return (
    <div className="blog-details-hero">
      <h1>{blog?.title}</h1>
      <h2>{blog?.description}</h2>
      <div className="blog-details-hero-author">
        <div className="blog-details-hero-author-circle">{blog?.author ? getInitials(blog?.author) : ""}</div>
        <div className="blog-details-hero-author-desc">
          <h2 className="blog-details-hero-author-name">{blog?.author}</h2>
          <p className="blog-details-hero-author-date">
            {blog?.created ? formatDate(blog.created) : ""}
          </p>
        </div>
      </div>
      <div className="blog-details-hero-img">
        <img src={blog?.thumbnail} alt={blog?.title} />
      </div>
      <div className="blog-details-hero-content">
        <p>{blog?.content}</p>
      </div>
    </div>
  );
};

export default BlogDetailsHero;
