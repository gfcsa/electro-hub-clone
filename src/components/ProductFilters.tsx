import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProductFilters = () => {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg">Filtros</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filters */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Categoria</Label>
          <div className="space-y-2">
            {['Telemóveis', 'Portáteis', 'TV'].map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <Label htmlFor={category} className="text-sm">{category}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Preço</Label>
          <RadioGroup defaultValue="">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="0-200" id="price-1" />
              <Label htmlFor="price-1" className="text-sm">Até 200€</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="200-600" id="price-2" />
              <Label htmlFor="price-2" className="text-sm">200€ - 600€</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="600+" id="price-3" />
              <Label htmlFor="price-3" className="text-sm">+600€</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Brand Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Marca</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="samsung">Samsung</SelectItem>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="lg">LG</SelectItem>
              <SelectItem value="sony">Sony</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;