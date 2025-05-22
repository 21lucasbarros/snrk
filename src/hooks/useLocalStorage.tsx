import { useState, useEffect } from "react";
import type { UserSelections } from "../types";

const STORAGE_KEY = "sneaker_user_selections";
const EXPIRY_TIME = 15 * 60 * 1000; // 15 minutos

export const useLocalStorage = (initialValue: UserSelections) => {
  const [value, setValue] = useState<UserSelections>(() => {
    try {
      const storedValue = localStorage.getItem(STORAGE_KEY);

      if (storedValue) {
        const parsedValue: UserSelections = JSON.parse(storedValue);
        const now = Date.now();

        if (now - parsedValue.timestamp < EXPIRY_TIME) {
          return parsedValue;
        }
      }

      return initialValue;
    } catch (error) {
      console.error("Erro ao ler do localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }, [value]);

  return [value, setValue] as const;
};
