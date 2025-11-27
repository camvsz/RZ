import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';

// Initialize safely - if no key, we handle it in the component
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateCongratulation = async (topic: string): Promise<string> => {
  if (!ai) {
    throw new Error("La Clé API Magique est manquante ! (API_KEY missing)");
  }

  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: topic,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9, // Creative and wild
      }
    });
    
    return response.text || "Le barde est muet... (Erreur de génération)";
  } catch (error) {
    console.error("Erreur du barde:", error);
    throw new Error("Le barde a trébuché sur un câble Ethernet.");
  }
};
