"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function AdPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) {
    return null;
  } else {
    return (
      <div>
        <div className="fixed top-0 left-0 w-full h-full z-90 bg-black/75"></div>
        <div className="fixed top-1/2 left-1/2 z-91 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-2xl hover:scale-101 transition bg-white/80 p-2 max-w-full w-[90%] sm:w-auto">
          <a target="_blank" href="https://taillens.io/?aff=zmn621">
            <Image
              width={512}
              height={512}
              src="/twlens.jpg"
              className="w-md rounded-lg"
              alt="taillens"
              priority={false}
            />
          </a>
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-4 right-4 text-white/50 cursor-pointer hover:scale-110 transition"
            aria-label="close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-11.414L9.172 7.757L7.757 9.172L10.586 12l-2.829 2.828l1.415 1.415L12 13.414l2.828 2.829l1.415-1.415L13.414 12l2.829-2.828l-1.415-1.415z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
