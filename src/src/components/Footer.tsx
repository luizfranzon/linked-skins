import githubLogo from "../assets/github-logo.png";
import linkedSkinsLogo from "../assets/linked-skins-logo.svg";

export function Footer() {
  return (
    <div className="fixed bottom-0 w-full flex flex-col items-center">
      <img draggable="false" width={150} className="mb-2 select-none" src={linkedSkinsLogo} alt="Linked Skins Logo" />
      <footer className="w-full flex items-center justify-between px-1  border-t-1 border-zinc-200 py-1">
        <a target="_blank" href="https://github.com/luizfranzon/linked-skins">
          <span className="flex items-center gap-1 hover:underline">
            <img draggable="false" width={16} height={16} src={githubLogo} alt="Github logo" />
            GitHub
          </span>
        </a>
        <span>v 0.0.1</span>
      </footer>
    </div>
  );
}
