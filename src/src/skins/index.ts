import dracula from './dracula.skin';
// Importe outros temas aqui

const themes = {
  dracula,
};

export const themesList = [
  dracula,
]

export type ThemesType = keyof typeof themes;

export { themes };