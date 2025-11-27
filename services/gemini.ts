
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Safely access env vars in both Vite (import.meta.env) and Node-like (process.env) environments
const getEnvApiKey = () => {
  try {
    // Check Vite environment variable
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_KEY) {
      // @ts-ignore
      return import.meta.env.VITE_API_KEY;
    }
    
    // Check process.env (fallback or local dev)
    // @ts-ignore
    return (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : '';
  } catch {
    return '';
  }
};

const envApiKey = getEnvApiKey();

export const generateCongratulation = async (topic: string, customApiKey?: string): Promise<string> => {
  const keyToUse = customApiKey || envApiKey;

  if (!keyToUse) {
    throw new Error("La Clé API Magique est manquante !");
  }

  // Create instance on demand to support dynamic keys
  const ai = new GoogleGenAI({ apiKey: keyToUse });

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
