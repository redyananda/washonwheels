import { useState } from "react";
import { Check, Eye, EyeOff } from "lucide-react";
import "./LoginHero.css";
import { useAuth } from "@/lib/auth/store";
import { useNavigate } from "react-router";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(50, "Password must be at most 50 characters."),
});

const LoginHero = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsPending(true);
    try {
      const response = await axiosInstance.post("/users/login", {
        login: data.email,
        password: data.password,
      });

      toast.success("login success");

      login({
        email: response.data.email,
        name: response.data.name,
        objectId: response.data.objectId,
        userToken: response.data["user-token"],
        role: response.data.role
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("login failed");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="login-hero">
      <div className="login-hero-container">
        <div className="login-hero-left-container">
          <div className="login-hero-left-container-title">
            <div className="login-hero-left-container-title-place">
              <img src="./exterior.webp" alt="car-symbol" />
            </div>
            <p>WashOnWheels</p>
          </div>
          <h1>Welcome back to effortless.</h1>
          <p className="login-hero-left-container-desc">
            Sign in to book a wash, track your car, and manage your appointments
            - all in one place.
          </p>
          <div className="login-hero-left-container-list">
            <div className="login-hero-left-container-list-content">
              <div className="login-hero-left-container-list-symbol">
                <Check size={16} />
              </div>
              <p>Book a wash in seconds</p>
            </div>
            <div className="login-hero-left-container-list-content">
              <div className="login-hero-left-container-list-symbol">
                <Check size={16} />
              </div>
              <p>Track your car in real time</p>
            </div>
            <div className="login-hero-left-container-list-content">
              <div className="login-hero-left-container-list-symbol">
                <Check size={16} />
              </div>
              <p>Manage and reschedule anytime</p>
            </div>
          </div>
          <p className="login-hero-left-container-copyright">
            © 2026 WashOnWheels. All rights reserved.
          </p>
        </div>
        <div className="login-hero-right-container">
          <h1>Sign in</h1>
          <p className="login-hero-right-container-subtitle">
            Enter your details to continue.
          </p>

          <form id="form-login" onSubmit={form.handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <>
                  <label
                    htmlFor="form-login-email"
                    className="login-hero-right-container-label"
                  >
                    Email
                  </label>
                  <input
                    {...field}
                    id="form-login-email"
                    type="email"
                    placeholder="you@example.com"
                  />
                  {fieldState.invalid && (
                    <p className="login-hero-right-container-error">
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
                    htmlFor="form-login-password"
                    className="login-hero-right-container-label"
                  >
                    Password
                  </label>
                  <div className="login-hero-right-container-password">
                    <input
                      {...field}
                      id="form-login-password"
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
                    <p className="login-hero-right-container-error">
                      {fieldState.error?.message}
                    </p>
                  )}
                </>
              )}
            />
          </form>

          <button
            form="form-login"
            type="submit"
            disabled={isPending}
            className="login-hero-right-container-submit"
          >
            {isPending ? "Loading" : "Sign In"}
          </button>
          <p className="login-hero-right-container-signup">
            New to WashOnWheels? <a>Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginHero;
