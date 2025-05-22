import { Check } from "lucide-react";
import type { Color } from "../types";

interface VariantSelectorProps {
  sizes: string[];
  colors: Color[];
  selectedSize?: string;
  selectedColor?: Color;
  onSizeSelect: (size: string) => void;
  onColorSelect: (color: Color) => void;
}

export default function VariantSelector({
  sizes,
  colors,
  selectedSize,
  selectedColor,
  onSizeSelect,
  onColorSelect,
}: VariantSelectorProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-gray-900">Tamanho</h3>
          <span className="text-sm text-gray-500">Selecione um tamanho</span>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeSelect(size)}
              className={`flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md border transition-all
                ${
                  selectedSize === size
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium text-gray-900">Colorway</h3>
          <span className="text-sm text-gray-500">
            {selectedColor ? selectedColor.name : "Selecione uma cor"}
          </span>
        </div>

        <div className="flex space-x-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => onColorSelect(color)}
              className={`relative w-8 h-8 rounded-full transition-transform
                ${
                  selectedColor?.name === color.name
                    ? "ring-2 ring-offset-2 ring-blue-500 scale-110"
                    : ""
                }`}
              style={{
                backgroundColor: color.value,
                border:
                  color.value === "#FFFFFF" ? "1px solid #E5E7EB" : "none",
              }}
              title={color.name}
            >
              {selectedColor?.name === color.name && (
                <span
                  className={`absolute inset-0 flex items-center justify-center
                  ${
                    ["White", "#FFFFFF"].includes(color.value)
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  <Check size={16} strokeWidth={2.5} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
