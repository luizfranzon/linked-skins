import { ThemeSelector } from "./components/ThemeSelector";
import { Tabs, TabSwitcher } from "./components/TabSwitcher";
import { Footer } from "./components/Footer";
import { useState } from "react";

export function App() {
  const [currentTab, setCurrentTab] = useState<Tabs>("skins");

  return (
    <div className="relative">
      <TabSwitcher currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {
        currentTab === "skins" ? (
          <div className="flex flex-col items-center">
            <ThemeSelector />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h1>Configurações</h1>
          </div>
        )
      }

      <Footer />
    </div>
  );
}
