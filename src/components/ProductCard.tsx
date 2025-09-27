import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviewCount: number;
}

const ProductCard = ({ image, title, price, oldPrice, rating, reviewCount }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="aspect-square bg-gradient-to-b from-white to-muted rounded-lg mb-3 flex items-center justify-center overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
          />
        </div>
        
        <h3 className="font-medium text-sm mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center gap-1 mb-2">
          {renderStars(rating)}
          <span className="text-xs text-muted-foreground ml-1">({reviewCount})</span>
        </div>
        
        <div className="mb-3">
          <span className="text-lg font-bold text-brand">{price}</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through ml-2">{oldPrice}</span>
          )}
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            Adicionar ao carrinho
          </Button>
          <Button variant="outline" size="sm">
            Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;