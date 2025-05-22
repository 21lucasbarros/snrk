import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { product } from "./data/sneaker";
import type { Color, UserSelections } from "./types";
import { useLocalStorage } from "./hooks/useLocalStorage";
import MainContent from "./components/MainContent";

export default function App() {
  const initialSelections: UserSelections = {
    selectedImageIndex: 0,
    timestamp: Date.now(),
  };

  const [userSelections, setUserSelections] =
    useLocalStorage(initialSelections);

  const handleImageSelect = (index: number) => {
    setUserSelections({
      ...userSelections,
      selectedImageIndex: index,
      timestamp: Date.now(),
    });
  };

  const handleSizeSelect = (size: string) => {
    setUserSelections({
      ...userSelections,
      selectedSize: size,
      timestamp: Date.now(),
    });
  };

  const handleColorSelect = (color: Color) => {
    setUserSelections({
      ...userSelections,
      selectedColor: color,
      timestamp: Date.now(),
    });
  };

  const handleCepChange = (cep: string) => {
    setUserSelections({
      ...userSelections,
      cep,
      address: undefined,
      timestamp: Date.now(),
    });
  };

  const checkDelivery = async (cepToCheck: string) => {
    if (!cepToCheck || cepToCheck.length < 8) return;

    try {
      const cleanCep = cepToCheck.replace("-", "");
      const response = await fetch(
        `https://viacep.com.br/ws/${cleanCep}/json/`
      );

      if (!response.ok) throw new Error("CEP não encontrado");

      const data = await response.json();

      if (data.erro) throw new Error("CEP não encontrado");

      setUserSelections({
        ...userSelections,
        address: data,
        timestamp: Date.now(),
      });
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  useEffect(() => {
    document.title = `${product.name} | Sneaker Shop`;
  }, []);
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <MainContent
          {...product}
          userSelections={userSelections}
          onImageSelect={handleImageSelect}
          onSizeSelect={handleSizeSelect}
          onColorSelect={handleColorSelect}
          onCepChange={handleCepChange}
          onCheckDelivery={checkDelivery}
        />
        <Footer />
      </div>
    </>
  );
}
