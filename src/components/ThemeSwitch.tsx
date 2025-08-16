import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icons";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  return (
    <div className="relative inline-block">
      <label className="cursor-pointer ">
        <input
          type="checkbox"
          className="invisible absolute inset-0"
          onChange={() => {
            const newTheme = theme === "dark" ? "light" : "dark";
            setTheme(newTheme);
            window.localStorage.setItem("theme", newTheme);
            newTheme === "dark"
              ? document.documentElement.classList.add("dark")
              : document.documentElement.classList.remove("dark");
          }}
        />
        {theme === "dark" ? <Sun /> : <Moon />}
      </label>
    </div>
  );
}
