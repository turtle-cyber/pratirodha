import { useRef, useEffect, useCallback } from "react";
import landingVideo from "@/assets/landing_page_video.mp4";
import { ArrowRight } from "lucide-react";

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
    <div className="relative h-full">
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
      <div className="fixed inset-0 bg-[#020618]/60 z-0 backdrop-blur-2xs" />

      {/* Scrollable content on top */}
      <div className="relative z-10">
        <div className="h-[calc(100vh-4rem)]">
          <div className="w-full h-[45vh] flex flex-col items-center justify-center">
            <span className="md:text-4xl lg:text-5xl xl:text-6xl font-sf font-bold text-center">
              Deterministic Defense <br /> for IT Networks
            </span>

            <span className="text-sm text-[#90A1B9] text-center mt-4">
              Pratirodha eliminates lateral movement through automated isolation
              chains. <br /> Stop relying on probabilistic alerts—enforce
              deterministic security logic that mathematically guarantees
              containment.
            </span>

            <div className="flex items-center justify-between mt-4 gap-x-8">
              <button className="bg-[rgba(193,0,7,0.2)] flex items-center gap-x-2 p-2 rounded-md border border-[#464e5d] backdrop-blur-2xl">
                <span className="text-xs">Open System Overview</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="bg-[rgba(29,41,61,0.2)] flex items-center p-2 rounded-md border border-[#464e5d] backdrop-blur-2xl">
                <span className="text-xs">How it works</span>
              </button>
            </div>
          </div>

          {/*How Pratirodha works*/}
          <div
            className="w-full h-[50vh]"
            style={{
              background: "linear-gradient(to bottom, #0F172B, transparent)",
            }}
          >
            <div className="h-full flex items-center justify-center">
              <span className="font-bold tracking-wider">How it works</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
