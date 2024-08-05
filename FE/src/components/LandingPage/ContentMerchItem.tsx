//
import {
  Card,
  // CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Merch } from "@/types";
import { useNavigate } from "react-router-dom";

export default ContentMerchItem;

interface Props {
  merch: Merch;
}

function ContentMerchItem({ merch }: Props) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/merch/${merch.merch_url}`);
  };

  return (
    <Card className="min-h-72 h-[45vh] max-w-96 w-11/12">
      <div className="h-[55%] flex items-center justify-center p-2 pb-0 mt-[1%]">
        <img
          className="h-full w-4/5 object-contain"
          onClick={handleOnClick}
          src={merch.img_url}
          alt="casa"
        />
      </div>

      <div className="h-[45%]">
        <CardHeader className="h-2/3 p-2 flex items-center justify-center">
          <CardTitle
            className="text-base font-medium leading-none"
            onClick={handleOnClick}
          >
            {merch.title}
          </CardTitle>
          {/* <CardDescription>{merch.description}</CardDescription> */}
        </CardHeader>
        {/* <CardContent></CardContent> */}
        <CardFooter className="h-1/3 p-0 pb-1 text-sm font-medium">
          <div className="w-1/2 flex items-center justify-center">
            {merch.price}
          </div>
          <div className="w-1/2 pr-2 pb-1 flex items-center justify-center">
            <Button>Añadir</Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
