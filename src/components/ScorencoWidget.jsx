"use client";
import { useEffect, useId, useRef } from "react";

/**
 * ScorencoWidget
 * @param {("team"|"club")} type   - data-widget-type
 * @param {string|number} id       - data-widget-id (ex: 158652)
 * @param {number} height          - hauteur en px (par défaut 500)
 * @param {string} bg              - couleur de fond (ex: "#F2F5F9")
 * @param {string} color           - couleur du texte (ex: "#1E457B")
 * @param {object} extraAttrs      - autres data-attrs (ex: {"data-widget-view":"next"})
 */
export default function ScorencoWidget({
  type = "team",
  id,
  height = 500,
  bg = "#F2F5F9",
  color = "#1E457B",
  extraAttrs = {},
}) {
  const ready = useRef(false);
  const wid = useId();

  useEffect(() => {
    if (ready.current) return;
    // Injecte le script une seule fois
    const existing = document.querySelector('script[src*="widgets.scorenco.com/host/widgets.js"]');
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://widgets.scorenco.com/host/widgets.js";
      s.async = true;
      s.defer = true;
      document.body.appendChild(s);
    }
    ready.current = true;
  }, []);

  // Merge des data-* supplémentaires
  const dataAttrs = Object.entries(extraAttrs).reduce((acc, [k, v]) => {
    // Autorise "data-xxx" ou juste "widget-view" -> on préfixe
    const name = k.startsWith("data-") ? k : `data-${k}`;
    acc[name] = String(v);
    return acc;
  }, {});

  return (
    <section style={{ padding: "12px 0" }}>
      <div
        id={wid}
        className="scorenco-widget"
        data-widget-type={type}
        data-widget-id={id}
        style={{
          background: bg,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textTransform: "uppercase",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          gap: 9,
          color,
          width: "100%",
          border: "1px solid #cfcfcf",
          borderRadius: 12,
        }}
        {...dataAttrs}
      >
        {/* loader simple (optionnel) */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: `4px solid ${color}`,
            borderRightColor: "transparent",
            animation: "sc-spin 1.2s linear infinite",
          }}
        />
        Chargement du widget Scorenco…
      </div>

      {/* petite animation CSS */}
      <style>{`
        @keyframes sc-spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      `}</style>

      {/* fallback (si JS désactivé) */}
      <noscript>
        <p>
          Activez JavaScript pour voir le widget Scorenco.
        </p>
      </noscript>
    </section>
  );
}
