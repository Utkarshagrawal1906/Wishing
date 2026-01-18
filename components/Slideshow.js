"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const photos = [
  "/Wishing/1.jpg",
  "/Wishing/2.jpeg",
  "/Wishing/3.jpeg",
  "/Wishing/4.jpeg",
  "/Wishing/5.jpeg",
  "/Wishing/6.jpeg",
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: "100%",
      maxWidth: "500px",
      margin: "20px auto",
      padding: "0 20px",
      boxSizing: "border-box"
    }}>
      <motion.img
        key={index}
        src={photos[index]}
        alt="Memories"
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          border: "4px solid rgba(255,255,255,0.2)",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Image indicators */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        marginTop: "15px"
      }}>
        {photos.map((_, i) => (
          <div
            key={i}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: i === index ? "#ff6b6b" : "rgba(255,255,255,0.5)",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}