import { useState, useEffect } from "react";

interface ImageGalleryProps {
  images: string[];
  selectedImageIndex: number;
  onImageSelect: (index: number) => void;
}

export default function ImageGallery({
  images,
  selectedImageIndex,
  onImageSelect,
}: ImageGalleryProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.src = images[selectedImageIndex];
    img.onload = () => {
      setIsLoading(false);
    };
  }, [selectedImageIndex, images]);

  return (
    <div className="flex flex-col space-y-4">
      <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        )}
        <img
          src={images[selectedImageIndex]}
          alt="Product"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onImageSelect(index)}
            className={`relative flex-shrink-0 w-19 h-19 rounded-md overflow-hidden 
              ${
                selectedImageIndex === index
                  ? "ring-2 ring-blue-500 ring-offset-2"
                  : "ring-1 ring-gray-200"
              }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
