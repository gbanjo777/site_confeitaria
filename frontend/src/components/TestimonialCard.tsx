import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({
  name,
  text,
  rating,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover-lift">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "fill-caramel text-caramel" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-mediumBrown text-sm leading-relaxed mb-4 italic">
        "{text}"
      </p>
      <div className="flex items-center gap-3">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center">
            <span className="font-playfair text-lg font-bold text-chocolate">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <span className="font-inter font-semibold text-chocolate">{name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
