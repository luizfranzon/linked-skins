
export interface LinkedSkinThemeColors{
  theme: {
    author?: string;
    title: string;
  }
  header: {
    backgroundColor: string;
    iconsColor: string;
    profilePicture: string;
    joinLogoImgSrc: string;
    companyLogoImgSrc: string;
    navigationBar: {
      color: string;
      lineColor: string;
      textColor: string;
      iconsColor: string;
    }
  }
}

export async function themeApplier(linkedSkinTheme: LinkedSkinThemeColors) {

  console.log("Theme Applier");

  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  })

  if (tab.id === undefined) {
    return;
  }

  console.log(linkedSkinTheme)

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (linkedSkinTheme) => {
      const theme = linkedSkinTheme as LinkedSkinThemeColors;

      // Header
      (document.querySelector('.content-fast-access') as HTMLElement)!.style.backgroundColor = theme.header.backgroundColor;
    },
    args: [linkedSkinTheme]
  })
}