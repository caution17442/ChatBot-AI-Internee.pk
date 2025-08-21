// src/api/geminiApi.ts
import axios from "axios";

const API_KEY = "YOUR_GEMINI_API_KEY";
const BASE_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export const askGemini = async (prompt: string) => {
  try {
    const res = await axios.post(
      `${BASE_URL}?key=${API_KEY}`,
      { contents: [{ parts: [{ text: prompt }] }] }
    );
    return res.data.candidates[0].content.parts[0].text;
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "⚠️ Sorry, I couldn't process that.";
  }
};
