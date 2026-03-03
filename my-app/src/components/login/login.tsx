/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "../../../lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Image from "next/image";
import { useLoginStore } from "@/src/services/api/login/login-store";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { InstallAppButton } from "../pwa/install-app-button";
import { NavigationBar } from "../dashboard/navigation-bar";
import Footer from "../footer/footer";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const login = useLoginStore((s) => s.login);
  const loading = useLoginStore((s) => s.loading);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignupError, setIsSignupError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSignupError(false);

    try {
      await login({ username, password });

      toast.success("Login successful! 🎉", {
        duration: 2000,
      });

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (err: any) {
      const errorMessage = err.message || "Login failed";

      if (errorMessage.includes("Please sign up to create an account")) {
        setIsSignupError(true);
        toast.error("Account not found", {
          description: "Please sign up to create an account",
          duration: 4000,
        });
      } else {
        toast.error(errorMessage, {
          duration: 3000,
        });
      }
      setError(errorMessage);
    }
  };

  const handleSignupRedirect = () => {
    router.push("/signup");
  };

  return (
    <div
      className={cn("min-h-screen flex flex-col relative", className)}
      {...props}
    >
      {/* Navbar at the top */}
      <NavigationBar />

      {/* Main content centered */}
      <div className="flex-1 flex items-center justify-center pt-12 pb-32 px-4 relative overflow-hidden">
        {/* Install App Button top right below navbar */}
        {/* <div className="absolute top-4 right-4 z-20">
          <InstallAppButton />
        </div> */}
        {/* Minimalist Background Elements */}
        <div className="absolute inset-0 z-0 opacity-[0.6] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}>
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `
                 radial-gradient(circle at 0% 0%, rgba(0,102,255,0.15) 0%, transparent 50%),
                 radial-gradient(circle at 100% 100%, rgba(0,102,255,0.15) 0%, transparent 50%)
               `
          }}>
        </div>

        <Card
          className="relative w-full max-w-md z-10
  bg-white border border-black/5
   shadow-[0_15px_40px_rgba(0,0,0,0.08),0_5px_15px_rgba(0,102,255,0.15)]
  rounded-[2.5rem] overflow-hidden"
        >

          <CardContent className="relative p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-sm border border-black/5 bg-slate-50 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h1 className="text-2xl font-bold text-gray-900 text-center mt-4">
                Welcome!
              </h1>
              <p className="text-gray-400 text-sm mt-2 text-center">
                Sign in to continue to your account
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <Label className="text-sm font-medium text-gray-700">
                  Username
                </Label>
                <Input
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12 rounded-xl bg-slate-50/50 border-black/10
              placeholder:text-gray-400
               focus:ring-2 focus:ring-blue-600/20
              focus:border-blue-600
              transition-all duration-200"
                  required
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <a
                    href="/forgot-password"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 rounded-xl bg-slate-50/50 border-black/10 pr-10
                placeholder:text-gray-400
                 focus:ring-2 focus:ring-blue-600/20
                focus:border-blue-600
                transition-all duration-200"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 
                text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl text-sm font-semibold text-white
             bg-blue-600 hover:bg-blue-700
            shadow-lg shadow-blue-600/20
            active:scale-[0.98]
            transition-all duration-200"
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6">
              <p className="text-sm text-center text-gray-500">
                Don&apos;t have an account?{" "}
                <a
                  href="/signup"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Sign up
                </a>
              </p>
            </div>

          </CardContent>
        </Card>
      </div>

      {/* Footer at the bottom */}
      <Footer />


    </div>
  );
}