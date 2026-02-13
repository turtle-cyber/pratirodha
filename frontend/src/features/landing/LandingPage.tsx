import { useRef, useEffect, useCallback } from "react";
import landingVideo from "@/assets/landing_page_video.mp4";
import {
  ArrowRight,
  HeartPulse,
  GitBranch,
  ShieldAlert,
  Lock,
  CircleCheck,
} from "lucide-react";
import GlassSurface from "@/components/GlassSurface";

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
          {/*Deterministic Defense for IT Networks*/}
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
              <button className="cursor-pointer bg-[rgba(193,0,7,0.2)] hover:bg-[rgba(193,0,7,0.4)] flex items-center gap-x-2 p-3 rounded-md border border-[#464e5d] backdrop-blur-2xl">
                <span className="text-xs">Open System Overview</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="cursor-pointer bg-[rgba(29,41,61,0.2)] hover:bg-[rgba(29,41,61,0.4)] flex items-center p-3 rounded-md border border-[#464e5d] backdrop-blur-2xl">
                <span className="text-xs">How it works</span>
              </button>
            </div>
          </div>

          {/*How Pratirodha works*/}
          <div
            className="w-full h-[55vh]"
            style={{
              background: "linear-gradient(to bottom, #0F172B, transparent)",
            }}
          >
            <div className="h-full flex items-center justify-center">
              <div className="w-full max-w-7xl px-8 text-left flex flex-col">
                <span className="font-sf font-bold tracking-wider text-3xl">
                  How Pratirodha Works
                </span>
                <span className="font-sf my-4 text-sm text-[#90A1B9]">
                  A closed loop system for threat elimiation
                </span>

                {/*Feature Cards Grid*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <GlassSurface
                    width="100%"
                    height={250}
                    style={{ backgroundColor: "#0F172B66" }}
                  >
                    <div className="flex flex-col w-full h-full p-4">
                      <div className="bg-[#82181A33] p-2 rounded-md w-fit">
                        <HeartPulse className="text-[#FB2C36]" size={24} />
                      </div>
                      <span className="font-sf mt-3 tracking-wide">
                        Behavioral Drift Detection
                      </span>
                      <span className="text-[#90A1B9] font-sf mt-1 leading-relaxed">
                        Continuously monitors baseline execution patterns.
                        Deviations are flagged instantly without relying on
                        signature databases.
                      </span>
                    </div>
                  </GlassSurface>

                  <GlassSurface
                    width="100%"
                    height={250}
                    style={{ backgroundColor: "#0F172B66" }}
                  >
                    <div className="flex flex-col w-full h-full p-4">
                      <div className="bg-[#82181A33] p-2 rounded-md w-fit">
                        <GitBranch className="text-[#FB2C36]" size={24} />
                      </div>
                      <span className="font-sf mt-3 tracking-wide">
                        Process Chain Attribution
                      </span>
                      <span className="text-[#90A1B9] font-sf mt-1 leading-relaxed">
                        Maps every execution to its origin. We construct a
                        complete lineage of process spawning to identify root
                        cause immediately.
                      </span>
                    </div>
                  </GlassSurface>

                  <GlassSurface
                    width="100%"
                    height={250}
                    style={{ backgroundColor: "#0F172B66" }}
                  >
                    <div className="flex flex-col w-full h-full p-4">
                      <div className="bg-[#82181A33] p-2 rounded-md w-fit">
                        <ShieldAlert className="text-[#FB2C36]" size={24} />
                      </div>
                      <span className="font-sf mt-3 tracking-wide">
                        Deception-Validated Certainty
                      </span>
                      <span className="text-[#90A1B9] font-sf mt-1 leading-relaxed">
                        Strategic decoy assets validate malicious intent.
                        Interaction with these assets confirms a breach with
                        100% certainty.
                      </span>
                    </div>
                  </GlassSurface>

                  <GlassSurface
                    width="100%"
                    height={250}
                    style={{ backgroundColor: "#0F172B66" }}
                  >
                    <div className="flex flex-col w-full h-full p-4">
                      <div className="bg-[#82181A33] p-2 rounded-md w-fit">
                        <Lock className="text-[#FB2C36]" size={24} />
                      </div>
                      <span className="font-sf mt-3 tracking-wide">
                        Deterministic Isolation
                      </span>
                      <span className="text-[#90A1B9] font-sf mt-1 leading-relaxed">
                        Automated containment protocols execute instantly upon
                        validated threats, severing network access to affected
                        nodes.
                      </span>
                    </div>
                  </GlassSurface>
                </div>
              </div>
            </div>
          </div>

          {/*Security Without Uncertainty*/}
          <div
            className="w-full"
            style={{
              background: "linear-gradient(to bottom, #0F172B, transparent)",
            }}
          >
            <div className="flex items-start justify-center py-16">
              <div className="w-full max-w-7xl px-8 flex gap-12">
                {/* Left Side */}
                <div className="flex flex-col w-[40%]">
                  <h2 className="font-sf font-bold text-2xl tracking-wide">
                    Security Without Uncertainty
                  </h2>
                  <p className="text-sm text-[#90A1B9] mt-4 leading-relaxed">
                    Legacy EDR solutions rely on probability, flooding your team
                    with "maybe" threats. Pratirodha is built on certainty. We
                    define the known-good state and rigorously enforce it.
                  </p>

                  <hr className="border-[#1E293B] my-8" />

                  <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-3 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#FB2C36] shrink-0" />
                      Sub-millisecond containment
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#FB2C36] shrink-0" />
                      Kernel-level visibility
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#FB2C36] shrink-0" />
                      Immutable audit logs
                    </li>
                  </ul>
                </div>

                {/* Right Side - 2x2 Grid */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <GlassSurface
                    width="100%"
                    height={180}
                    style={{ backgroundColor: "#0F172B66" }}
                  >
                    <div className="flex flex-col w-full h-full p-4">
                      <div className="bg-[#82181A33] p-2 rounded-md w-fit">
                        <CircleCheck className="text-[#FB2C36]" size={22} />
                      </div>
                      <span className="font-sf font-semibold mt-3 text-sm tracking-wide">
                        No Probabilistic Alerts
                      </span>
                      <span className="text-xs text-[#90A1B9] font-sf mt-1 leading-relaxed">
                        We don't guess. Alerts are only generated when
                        deterministic rules are violated.
                      </span>
                    </div>
                  </GlassSurface>

                  <GlassSurface
                    width="100%"
                    height={180}
                    style={{ backgroundColor: "#0F172B66" }}
                  >
                    <div className="flex flex-col w-full h-full p-4">
                      <div className="bg-[#82181A33] p-2 rounded-md w-fit">
                        <CircleCheck className="text-[#FB2C36]" size={22} />
                      </div>
                      <span className="font-sf font-semibold mt-3 text-sm tracking-wide">
                        Zero Alert Fatigue
                      </span>
                      <span className="text-xs text-[#90A1B9] font-sf mt-1 leading-relaxed">
                        Your SOC team sees actionable intelligence, not noise.
                        99% reduction in false positives.
                      </span>
                    </div>
                  </GlassSurface>

                  <GlassSurface
                    width="100%"
                    height={180}
                    style={{ backgroundColor: "#0F172B66" }}
                  >
                    <div className="flex flex-col w-full h-full p-4">
                      <div className="bg-[#82181A33] p-2 rounded-md w-fit">
                        <CircleCheck className="text-[#FB2C36]" size={22} />
                      </div>
                      <span className="font-sf font-semibold mt-3 text-sm tracking-wide">
                        No Operational Disruption
                      </span>
                      <span className="text-xs text-[#90A1B9] font-sf mt-1 leading-relaxed">
                        Isolation is surgical. Only the compromised processes or
                        nodes are contained, operations intact.
                      </span>
                    </div>
                  </GlassSurface>

                  <GlassSurface
                    width="100%"
                    height={180}
                    style={{ backgroundColor: "#0F172B66" }}
                  >
                    <div className="flex flex-col w-full h-full p-4">
                      <div className="bg-[#82181A33] p-2 rounded-md w-fit">
                        <CircleCheck className="text-[#FB2C36]" size={22} />
                      </div>
                      <span className="font-sf font-semibold mt-3 text-sm tracking-wide">
                        Explainable Security
                      </span>
                      <span className="text-xs text-[#90A1B9] font-sf mt-1 leading-relaxed">
                        Every automated action is backed by a transparent,
                        auditable logic chain.
                      </span>
                    </div>
                  </GlassSurface>
                </div>
              </div>
            </div>
          </div>

          {/*Ready for Deterministic Protection*/}
          <div
            className="w-full"
            style={{
              background: "linear-gradient(to bottom, #0F172B, transparent)",
            }}
          >
            <div className="flex flex-col items-center justify-center py-20">
              <h2 className="font-sf font-bold text-3xl tracking-wide text-center">
                Ready for Deterministic Protection?
              </h2>
              <p className="text-sm text-[#90A1B9] mt-4 text-center max-w-lg">
                Transition from reactive hunting to proactive elimination. See
                your network's true posture now.
              </p>
              <button className="bg-[rgba(193,0,7,0.3)] flex items-center gap-x-2 px-6 py-3 rounded-md border border-[#464e5d] backdrop-blur-2xl mt-8 hover:bg-[rgba(193,0,7,0.5)] transition-colors">
                <span className="text-sm font-sf font-medium">
                  Enter System Overview
                </span>
              </button>
              <span className="text-xs text-[#90A1B9] mt-4">
                Live System Posture • Real-time Data
              </span>
            </div>
          </div>

          {/*Footer*/}
          <div className="w-full py-6 bg-[#020618] flex items-center justify-center">
            <span className="text-xs text-[#90A1B9]">
              © 2026 Turtleneck Security Systems Pvt Ltd. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
