import { createTheming } from '@callstack/react-theme-provider';
import lightTheme from './lightTheme';

export const { ThemeProvider, withTheme, useTheme } = createTheming(lightTheme);
