import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CreateBlogHero from "@/components/sections/create-blog/CreateBlogHero";
import { useAuth } from "@/lib/auth/store"
import '../index.css'
import { House } from 'lucide-react';
import { Link } from "react-router";



const CreateBlog = () => {
  const { user } = useAuth();
  return (
    <div>
      <Navbar />
      {user?.role==="ADMIN" ? (<CreateBlogHero />): (
        <div className="create-blog-admin-only">
          <div className="create-blog-admin-only-container">
            <img src="./lock.webp" alt="lock-pict" />
            <h2>Admins only</h2>
            <h1>This page is restricted</h1>
            <p>You don't have permission to view this page - it's reserved for administrators. If you think this is a mistake, reach out to your team admin.</p>
            <Link to="/">
              <button className="create-blog-admin-only-container-btn">{<House />} Back to home</button>
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CreateBlog;
