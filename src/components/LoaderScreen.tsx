"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function LoaderScreen({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

 
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Space") {
      setShowLoader(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasLoadedThisSession = sessionStorage.getItem("hasLoadedThisSession");

      if (!hasLoadedThisSession) {
        sessionStorage.setItem("hasLoadedThisSession", "true");

        const timer = setTimeout(() => {
          setShowLoader(false);
        }, 9000); 

       
        window.addEventListener("keydown", handleKeyDown);

        return () => {
          clearTimeout(timer);
          window.removeEventListener("keydown", handleKeyDown);
        };
      } else {
        setShowLoader(false);
      }
    }
  }, []);

  if (showLoader) {
    return <Loader />;
  }

  return <>{children}</>;
}
