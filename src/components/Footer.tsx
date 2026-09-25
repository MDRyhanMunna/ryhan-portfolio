export function Footer() {
  return (
    <footer className="site-footer wrap">
      <a className="wordmark" href="/">
        munna<span>.</span>
      </a>
      <p>© {new Date().getFullYear()} Md. Ryhan Munna</p>
      <a href="/#home">Back to top ↑</a>
    </footer>
  );
}
