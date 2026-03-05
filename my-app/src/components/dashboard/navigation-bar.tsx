"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import { User, Settings, LogOut, Menu, X } from "lucide-react";
import Image from "next/image";
import { RippleButton } from "@/components/ripple-button";

const navbarItems = [
  // { title: "Demo", href: "/demo" },
  { title: "Guide", href: "/docs" },
  { title: "Pricing", href: "/pricing" },
  // { title: "About Us", href: "/about-us" },
  { title: "FAQ", href: "/faq" },
];

interface NavigationBarProps {
  /** Optional – pass from dashboard parent. If omitted, reads from localStorage. */
  userEmail?: string;
  showUserMenu?: boolean;
  setShowUserMenu?: (show: boolean) => void;
  /** Optional – pass from dashboard parent. If omitted, handled internally. */
  handleLogout?: () => void;
  /** Optional – pass from dashboard parent. If omitted, handled internally. */
  handleSettings?: () => void;
}

export const NavigationBar = ({
  userEmail: propUserEmail,
  handleLogout: propHandleLogout,
  handleSettings: propHandleSettings,
}: NavigationBarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isDashboard = pathname?.startsWith("/dashboard");
  const isHome = pathname === "/";

  // Internal auth state — used on public pages when no props are passed
  const [internalEmail, setInternalEmail] = useState("");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (propUserEmail === undefined) {
      const token = localStorage.getItem("auth_token");
      const email = localStorage.getItem("user_email") || "";
      if (token && email) setInternalEmail(email);
    }
  }, [propUserEmail]);

  const userEmail = propUserEmail !== undefined ? propUserEmail : internalEmail;

  const handleLogout = propHandleLogout ?? (() => {
    localStorage.removeItem("user_email");
    localStorage.removeItem("auth_token");
    localStorage.removeItem("token_type");
    router.push("/");
  });

  const handleSettings = propHandleSettings ?? (() => {
    router.push("/settings");
  });

  return (
    <>
      <div className="border-b border-white/20 bg-transparent backdrop-blur-md shadow-sm px-6 py-2 flex items-center justify-between sticky top-0 left-0 right-0 z-[100]">
        <Link href={isDashboard ? "/dashboard" : "/"} className="flex items-center gap-0">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-white/10 shadow-sm bg-white/5">
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="object-cover rounded-full"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent ml-2">
            ADRO
          </span>
        </Link>

        <div className="flex items-center gap-4">

          {/* ─── /dashboard: show ONLY user profile dropdown ─── */}
          {isDashboard && userEmail && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium text-slate-800">
                    {userEmail.split("@")[0]}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={handleSettings} className="cursor-pointer">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* ─── Desktop Nav Links (Hidden on mobile) ─── */}
          {!isDashboard && (
            <div className="hidden md:flex items-center gap-6 mr-2">
              {navbarItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}

          {/* ─── Desktop Auth/User Section (Hidden on mobile) ─── */}
          {!isDashboard && (
            <div className="hidden md:flex items-center gap-4">
              {!userEmail ? (
                <>
                  <RippleButton href="/login">Login</RippleButton>
                  <RippleButton href="/signup">Signup</RippleButton>
                </>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => router.push("/dashboard")}
                      className="w-9 h-9 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                    >
                      <User className="w-4 h-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="text-xs">
                    <p className="font-medium">{userEmail}</p>
                    <p className="text-primary-foreground/70">Go to Dashboard →</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          )}

          {/* ─── Mobile Menu Toggle (Visible only on mobile) ─── */}
          {!isDashboard && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          )}

        </div>

      </div>

      {/* ─── Mobile Menu Overlay (Moved outside main div to avoid clipping) ─── */}
      {!isDashboard && isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[52px] h-[calc(100vh-52px)] bg-white dark:bg-slate-950 z-[200] flex flex-col p-6 animate-in fade-in duration-300 shadow-2xl overflow-y-auto">
          <div className="flex flex-col gap-6 relative z-10">
            {navbarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2"
              >
                {item.title}
              </Link>
            ))}

            <div className="flex flex-col gap-4 mt-4">
              {!userEmail ? (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-3 text-center rounded-xl bg-slate-50 dark:bg-slate-900 font-medium text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-800"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-3 text-center rounded-xl bg-indigo-600 text-white font-medium shadow-md"
                  >
                    Signup
                  </Link>
                </>
              ) : (
                <Link
                  href="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 px-4 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white font-medium shadow-md"
                >
                  <User className="w-5 h-5" />
                  Go to Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
