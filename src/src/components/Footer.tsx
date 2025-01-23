import githubLogo from "../assets/github-logo.png";

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-between px-1 fixed bottom-0 border-t-1 border-zinc-200 py-1">
      <a target="_blank" href="https://github.com/luizfranzon/linked-skins">
        <span className="flex items-center gap-1 hover:underline">
          <img width={16} height={16} src={githubLogo} alt="Github logo" />
          GitHub
        </span>
      </a>
      <span>v 0.0.1</span>
    </footer>
  );
}
