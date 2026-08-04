"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Deferring to an effect (rather than reading at render time) avoids a
    // hydration mismatch, since the server can't know the persisted theme.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="text-light-gray hover:text-light-gray-70 block px-1.5 py-1.5 text-[length:var(--fs-8)] transition-colors sm:text-[14px] lg:text-[15px]"
    >
      {mounted ? (isDark ? "Light" : "Dark") : ""}
    </button>
  );
}
