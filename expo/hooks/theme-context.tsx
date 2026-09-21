import createContextHook from '@nkzw/create-context-hook';
import { useState, useMemo } from 'react';

export interface ThemeColors {
  primary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  accent: string;
  orange: string;
  darkOrange: string;
}

interface ThemeContextType {
  theme: 'dark';
  colors: ThemeColors;
}

export const [ThemeProvider, useTheme] = createContextHook<ThemeContextType>(() => {
  const [theme] = useState<'dark'>('dark');
  
  const colors: ThemeColors = {
    primary: '#FF6B00',
    background: '#000000',
    surface: '#1A1A1A',
    text: '#FFFFFF',
    textSecondary: '#999999',
    border: '#333333',
    accent: '#FF8C00',
    orange: '#FF6B00',
    darkOrange: '#CC5500'
  };

  return useMemo(() => ({
    theme,
    colors
  }), [theme]);
});