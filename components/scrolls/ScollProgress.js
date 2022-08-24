import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = Math.floor((winScroll / height) * 100);

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="h-[8px] w-screen bg-transparent mt-0 fixed z-40">
      <div className={`h-[5px] bg-gradient-to-r from-[#4737b5] via-[#435af1] to-[#b0b2ec]`} style={{ width: `${scrollTop}%` }}></div>
    </div>
  );
}
