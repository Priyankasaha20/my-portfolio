"use client";

import { useState } from "react";
import LoadingAnimation from "./components/LoadingAnimation";
import Header from "./components/Header";
import Articles from "./components/Articles";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingAnimation onLoaded={handleLoadComplete} />
      ) : (
        <main className="min-h-screen bg-white">
          <Header />
          <Articles />
          <AboutMe />
          <Projects />
          <Contact />
        </main>
      )}
    </>
  );
}
