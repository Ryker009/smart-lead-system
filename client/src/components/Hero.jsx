import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="box1">
        <h1>Smart Lead Automation</h1>
      <p>
        Automatically enrich leads, classify them, and sync verified leads
        using background automation.
      </p>

      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
      </div>
      <div className="box2">
        <img src="/video/gif.gif" alt="hero-img" />
      </div>
    </div>
  );
}
