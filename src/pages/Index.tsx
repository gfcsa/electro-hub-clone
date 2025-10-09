import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductFilters from "@/components/ProductFilters";
import ProductCard from "@/components/ProductCard";
import ProposalForm from "@/components/ProposalForm";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock product data - in real app would come from API
const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    title: "Smartphone XYZ 128GB",
    price: "399,99€",
    oldPrice: "499,99€",
    rating: 4,
    reviewCount: 134
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    title: "Portátil Alpha 15\" - i7",
    price: "899,00€",
    rating: 5,
    reviewCount: 89
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    title: "Smart TV 55\" 4K",
    price: "549,90€",
    oldPrice: "699,90€",
    rating: 4,
    reviewCount: 210
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    title: "Headphones Wireless Pro",
    price: "199,99€",
    oldPrice: "299,99€",
    rating: 5,
    reviewCount: 456
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    title: "Tablet Galaxy 10.1\"",
    price: "329,90€",
    rating: 4,
    reviewCount: 78
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop",
    title: "Gaming Console X Series",
    price: "499,99€",
    rating: 5,
    reviewCount: 892
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <HeroSection />
        
        {/* Proposal Form Section */}
        <section className="my-12">
          <div className="max-w-3xl mx-auto">
            <ProposalForm />
          </div>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters />
          </div>
          
          {/* Products Section */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Resultados — {products.length} produtos</h2>
                <p className="text-sm text-muted-foreground">Ordenar por: Popularidade</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Ver:</span>
                <Select defaultValue="20">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20">20 / página</SelectItem>
                    <SelectItem value="40">40 / página</SelectItem>
                    <SelectItem value="60">60 / página</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            {/* Pagination */}
            <nav className="flex justify-center items-center gap-2">
              <Button variant="outline" size="sm">
                « Anterior
              </Button>
              <Button size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">
                Seguinte »
              </Button>
            </nav>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-muted mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <div className="font-bold text-lg mb-1">ElectroHub</div>
              <div className="text-sm text-muted-foreground">
                © 2025 — Projeto académico. Conteúdos e imagens de exemplo.
              </div>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Ajuda</a>
              <span>·</span>
              <a href="#" className="hover:text-foreground transition-colors">Entrega</a>
              <span>·</span>
              <a href="#" className="hover:text-foreground transition-colors">Devoluções</a>
              <span>·</span>
              <a href="#" className="hover:text-foreground transition-colors">Contactos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;