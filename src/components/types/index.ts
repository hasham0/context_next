export interface ThemeContextType {
  themes: colTs[];
}

export type colTs = {
  btnLabel: string;
  color: string;
  btnFunc?: () => void;
};
