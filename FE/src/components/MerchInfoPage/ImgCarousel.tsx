//
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo({
  srcURL,
}: {
  srcURL: string[];
}) {
  const contentPictures = () => {
    return srcURL.map((pic) => (
      <CarouselItem className="" key={pic}>
        <div className="">
          <Card className="">
            <CardContent className="py-3 flex items-center justify-center">
              <img
                className="w-[50vw] h-[45vh] min-w-60 min-h-80  object-contain"
                src={pic}
                alt="???"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ));
  };

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>{contentPictures()}</CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
