import "./CreateBlogHero.css";
import { axiosInstance } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  author: z.string().min(1, "Author is required"),
  content: z.string().min(1, "Content is required"),
  thumbnail: z.instanceof(File, { message: "Thumbnail must be a file" }),
});

interface ResponseFileService {
  filePath: string;
  fileURL: string;
}

const CreateBlogHero = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      author: "",
      content: "",
      thumbnail: undefined,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsPending(true);
    try {
      const formData = new FormData();
      formData.append("file", data.thumbnail);
      const folderName = "blog-picture";
      // eslint-disable-next-line react-hooks/purity
      const fileName = Date.now() + Math.floor(Math.random() * 1000);
      const response = await axiosInstance.post<ResponseFileService>(
        `/files/${folderName}/${fileName}`,
        formData,
      );

      await axiosInstance.post("/data/Blogs", {
        thumbnail: response.data.fileURL,
        title: data.title,
        description: data.description,
        category: data.category,
        author: data.author,
        content: data.content,
      });

      toast.success("Create blog success!");

      navigate("/blog");
    } catch (error) {
      console.log(error);
      toast.error("Create blog failed!");
    } finally {
      setIsPending(false);
    }
  }


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  return (
    <div className="create-blog-hero">
      <form
        className="create-blog-hero-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>New Post</h2>
        <h1>Write a new article</h1>

        <div className="create-blog-hero-group">
          <p>Title</p>
          <input
            type="text"
            placeholder="Enter your blog title"
            {...register("title")}
          />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div className="create-blog-hero-group">
          <p>Description</p>
          <textarea
            placeholder="Write a brief description of your blog"
            {...register("description")}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>
        <div className="create-blog-hero-group">
          <p>Category</p>
          <input
            type="text"
            placeholder="Enter your blog category"
            {...register("category")}
          />
          {errors.category && <span>{errors.category.message}</span>}
        </div>
        <div className="create-blog-hero-group">
          <p>Author</p>
          <input
            type="text"
            placeholder="Enter your blog author"
            {...register("author")}
          />
          {errors.author && <span>{errors.author.message}</span>}
        </div>
        <div className="create-blog-hero-group">
          <p>Content</p>
          <textarea
            placeholder="Enter your blog content"
            {...register("content")}
          />
          {errors.content && <span>{errors.content.message}</span>}
        </div>
        <div className="create-blog-hero-group">
          <p>Thumbnail</p>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setValue("thumbnail", file);
            }}
          />
          {errors.thumbnail && <span>{errors.thumbnail.message}</span>}
        </div>

        <div className="create-blog-hero-publish">
          <button type="submit" disabled={isPending}>
            {isPending ? "Loading" : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogHero;
