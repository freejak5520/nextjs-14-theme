"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./utils";

export default function Home() {
  const [theme, setTheme] = useTheme();
  const [nowTheme, setNowTheme] = useState("");

  useEffect(() => {
    setNowTheme(theme);
  }, [theme]);

  return (
    <main>
      <button className="text-neutral-950 dark:text-neutral-50" onClick={() => {
        setTheme(theme === "dark" ? "" : "dark");
      }}>Up</button>
      <span className="text-neutral-950 dark:text-neutral-50">
        {`${nowTheme}`}
      </span>
    </main>
  );
}
