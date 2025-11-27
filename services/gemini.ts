import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const envApiKey = process.env.API_KEY || '';

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