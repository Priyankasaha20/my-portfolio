"use client"

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LoadingAnimation = ({ onLoaded }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const newspaperRef = useRef();
  const crumbledOverlayRef = useRef();

  useEffect(() => {
    // Newspaper crumbling effect (initial)
    gsap.set(newspaperRef.current, { scale: 0.8, rotate: -15, opacity: 1 });
    gsap.set(crumbledOverlayRef.current, { opacity: 1 });

    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationComplete(true);
        onLoaded();
      },
    });

    tl.to(newspaperRef.current, {
      duration: 1.5,
      scale: 1,
      rotate: 0,
      ease: "power2.out",
    })
      .to(crumbledOverlayRef.current, {
        duration: 1,
        opacity: 0,
        ease: "power2.inOut",
      }, "-=1.2") // Overlap this with the newspaper animation
      .to(newspaperRef.current, {
        duration: 1,
        scaleX: 1.05,
        scaleY: 1.02,
        ease: "elastic.out(1, 0.5)",
      }); // Final smoothing out effect

    return () => {
      tl.kill(); // Clean up on unmount
    };
  }, [onLoaded]);

  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      {!animationComplete && (
        <div
          ref={newspaperRef}
          className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg"
        >
          <h1 className="text-4xl font-bold text-center">Loading Your Portfolio...</h1>
          <p className="text-center">Opening the newspaper...</p>

          {/* Crumbled Paper Simulation */}
          <div
            ref={crumbledOverlayRef}
            className="w-full h-full absolute top-0 left-0 bg-gray-500 opacity-50"
            style={{
              backgroundImage: 'url("/path-to-crumbled-paper-texture.png")', // You can use an actual image for a more realistic effect
              backgroundSize: "cover",
              zIndex: 1,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LoadingAnimation;
