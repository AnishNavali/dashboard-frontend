"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Image from "next/image";
import { toast } from "sonner";
import { Eye, EyeOff, ShieldCheck, Lock } from "lucide-react";
import { NavigationBar } from "../dashboard/navigation-bar";
import Footer from "../footer/footer";
import { useAccountConfigStore } from "@/src/services/api/account-config/account-config-store";
import PasswordField from "../ui/password-field";
import { AnimatedOTPInput } from "../ui/otp-input";

function AccountConfigContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { loading, error, otpVerified, verifyOtp, setPassword, reset } = useAccountConfigStore();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [passData, setPassData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // 1. Check for email in query params
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
      sessionStorage.setItem("config_email", emailParam);
    } else {
      // 2. Fallback to session storage
      const storedEmail = sessionStorage.getItem("config_email");
      if (storedEmail) {
        setEmail(storedEmail);
      } else {
        // 3. If no email, redirect back to signup or home?
        // For now, let's just toast and stay
        // toast.error("No email found. Please check your link.");
      }
    }

    return () => reset();
  }, [searchParams, reset]);

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🖱️ Manual Submit Triggered - Email:", `"${email}"`, "OTP:", otp);
    
    if (!email || email.trim() === "") {
      toast.error("User email is missing. Please use the link sent to your email.");
      return;
    }

    try {
      await verifyOtp(email, otp);
      toast.success("OTP Verified! Please set your password.");
    } catch (err: any) {
      toast.error(err.message || "OTP verification failed");
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passData.password !== passData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (passData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      await setPassword(email, passData.password, passData.confirmPassword);
      toast.success("Account configured successfully! 🎉");
      sessionStorage.removeItem("config_email");

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err: any) {
      toast.error(err.message || "Failed to set password");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center pt-12 pb-32 px-4 relative overflow-hidden">
      {/* Background decoration - same as login */}
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
              {otpVerified ? "Set Your Password" : "Verify Your Account"}
            </h1>
            <p className="text-gray-400 text-sm mt-2 text-center">
              {otpVerified
                ? "Secure your account with a strong password"
                : `We've sent a code to ${email || 'your email'}`}
            </p>
          </div>

          {!otpVerified ? (
            <form className="space-y-8 flex flex-col items-center" onSubmit={handleOtpSubmit}>
              <div className="space-y-4 flex flex-col items-center w-full">
                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-blue-600" />
                  Enter OTP
                </Label>
                <AnimatedOTPInput
                  value={otp}
                  onChange={setOtp}
                  maxLength={6}
                />
              </div>

              <Button
                type="submit"
                disabled={loading || otp.length < 6}
                className="w-full h-12 rounded-xl text-sm font-semibold text-white
             bg-blue-600 hover:bg-blue-700
            shadow-lg shadow-blue-600/20
            active:scale-[0.98]
            transition-all duration-200"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handlePasswordSubmit}>
              <div className="space-y-4">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Lock size={16} className="text-blue-600" />
                    Email Address
                  </Label>
                  <Input
                    value={email}
                    readOnly
                    className="h-12 rounded-xl bg-slate-50/20 border-black/5 text-gray-400 cursor-not-allowed"
                  />
                </div>

                <div className="space-y-6">
                  <PasswordField
                    label="New Password"
                    placeholder="Create a strong password"
                    value={passData.password}
                    onChange={(val) => setPassData({ ...passData, password: val })}
                    showChecklist={true}
                    allowGenerate={true}
                  />

                  <PasswordField
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    value={passData.confirmPassword}
                    onChange={(val) => setPassData({ ...passData, confirmPassword: val })}
                    showChecklist={false}
                    allowGenerate={false}
                  />
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
                {loading ? "Configuring..." : "Get Started"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export function AccountConfig() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <NavigationBar />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center">Loading...</div>}>
        <AccountConfigContent />
      </Suspense>
      <Footer />
    </div>
  );
}
