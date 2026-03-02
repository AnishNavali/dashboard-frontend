"use client";

import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  rippleColor?: string;
}

export function RippleButton({
  children,
  className = "",
  href,
  rippleColor = "bg-indigo-600",
  ...props
}: RippleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripple, setRipple] = useState<{
    x: number;
    y: number;
    size: number;
    key: number;
    isLeaving?: boolean;
  } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const createRipple = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isHovered || !buttonRef.current) return;
      setIsHovered(true);

      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setRipple({ x, y, size, key: Date.now() });
    },
    [isHovered]
  );

  const removeRipple = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (event.target !== event.currentTarget) return;
      setIsHovered(false);

      const button = buttonRef.current;
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setRipple({ x, y, size, key: Date.now(), isLeaving: true });
    },
    []
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current || !isHovered || !ripple) return;

      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setRipple((prev) => (prev ? { ...prev, x, y } : null));
    },
    [isHovered, ripple]
  );

  const buttonContent = (
    <button
      ref={buttonRef}
      className={`relative flex items-center justify-center overflow-hidden rounded-md border border-indigo-600/30 px-5 py-2 text-sm font-medium text-indigo-600 transition-colors duration-[600ms] hover:text-white ${className}`}
      onMouseEnter={(e) => {
        if (e.target === e.currentTarget) {
          createRipple(e);
        }
      }}
      onMouseLeave={(e) => {
        if (e.target === e.currentTarget) {
          removeRipple(e);
        }
      }}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <span className="relative z-[2]">{children}</span>

      <AnimatePresence>
        {ripple && (
          <motion.span
            key={ripple.key}
            className={`absolute rounded-full ${rippleColor} pointer-events-none z-[1]`}
            style={{
              width: ripple.size,
              height: ripple.size,
              left: ripple.x,
              top: ripple.y,
              x: "-50%",
              y: "-50%",
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: ripple.isLeaving ? 0 : 1,
              x: "-50%",
              y: "-50%",
            }}
            exit={{ scale: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            onAnimationComplete={() => {
              if (ripple.isLeaving) {
                setRipple(null);
              }
            }}
          />
        )}
      </AnimatePresence>
    </button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}