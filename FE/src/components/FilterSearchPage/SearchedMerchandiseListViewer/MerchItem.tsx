//
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Merch } from "@/types";
import { useNavigate } from "react-router-dom";

export default MerchItem;

interface Props {
  merch: Merch;
}

function MerchItem({ merch }: Props) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/merch/${merch.merch_url}`);
  };

  return (
    <Card>
      <div className="grid flex-1 gap-1 overflow-auto p-4 md:grid-cols-2">
        <div className="">
          <img
            onClick={handleOnClick}
            src={merch.img_url}
            // height={50}
            // width={50}
            alt="casa"
          />
        </div>

        <div className="">
          <CardHeader>
            <CardTitle onClick={handleOnClick}>
              {merch.title}
            </CardTitle>
            <CardDescription>
              {merch.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <Input placeholder="Quantity" />
            </form>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>{merch.price}</Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
