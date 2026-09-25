import { createContext, useContext, useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Pause, Play } from "lucide-react";

const MotionContext = createContext(false);
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const enabled = !paused && !reduced;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
    if (!enabled || !("IntersectionObserver" in window)) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const index = Array.from(el.parentElement?.children ?? []).indexOf(el);
          animations.push(
            el.animate([{ opacity: 0.25 }, { opacity: 1 }], {
              duration: 650,
              delay: Math.min(index, 3) * 70,
              easing: "cubic-bezier(.2,.7,.2,1)",
            }),
          );
          observer.unobserve(el);
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".section-heading, .about-grid, .focus-item, .skill-group, .featured-card, .more-card, .education-card, .resume-section, .contact-form",
      )
      .forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      document.documentElement.dataset.motion = "off";
    };
  }, [enabled, pathname]);

  return (
    <MotionContext.Provider value={enabled}>
      {children}
      {!reduced && (
        <button
          className="motion-toggle"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Resume animations" : "Pause animations"}
          aria-pressed={paused}
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}
          <span>{paused ? "Resume motion" : "Pause motion"}</span>
        </button>
      )}
    </MotionContext.Provider>
  );
}

const interests = [
  "Data Analytics",
  "AI & Machine Learning",
  "Web & Software Development",
  "Database Systems",
];
export function AnimatedInterests() {
  const enabled = useContext(MotionContext);
  const [text, setText] = useState(interests[0]);
  useEffect(() => {
    if (!enabled) return;
    let word = 0;
    let length = interests[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;
    function tick() {
      const current = interests[word];
      length += deleting ? -1 : 1;
      setText(current.slice(0, length));
      let delay = deleting ? 35 : 65;
      if (length === 0) {
        word = (word + 1) % interests.length;
        deleting = false;
        delay = 250;
      } else if (length === current.length && !deleting) {
        deleting = true;
        delay = 2200;
      }
      timer = setTimeout(tick, delay);
    }
    setText(interests[0]);
    timer = setTimeout(tick, 2400);
    return () => clearTimeout(timer);
  }, [enabled]);
  return (
    <div className="animated-interests">
      <span className="sr-only">
        Exploring data analytics, AI and machine learning, web and software development, and
        database systems.
      </span>
      <span aria-hidden="true">
        Exploring <strong>{enabled ? text : interests[0]}</strong>
        <span className="typing-cursor">|</span>
      </span>
    </div>
  );
}
