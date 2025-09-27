import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-electronics.jpg";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Main Hero Card */}
      <div className="lg:col-span-2">
        <Card className="h-full bg-gradient-to-r from-blue-50 to-white overflow-hidden">
          <CardContent className="p-8 h-full flex items-center">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-brand">
                Os melhores preços em tecnologia
              </h1>
              <p className="text-muted-foreground text-lg">
                Ofertas selecionadas em telemóveis, portáteis, televisores e muito mais. 
                Envio rápido, garantia e assistência.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg">
                  Ver Ofertas
                </Button>
                <Button variant="outline" size="lg">
                  Club & Financiamento
                </Button>
              </div>
              
              {/* Benefits */}
              <div className="flex gap-4 pt-4">
                <div className="bg-white/60 backdrop-blur-sm p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground">Entrega</div>
                  <div className="font-semibold">Em 24-48h</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground">Garantia</div>
                  <div className="font-semibold">2 anos</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block flex-1 ml-8">
              <img 
                src={heroImage} 
                alt="Produtos tecnológicos" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Promo Card */}
      <Card className="bg-accent text-accent-foreground">
        <CardContent className="p-6 h-full flex flex-col justify-between">
          <div>
            <div className="text-sm opacity-90 mb-2">Campanha</div>
            <h2 className="text-xl font-bold mb-3">Super Saldos de Outono</h2>
            <p className="text-sm opacity-90 mb-4">
              Descontos até 40% em categorias selecionadas — oferta por tempo limitado.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="flex-1">
              Ver todas
            </Button>
            <Button variant="outline" size="sm" className="border-accent-foreground text-foreground hover:bg-accent-foreground hover:text-accent">
              Ver TV
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default HeroSection;