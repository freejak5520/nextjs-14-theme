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
    <main className="flex flex-col justify-center items-center min-h-dvh gap-6">
      <div className="text-neutral-950 dark:text-neutral-50">
        Now theme : {`${nowTheme || "Default"}`}
      </div>
      <button className="border border-neutral-700 dark:border-neutral-300 rounded-full px-8 py-1 text-neutral-950 dark:text-neutral-50" onClick={() => {
        setTheme(theme === "dark" ? "" : "dark");
      }}>Toggle</button>
    </main>
  );
}
