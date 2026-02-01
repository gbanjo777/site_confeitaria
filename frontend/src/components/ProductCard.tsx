import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isSpecial?: boolean;
  specialType?: string;
}

const ProductCard = ({
  name,
  description,
  price,
  image,
  category,
  isSpecial,
  specialType,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover-lift group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-caramel text-white font-inter text-xs">
            {category}
          </Badge>
          {isSpecial && specialType && (
            <Badge className="bg-green-600 text-white font-inter text-xs">
              {specialType}
            </Badge>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-playfair text-xl font-semibold text-chocolate mb-2">
          {name}
        </h3>
        <p className="text-mediumBrown text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-playfair text-2xl font-bold text-caramel">
            {price}
          </span>
          <Link to="/personalizar">
            <Button
              size="sm"
              className="bg-chocolate hover:bg-caramel text-white font-inter"
            >
              Encomendar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
