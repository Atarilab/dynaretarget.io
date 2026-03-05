import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassTextOverlayProps {
  children: ReactNode;
  className?: string;
  /**
   * @default "rgba(0, 0, 0, 0.4)"
   * Background color with opacity
   */
  backgroundColor?: string;
  /**
   * @default true
   * Enable backdrop blur effect
   */
  blur?: boolean;
  /**
   * @default "8px"
   * Border radius
   */
  borderRadius?: string;
  /**
   * @default true
   * Add text shadow for better visibility
   */
  textShadow?: boolean;
}

export function GlassTextOverlay({
  children,
  className,
  backgroundColor = "rgba(0, 0, 0, 0.5)",
  blur = true,
  borderRadius = "2px",
  textShadow = true,
}: GlassTextOverlayProps) {
  return (
    <div
      className={cn("relative inline-block", className)}
      style={{
        backdropFilter: blur ? "blur(1 px) saturate(20%)" : "none",
        WebkitBackdropFilter: blur ? "blur(4px) saturate(120%)" : "none",
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        padding: "1.5rem 2rem",
        boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div
        className={cn(
          textShadow &&
            "drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
