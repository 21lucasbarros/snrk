import type { Color, UserSelections } from "../types";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import VariantSelector from "./VariantSelector";
import DeliveryCheck from "./DeliveryCheck";

interface MainContentProps {
  images: string[];
  name: string;
  price: number;
  description: string;
  sizes: string[];
  colors: Color[];
  userSelections: UserSelections;
  onImageSelect: (index: number) => void;
  onSizeSelect: (size: string) => void;
  onColorSelect: (color: Color) => void;
  onCepChange: (cep: string) => void;
  onCheckDelivery: (cep: string) => Promise<void>;
}

export default function MainContent({
  images,
  name,
  price,
  description,
  sizes,
  colors,
  userSelections,
  onImageSelect,
  onSizeSelect,
  onColorSelect,
  onCepChange,
  onCheckDelivery,
}: MainContentProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <ImageGallery
            images={images}
            selectedImageIndex={userSelections.selectedImageIndex}
            onImageSelect={onImageSelect}
          />
        </div>

        <div className="lg:w-1/2 space-y-8">
          <ProductInfo name={name} price={price} description={description} />

          <VariantSelector
            sizes={sizes}
            colors={colors}
            selectedSize={userSelections.selectedSize}
            selectedColor={userSelections.selectedColor}
            onSizeSelect={onSizeSelect}
            onColorSelect={onColorSelect}
          />

          <DeliveryCheck
            cep={userSelections.cep || ""}
            address={userSelections.address}
            onCepChange={onCepChange}
            onCheckDelivery={onCheckDelivery}
          />
        </div>
      </div>
    </main>
  );
}
