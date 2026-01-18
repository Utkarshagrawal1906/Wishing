"use client";

import { useRef, useState, useEffect } from "react";

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    // Try auto-play on first user interaction with the page
    const handleFirstInteraction = () => {
      const playAudio = async () => {
        try {
          await audioRef.current.play();
          setPlaying(true);
          setShowPrompt(false);
          // Remove the event listener after successful play
          document.removeEventListener('click', handleFirstInteraction);
          document.removeEventListener('touchstart', handleFirstInteraction);
        } catch (error) {
          console.log("Auto-play failed, manual interaction required");
        }
      };
      playAudio();
    };

    // Add event listeners for first interaction
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
      setShowPrompt(false);
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {showPrompt && (
        <div className="music-prompt" style={{
          background: "rgba(255,255,255,0.9)",
          color: "#333",
          padding: "15px 25px",
          borderRadius: "20px",
          margin: "15px auto",
          maxWidth: "300px",
          textAlign: "center",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}>
          🎵 Click anywhere or tap "Play Music" to start the celebration! 🎵
        </div>
      )}

      <button
        onClick={toggleMusic}
        style={{
          padding: "15px 30px",
          margin: "15px",
          cursor: "pointer",
          backgroundColor: playing ? "#ff6b6b" : "#4ecdc4",
          color: "white",
          border: "none",
          borderRadius: "30px",
          fontSize: "18px",
          fontWeight: "bold",
          boxShadow: playing ? "0 6px 20px rgba(255,107,107,0.4)" : "0 6px 20px rgba(78,205,196,0.4)",
          transition: "all 0.3s ease",
          transform: playing ? "scale(1.05)" : "scale(1)",
          position: "relative",
          overflow: "hidden"
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = playing ? "scale(1.1)" : "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = playing ? "scale(1.05)" : "scale(1)";
        }}
      >
        <span style={{ position: "relative", zIndex: 1 }}>
          {playing ? "⏸️ Pause Music" : "🎵 Play Music"}
        </span>
        {playing && (
          <div className="music-button-shine" style={{
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          }} />
        )}
      </button>
    </>
  );
}