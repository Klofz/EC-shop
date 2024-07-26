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
    <div>
      <Card>
        <div className="">
          <div className="p-4">
            <img
              onClick={handleOnClick}
              src={merch.img_url}
              height={250}
              width={250}
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
            <CardContent></CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button>{merch.price}</Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
