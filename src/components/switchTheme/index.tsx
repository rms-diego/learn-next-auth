'use client';
import { Suspense, use, useEffect } from 'react';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { useTheme } from 'next-themes';

export function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  function handleChangeTheme() {
    if (theme === 'light') {
      return setTheme('dark');
    }

    return setTheme('light');
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <Label htmlFor="theme-switch self-end">Mudar de tema</Label>
      <Switch
        id="theme-switch"
        onClick={handleChangeTheme}
      />
    </div>
  );
}
