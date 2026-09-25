import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/Motion";
import appCss from "../styles.css?url";
import portrait from "@/assets/munna-hero.png";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Md. Ryhan Munna — CSE Portfolio" },
      {
        name: "description",
        content:
          "Final-year CSE student at East West University, majoring in Data Science. Projects across analytics, AI, software, and database systems.",
      },
      { name: "author", content: "Md. Ryhan Munna" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Md. Ryhan Munna — CSE Portfolio" },
      {
        property: "og:description",
        content:
          "Explore my work in data analytics, AI, software development, and database systems.",
      },
      { name: "twitter:card", content: "summary" },
      { property: "og:image", content: portrait },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  ),
  component: () => (
    <MotionProvider>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </MotionProvider>
  ),
  notFoundComponent: () => (
    <div className="not-found">
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="button primary">
        Back to home
      </Link>
    </div>
  ),
});
