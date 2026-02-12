import { useRef, useEffect, useCallback } from "react";
import landingVideo from "@/assets/landing_page_video.mp4";

const FADE_DURATION = 1; // seconds before end to start fading

const LandingPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const timeLeft = video.duration - video.currentTime;
    if (timeLeft <= FADE_DURATION) {
      // Fade out as we approach the end
      video.style.opacity = String(timeLeft / FADE_DURATION);
    } else if (video.currentTime < FADE_DURATION) {
      // Fade back in at the start
      video.style.opacity = String(
        Math.min(1, video.currentTime / FADE_DURATION),
      );
    } else {
      video.style.opacity = "1";
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [handleTimeUpdate]);

  return (
    <div className="relative min-h-screen">
      {/* Fixed background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{ transition: "opacity 0.5s ease" }}
      >
        <source src={landingVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/60 z-0" />

      {/* Scrollable content on top */}
      <div className="relative z-10">
        <div className="min-h-screen flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default LandingPage;
