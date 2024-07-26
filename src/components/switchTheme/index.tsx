'use client';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { useTheme } from 'next-themes';

export function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  const currentTheme = theme === 'light' ? 'escuro' : 'claro';

  function handleChangeTheme() {
    if (theme === 'light') return setTheme('dark');

    return setTheme('light');
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <Label htmlFor="theme-switch">Trocar para tema {currentTheme}</Label>
      <Switch
        id="theme-switch"
        onClick={handleChangeTheme}
      />
    </div>
  );
}
