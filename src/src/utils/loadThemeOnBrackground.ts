import { themesList, ThemesType } from "../skins";
import { themeApplier } from "./themeApplier";

async function loadThemeOnBrackground() {
  console.log("Loading theme on background");
  const observer = new MutationObserver(async () => {
    const currentTheme = localStorage.getItem("theme") as ThemesType;

    if (currentTheme && currentTheme !== currentTheme) {
      const themeToApply = themesList.find(
        (theme) => theme.theme.title.toLowerCase() === currentTheme
      );

      if (!themeToApply) return;

      await themeApplier(themeToApply);
    }
  });

  observer.observe(document, { childList: true, subtree: true });
}

loadThemeOnBrackground();
