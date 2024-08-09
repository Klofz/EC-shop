//
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Product } from "@/types";
import { useNavigate } from "react-router-dom";

export default MerchItem;

interface Props {
  merch: Product;
}

function MerchItem({ merch }: Props) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    //
    navigate(`/merch/${merch.id}`);
  };

  // const srcURL = merch.images[0];
  // const srcURL = "/6119o.webp";
  const srcURL = "/71HE.webp";

  return (
    <Card className="flex w-11/12 h-[25vh] min-h-48 ">
      <div className="w-2/5 flex items-center justify-center">
        <img
          className="w-11/12 h-9/10 object-contain"
          onClick={handleOnClick}
          src={srcURL}
          alt="casa"
        />
      </div>

      <div className="w-3/5">
        <CardHeader className="h-2/6 items-start p-4 pt-5 pb-0">
          <CardTitle
            className="text-base font-semibold leading-none"
            onClick={handleOnClick}
          >
            {merch.name}
          </CardTitle>
        </CardHeader>
        {/* <div className="h-2/6 p-4 pt-5 pb-0 text-base font-semibold leading-none flex items-start">
          <span className="">{merch.name}</span>
        </div> */}
        <CardContent className="h-2/6 p-0 pl-4 flex flex-col items-start text-base">
          <p>Disponibles: {merch.units}</p>
          <p>Precio: {merch.price}$</p>
          <p>Marca: {merch.brand?.name}</p>
        </CardContent>
        <CardFooter className="h-2/6 p-0 pl-[15%]">
          <Button size="sm">Añadir</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
