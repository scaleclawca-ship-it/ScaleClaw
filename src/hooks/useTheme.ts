import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check local storage or system preference
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    // We default to dark if no preference, since the site was originally dark
    const initialTheme = storedTheme || 'dark'; 
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
}
