//
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { CarouselDemo } from "./ImgCarousel";

export default MerchItemInfo;

interface Props {
  merch: Product;
}

function MerchItemInfo({ merch }: Props) {
  const srcURL = [
    "/71HE.webp",
    "/81TrO.jpg",
    "/6119o.webp",
  ];

  return (
    <Card>
      <CardHeader className="p-3 items-center">
        <CardTitle>{merch.name}</CardTitle>
      </CardHeader>

      <div className="grid flex-1 gap-1 overflow-auto p-4 md:grid-cols-2">
        <CarouselDemo srcURL={srcURL} />

        <CardContent className="h-2/6 p-0 pl-4 flex flex-col items-start text-base">
          <p>Disponibles: {merch.units}</p>
          <p>Precio: {merch.price}$</p>
          <p>Marca: {merch.brand?.name}</p>
        </CardContent>
        <CardFooter className="p-0 pt-3 justify-center">
          <Button className="w-full">
            Agregar al Carro
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
