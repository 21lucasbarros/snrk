import { formatCurrency } from "../utils/format";
import { Facebook, Twitter, Instagram, Star } from "lucide-react";

interface ProductInfoProps {
  name: string;
  price: number;
  description: string;
}

const socials = [
  { name: "Facebook", icon: Facebook },
  { name: "Twitter", icon: Twitter },
  { name: "Instagram", icon: Instagram },
];

export default function ProductInfo({
  name,
  price,
  description,
}: ProductInfoProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">{name}</h1>

      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-blue-600">
          {formatCurrency(price)}
        </span>
        <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
          Em promoção
        </span>
      </div>

      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-4 h-4 text-yellow-400 fill-yellow-400"
          />
        ))}
        <span className="text-sm text-gray-500">(23 avaliações)</span>
      </div>

      <p className="text-gray-700 leading-relaxed">{description}</p>

      <div className="pt-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-500">
            Compartilhar:
          </span>
          <div className="flex space-x-2">
            {socials.map(({ name, icon: Icon }) => (
              <button
                key={name}
                className="text-blue-600 hover:text-blue-800"
                aria-label={name}
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
