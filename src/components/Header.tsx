import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="wordmark" href="/" aria-label="Munna home">
          munna<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, id]) => (
            <a key={id} href={"/#" + id}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="/#contact">
          Let’s connect <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {[...links, ["Resume", "resume"], ["Contact", "contact"]].map(([label, id]) => (
            <a key={id} href={"/#" + id} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
