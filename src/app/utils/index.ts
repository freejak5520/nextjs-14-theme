import { useCallback, useState } from "react";

export function useTheme(): [string, (value: string) => void] {
  const key = "theme";
  const [update, setUpdate] = useState(0);

  const getValue = useCallback(() => {
    try {
      const value = window.localStorage.getItem(key);

      return value;
    } catch { }

    return null;
  }, [update]);

  const setValue = useCallback((value: string) => {
    try {
      window.localStorage.setItem(key, value);
    } catch { }
  }, []);

  const [theme, _setTheme] = useState(() => {
    return getValue();
  });

  const setTheme = useCallback((value: string) => {
    setValue(value);
    _setTheme(value);
    setUpdate((current) => current + 1);
    try {
      document.documentElement.dataset.theme = value;
    } catch{}
  }, [setValue]);

  return [theme ?? "", setTheme];
}