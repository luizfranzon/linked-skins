import { useState } from "react";

type Tabs = "skins" | "config";

export function TabSwitcher() {
  const [currentTab, setCurrentTab] = useState<Tabs>("skins");

  const handleSelectTab = (tabName: Tabs) => setCurrentTab(tabName);

  const isActive = (tab: Tabs) => currentTab === tab;

  const tabClasses = "flex justify-center items-center py-2 rounded-t-xl border-collapse border-2 border-b-0 border-linkedrh-blue cursor-pointer";

  const inactiveTabClasses = "bg-zinc-200 border-t-linkedrh-blue/40 border-b-2";
  const activeTabClasses = "opacity-40";

  return (
    <div>
      <div className="w-full grid grid-cols-2 items-center justify-center border-collapse">
        {(["skins", "config"] as Tabs[]).map((tab) => (
          <div
            key={tab}
            onClick={() => handleSelectTab(tab)}
            className={`${tabClasses} ${
              !isActive(tab)
                ? `${inactiveTabClasses} ${
                    tab === "skins"
                      ? "border-r-0 border-l-linkedrh-blue/40"
                      : "border-l-0 border-r-linkedrh-blue/40"
                  }`
                : ""
            }`}
          >
            <span
              className={`font-bold text-lg select-none ${
                !isActive(tab) ? activeTabClasses : ""
              }`}
            >
              {tab === "skins" ? "Skins" : "Configurações"}
            </span>
          </div>
        ))}
      </div>
      <h1>{currentTab}</h1>
    </div>
  );
}
