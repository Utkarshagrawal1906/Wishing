import Slideshow from "../components/Slideshow";
import MusicToggle from "../components/MusicToggle";
import Message from "../components/Message";

export default function Home() {
  return (
    <main style={{
      textAlign: "center",
      padding: "20px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontFamily: "'Poppins', sans-serif"
    }}>
      <h1 style={{
        fontSize: "clamp(2rem, 8vw, 4rem)",
        marginBottom: "20px",
        color: "white",
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        fontWeight: "700"
      }}>
        💖 Happy Anniversary 💖
      </h1>

      <MusicToggle />

      <Slideshow />

      <Message />

      <div style={{
        marginTop: "30px",
        fontSize: "clamp(0.8rem, 3vw, 1.2rem)",
        color: "rgba(255,255,255,0.8)",
        maxWidth: "400px",
        lineHeight: "1.6"
      }}>
        Made with ❤️ for you
      </div>
    </main>
  );
}
