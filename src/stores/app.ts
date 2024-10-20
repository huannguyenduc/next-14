import { ThemeType } from '@/interfaces';
import { create } from 'zustand';

type AppState = {
  theme: ThemeType;
};

type AppAction = {
  updateTheme: (newTheme: AppState['theme']) => void;
};

const useAppState = create<AppState & AppAction>((set) => ({
  theme: 'light',
  updateTheme: (newTheme) => set(() => ({ theme: newTheme })),
}));

export default useAppState;
