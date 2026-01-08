import { useState } from "react";
import { processNames } from "../api/api";
import "./NameInput.css";

export default function NameInput({ onSubmit }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    setLoading(true);

    const names = input.split(",").map(n => n.trim());
    await processNames(names);

    setInput("");
    setLoading(false);
    onSubmit();
  };

  return (
    <div className="name-input">
      <input
        placeholder="Peter, Aditi, Ravi... Search Here"
        value={input}
        onChange={e => setInput(e.target.value)}
        disabled={loading}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Processing..." : "Submit"}
      </button>
    </div>
  );
}
