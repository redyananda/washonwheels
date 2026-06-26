import type { Blog } from "@/lib/blog/types";
import "./BlogHero.css";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { Link } from "react-router";

const formatDate = (timestamp: number) =>
  new Date(timestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const BlogHero = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);

  const getBlogs = async () => {
    try {
      const response = await axiosInstance.get<Blog[]>("/data/Blogs");
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getBlogs();
  }, []);

  const featured = blogs[0];
  const grids = blogs.slice(1);

  return (
    <div className="blog">
      <div className="blog-header">
        <h2>The blog</h2>
        <h1>Tips, guides &amp; car care</h1>
        <p>
          Everything we've learned about keeping cars spotless - shared so you
          can keep yours looking its best.
        </p>
      </div>

      {isPending && (
        <div className="blog-loading-container">
          <p className="blog-loading-content">
            <span className="loader"></span>
            <span className="text-animated"></span>
          </p>
        </div>
      )}

      {featured && (
        <Link to={`/blogs/${featured.objectId}`}>
          <div className="blog-featured">
            <div
              className="blog-featured-image"
              style={{ backgroundImage: `url(${featured.thumbnail})` }}
            ></div>
            <div className="blog-featured-content">
              <span className="blog-badge">{featured.category}</span>
              <h1>{featured.title}</h1>
              <p>{featured.description}</p>
              <div className="blog-meta">
                <span className="blog-meta-author">{featured.author}</span>
                <span>{formatDate(featured.created)}</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {!isPending && grids && (
        <div className="blog-filters">
          <button className="blog-filter blog-filter-active">All</button>
          <button className="blog-filter">Tips</button>
          <button className="blog-filter">Guides</button>
          <button className="blog-filter">Maintenances</button>
          <button className="blog-filter">Lifestyles</button>
        </div>
      )}

      <div className="blog-grid">
        {grids.map((grid) => (
            <Link to={`/blogs/${grid.objectId}`} className="blog-card" key={grid.objectId}>
              <div
                className="blog-card-image"
                style={{ backgroundImage: `url(${grid.thumbnail})` }}
              ></div>
              <div className="blog-card-content">
                <span className="blog-badge">{grid.category}</span>
                <h2>{grid.title}</h2>
                <p>{grid.description}</p>
                <div className="blog-meta">
                  <span>{formatDate(grid.created)}</span>
                </div>
              </div>
            </Link>
        ))}
      </div>

      <div className="blog-newsletter">
        <div className="blog-newsletter-text">
          <h2>Get car care tips in your inbox</h2>
          <p>One short, useful email a month. No spam, unsubscribe anytime.</p>
        </div>
        <div className="blog-newsletter-form">
          <input type="email" placeholder="you@example.com" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
