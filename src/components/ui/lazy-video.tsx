import { useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  type?: string;
  className?: string;
  controls?: boolean;
  loop?: boolean;
}

export function LazyVideo({ src, className, controls = true, loop = true }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!video.src) {
              video.src = src;
              video.load();
            }
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      controls={controls}
      playsInline
      muted
      loop={loop}
      preload="auto"
    />
  );
}
