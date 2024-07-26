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

export default MerchItemInfo;

interface Props {
  merch: Merch;
}

function MerchItemInfo({ merch }: Props) {
  return (
    <Card>
      <div className="grid flex-1 gap-1 overflow-auto p-4 md:grid-cols-2">
        <div className="">
          <img
            src={merch.img_url}
            // height={50}
            // width={50}
            alt="casa"
          />
        </div>

        <div className="">
          <CardHeader>
            <CardTitle>{merch.title}</CardTitle>
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
