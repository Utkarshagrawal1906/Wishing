"use client";

import { motion } from "framer-motion";

export default function Message() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      style={{
        fontSize: "clamp(1rem, 4vw, 1.2rem)",
        maxWidth: "min(600px, 90vw)",
        margin: "30px auto",
        padding: "20px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        color: "white",
        lineHeight: "1.6",
        textAlign: "center",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
      }}
    >
      <p style={{ margin: 0 }}>
  प्यारे माँ और पापा ❤️<br/>
  आपके प्यार, विश्वास और समझ ने हमें जीना सिखाया।<br/>
  आपका साथ हर दिन हमें प्रेरणा देता है।<br/>
  शादी की सालगिरह की हार्दिक शुभकामनाएँ 💐
</p>
    </motion.div>
  );
}