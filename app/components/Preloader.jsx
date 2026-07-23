"use client";
import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Disable body scroll while loading is active
    document.body.style.overflow = "hidden";
    
    // Timer to start slide-up exit transition (2.2s is the sweet spot)
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Timer to unmount component after slide-up finishes (800ms)
      const unmountTimer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "";
      }, 800);
      
      return () => clearTimeout(unmountTimer);
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  const words = [
    { text: "ABID", highlight: false },
    { text: "HOSSAIN", highlight: true },
    { text: "SIFAT", highlight: false },
  ];

  // Global counter to calculate continuous delay for all characters
  let globalCharIndex = 0;

  return (
    <div className={`${styles["preloader-container"]} ${!loading ? styles["slide-up"] : ""}`}>
      {/* Background grid */}
      <div className={styles["bg-grid"]} />

      <div className={styles["name-wrapper"]}>
        <div className={styles["name-container"]}>
          {words.map((word, wordIdx) => {
            const letterElements = word.text.split("").map((char) => {
              const currentDelay = globalCharIndex++;
              return (
                <span
                  key={currentDelay}
                  className={styles.letter}
                  style={{ "--delay-index": currentDelay }}
                >
                  {char}
                </span>
              );
            });

            return (
              <span
                key={wordIdx}
                className={word.highlight ? styles["highlight-word"] : ""}
                style={{ display: "inline-flex" }}
              >
                {letterElements}
                {/* Space after each word, except the last one */}
                {wordIdx < words.length - 1 && <span className={styles.space} />}
              </span>
            );
          })}
        </div>

        {/* Animated underline */}
        <div className={styles.underline} />
      </div>
    </div>
  );
}
