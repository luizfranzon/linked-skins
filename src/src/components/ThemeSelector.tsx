import { FormEvent, useEffect, useState } from "react";
import { ThemesType, themesList } from "../skins"
import { themeApplier } from "../utils/themeApplier";

export function ThemeSelector() {

  useEffect(() => {
    const theme = localStorage.getItem("theme") as ThemesType;

    if (theme) {
      setCurrentTheme(theme);
      findThemeAndApply(currentTheme);
      return;
    }

    console.log("No theme saved in local storage");
  }, [])

  const [currentTheme, setCurrentTheme] = useState<ThemesType>("dracula");

  async function handleChangeTheme(event: FormEvent) {

    console.log("Changing theme");

    event.preventDefault();
    localStorage.setItem("theme", currentTheme.toLowerCase());

    await findThemeAndApply(currentTheme);
  }

  async function findThemeAndApply(themeToApplyFromParams: ThemesType) {
    const themeToApply = themesList.find(theme => theme.theme.title.toLowerCase() === themeToApplyFromParams);
    
    if (!themeToApply) return;

    await themeApplier(themeToApply)
  }

  return (
    <form
      onSubmit={handleChangeTheme}
      action=""
      className="flex flex-col items-center gap-4"
    >
      <div className="flex flex-col gap-1 mt-8">
        <label className="ml-1" htmlFor="theme">
          Tema:
        </label>
        <select
          onChange={(event) => setCurrentTheme(event.target.value as ThemesType)}
          value={currentTheme}
          className="bg-white p-2 rounded-xl border border-zinc-300 w-40"
          name="theme"
          id="theme"
        >
          <option value="Dracula">Dracula</option>
          <option value="Skin 2">Skin 2</option>
          <option value="Skin 3">Skin 3</option>
          <option value="Skin 4">Skin 4</option>
          <option value="Skin 5">Skin 5</option>
          <option value="Skin 6">Skin 6</option>
          <option value="Skin 7">Skin 7</option>
          <option value="Skin 8">Skin 8</option>
          <option value="Skin 9">Skin 9</option>
          <option value="Skin 10">Skin 10</option>
        </select>
      </div>

      <button
        className="px-4 py-3 bg-linkedrh-green hover:bg-linkedrh-green/80 transition-all rounded-xl font-bold text-white cursor-pointer"
        type="submit"
      >
        Aplicar tema
      </button>
    </form>
  );
}
