import { useState } from "react";

const CARDS = [
  {
    letter: "I",
    tag: "Detect",
    feature: "per-question",
    title: "Image",
    category: "Image mode",
    accent: false,
    lines: [
      "Detects every question on the page.",
      "Crops each one into a clean standalone PNG.",
      "Returns exactly the number you ask for.",
    ],
  },
  {
    letter: "T",
    tag: "Transcribe",
    feature: "LaTeX · KaTeX",
    title: "Text",
    category: "Text mode",
    accent: true,
    lines: [
      "Transcribes questions to faithful LaTeX.",
      "Equations render live with KaTeX.",
      "Copy any question with one click.",
    ],
  },
  {
    letter: "F",
    tag: "Extract",
    feature: "diagrams + graphs",
    title: "Figures",
    category: "With the text",
    accent: false,
    lines: [
      "Finds diagrams, graphs and figures.",
      "Extracts them alongside the question text.",
      "Works on both AI and offline modes.",
    ],
  },
  {
    letter: "E",
    tag: "Gemini",
    feature: "AI vision",
    title: "Engine",
    category: "The pipeline",
    accent: false,
    lines: [
      "Gemini vision detects and reads each question.",
      "A local heuristic backs it up offline.",
      "Built on FastAPI, PyMuPDF and React.",
    ],
  },
];

export default function FeatureShowcase() {
  const [flipped, setFlipped] = useState({});

  function toggle(title) {
    setFlipped((current) => ({ ...current, [title]: !current[title] }));
  }

  return (
    <section className="showcase" id="features">
      <div className="showcase-head">
        <span className="section-tag">03 — Features</span>
        <span className="showcase-all">Tap a card to flip</span>
      </div>

      <h2 className="showcase-title">
        Built on<br />precision.
      </h2>

      <div className="showcase-cards">
        {CARDS.map((card) => (
          <button
            key={card.title}
            type="button"
            className={card.accent ? "show-card-flip show-card-accent" : "show-card-flip"}
            onClick={() => toggle(card.title)}
            aria-pressed={!!flipped[card.title]}
          >
            <div className={flipped[card.title] ? "show-inner is-flipped" : "show-inner"}>
              <div className="show-face show-front">
                <div className="show-card-top">
                  <span className="show-tag">{card.tag}</span>
                  <span className="show-feature">{card.feature}</span>
                </div>
                <span className="show-letter">{card.letter}</span>
                <div className="show-card-foot">
                  <span className="show-card-title">{card.title}</span>
                  <span className="show-card-cat">{card.category}</span>
                </div>
                <span className="show-flip-hint">tap ↻</span>
              </div>

              <div className="show-face show-back">
                <span className="show-back-title">{card.title}</span>
                <div className="show-back-lines">
                  {card.lines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
                <span className="show-flip-hint">back ↺</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
