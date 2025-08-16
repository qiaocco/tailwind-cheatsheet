"use client"

import { useEffect, useRef, useState } from 'react';

export default function SearchInput() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const kbdRef = useRef<HTMLSpanElement>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        setQuery("")
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Cleanup
    };
  }, []);

  useEffect(() => {
    const details = document.querySelectorAll("details");
      if (query === "") {
          details.forEach( el => {
              el.classList.remove("hidden")
              el.open = false
          } );
      }
      else if (query.length >= 2) {
          details.forEach((el) => {
              const h2Text = el.querySelector('h2')?el.querySelector('h2').textContent:'';
              const h3Text = el.querySelector('h3')?el.querySelector('h3').textContent:'';
              // const tdText = el.querySelectorAll('td')?el.querySelectorAll('td').textContent:'';

              (h2Text+h3Text).toLowerCase().includes(query.toLowerCase())
                  ? el.classList.remove("hidden")
                  : el.classList.add("hidden");
              // Open only the ones that does not have the word "Color"
              el.querySelector('h3')?.textContent?.includes('Color') ? el.open = false : el.open = true;
      });
    }
  }, [query]);

  return (
    <div className="w-full relative">
      <input
        ref={searchInputRef}
        onFocus={() => {
          kbdRef.current?.classList.replace('opacity-100', 'opacity-0');
          searchInputRef.current?.select();
        }}
        onBlur={() => kbdRef.current?.classList.replace("opacity-0", "opacity-100")}
        type="text"
        className="w-full bg-transparent focus:outline-none text-sm border-2 border-sky-500 px-2 py-2 rounded-md flex justify-center items-center gap-2"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <kbd
        ref={kbdRef}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-sky-500 text-white px-1 rounded text-xs opacity-100 transition p-1"
      >⌘ K</kbd
      >
    </div>
  )
}