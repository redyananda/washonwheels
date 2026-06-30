import './RegisterHero.css'
import { useState } from "react";
import { Check, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(50, "Name must be at most 50 characters."),
  email: z.email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(50, "Password must be at most 50 characters."),
});

const RegisterHero = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsPending(true);
    try {
      await axiosInstance.post("/users/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      toast.success("Sign up success");

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Sign up failed");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="register-hero">
      <div className="register-hero-container">
        <div className="register-hero-left-container">
          <div className="register-hero-left-container-title">
            <div className="register-hero-left-container-title-place">
              <img src="./exterior.webp" alt="car-symbol" />
            </div>
            <p>WashOnWheels</p>
          </div>
          <h1>Welcome to effortless.</h1>
          <p className="register-hero-left-container-desc">
            Sign up to book a wash, track your car, and manage your appointments
            - all in one place.
          </p>
          <div className="register-hero-left-container-list">
            <div className="register-hero-left-container-list-content">
              <div className="register-hero-left-container-list-symbol">
                <Check size={16} />
              </div>
              <p>Book a wash in seconds</p>
            </div>
            <div className="register-hero-left-container-list-content">
              <div className="register-hero-left-container-list-symbol">
                <Check size={16} />
              </div>
              <p>Track your car in real time</p>
            </div>
            <div className="register-hero-left-container-list-content">
              <div className="register-hero-left-container-list-symbol">
                <Check size={16} />
              </div>
              <p>Manage and reschedule anytime</p>
            </div>
          </div>
          <p className="register-hero-left-container-copyright">
            © 2026 WashOnWheels. All rights reserved.
          </p>
        </div>
        <div className="register-hero-right-container">
          <h1>Sign up</h1>
          <p className="register-hero-right-container-subtitle">
            Enter your details to continue.
          </p>

          <form id="form-register" onSubmit={form.handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <>
                  <label
                    htmlFor="form-register-name"
                    className="register-hero-right-container-label"
                  >
                    Name
                  </label>
                  <input
                    {...field}
                    id="form-register-name"
                    type="text"
                    placeholder="Your Name"
                  />
                  {fieldState.invalid && (
                    <p className="register-hero-right-container-error">
                      {fieldState.error?.message}
                    </p>
                  )}
                </>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <>
                  <label
                    htmlFor="form-register-email"
                    className="register-hero-right-container-label"
                  >
                    Email
                  </label>
                  <input
                    {...field}
                    id="form-register-email"
                    type="email"
                    placeholder="you@example.com"
                  />
                  {fieldState.invalid && (
                    <p className="register-hero-right-container-error">
                      {fieldState.error?.message}
                    </p>
                  )}
                </>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <>
                  <label
                    htmlFor="form-register-password"
                    className="register-hero-right-container-label"
                  >
                    Password
                  </label>
                  <div className="register-hero-right-container-password">
                    <input
                      {...field}
                      id="form-register-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                  </div>
                  {fieldState.invalid && (
                    <p className="register-hero-right-container-error">
                      {fieldState.error?.message}
                    </p>
                  )}
                </>
              )}
            />
          </form>

          <button
            form="form-register"
            type="submit"
            disabled={isPending}
            className="register-hero-right-container-submit"
          >
            {isPending ? "Loading" : "Sign Up"}
          </button>
          <p className="register-hero-right-container-signup">
            Have an Account on WashOnWheels? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default RegisterHero