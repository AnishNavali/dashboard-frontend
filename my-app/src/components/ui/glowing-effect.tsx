"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
    blur?: number;
    inactiveZone?: number;
    proximity?: number;
    spread?: number;
    variant?: "default" | "white";
    glow?: boolean;
    borderWidth?: number;
    disabled?: boolean;
    movementDuration?: number;
    className?: string;
}

const GlowingEffect = memo(
    ({
        blur = 0,
        inactiveZone = 0.7,
        proximity = 0,
        spread = 20,
        variant = "default",
        glow = false,
        borderWidth = 1,
        disabled = true,
        movementDuration = 2,
        className,
    }: GlowingEffectProps) => {
        const containerRef = useRef<HTMLDivElement>(null);

        const handleMove = useCallback(
            (e?: MouseEvent | { x: number; y: number }) => {
                if (!containerRef.current) return;

                const element = containerRef.current;
                const { left, top, width, height } = element.getBoundingClientRect();

                if (e && "clientX" in e) {
                    const mouseX = e.clientX - left;
                    const mouseY = e.clientY - top;

                    const centerX = width / 2;
                    const centerY = height / 2;
                    const distX = Math.abs(mouseX - centerX) / centerX;
                    const distY = Math.abs(mouseY - centerY) / centerY;

                    if (distX < inactiveZone && distY < inactiveZone) {
                        element.style.setProperty("--glow-opacity", "0");
                        return;
                    }

                    element.style.setProperty("--glow-x", `${mouseX}px`);
                    element.style.setProperty("--glow-y", `${mouseY}px`);
                    element.style.setProperty("--glow-opacity", "1");
                }
            },
            [inactiveZone]
        );

        useEffect(() => {
            if (disabled) return;

            const handleMouseMove = (e: MouseEvent) => handleMove(e);
            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, [disabled, handleMove]);

        return (
            <div
                ref={containerRef}
                style={
                    {
                        "--glow-spread": `${spread}px`,
                        "--glow-blur": `${blur}px`,
                        "--glow-border-width": `${borderWidth}px`,
                        "--glow-proximity": `${proximity}px`,
                        "--glow-movement-duration": `${movementDuration}s`,
                    } as React.CSSProperties
                }
                className={cn(
                    "pointer-events-none absolute -inset-px rounded-[inherit] border opacity-0 transition-opacity",
                    glow &&
                    "opacity-100 [background:radial-gradient(circle_at_var(--glow-x,50%)_var(--glow-y,50%),var(--glow-color,rgba(120,119,198,0.3))_0%,transparent_var(--glow-spread,20px))]",
                    variant === "white" && "[--glow-color:rgba(255,255,255,0.15)]",
                    disabled && "!opacity-100 animate-pulse",
                    className
                )}
            />
        );
    }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
