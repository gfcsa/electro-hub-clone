import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-card border-b px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-foreground">
              Electro<span className="text-brand">Hub</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input 
                type="search"
                placeholder="Procurar telemóveis, TV, portáteis, ofertas..."
                className="w-full pr-20"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <Search className="h-4 w-4 mr-1" />
                Pesquisar
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>

        {/* Categories Navigation */}
        <nav className="flex gap-2 mt-4 overflow-x-auto">
          {[
            "Telemóveis",
            "TV & Áudio", 
            "Informática",
            "Eletrodomésticos",
            "Gadgets",
            "Gaming",
            "Ofertas"
          ].map((category) => (
            <Button 
              key={category} 
              variant="ghost" 
              size="sm"
              className="whitespace-nowrap text-muted-foreground hover:text-foreground"
            >
              {category}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;