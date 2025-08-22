'use client';
import { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ prevent SSR crash

    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = (currentProgress / scrollHeight) * 100;
        setCompletion(Number(progress.toFixed(2))); // ✅ number not string
      }
    };

    updateScrollCompletion(); // ✅ run once on mount
    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
