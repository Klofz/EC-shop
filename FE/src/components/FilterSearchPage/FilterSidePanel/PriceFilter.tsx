//
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

import useAppStore from "@/services/Store";

export default PriceFilter;

function PriceFilter() {
  const { choosenPriceRange, updateChoosenPriceRange } =
    useAppStore();

  const updatePriceRange = (
    side: string,
    newPrice: string,
  ) => {
    if (side === "min") {
      updateChoosenPriceRange([
        newPrice,
        choosenPriceRange[1],
      ]);
    } else {
      updateChoosenPriceRange([
        choosenPriceRange[0],
        newPrice,
      ]);
    }
  };

  const createSlider = (
    value: string,
    placeHolder: string,
  ) => {
    const updatePriceRangeBySlider = (
      newValue: number[],
    ) => {
      updatePriceRange(placeHolder, String(newValue[0]));
    };

    const updatePriceRangeByinput = (
      e: React.FormEvent<HTMLInputElement>,
    ) => {
      updatePriceRange(placeHolder, e.currentTarget.value);
    };

    return (
      <div className=" pb-2 gap-8 flex items-center justify-start">
        <Slider
          className="max-w-64"
          value={[Number(value)]}
          onValueChange={updatePriceRangeBySlider}
          max={1000}
          step={1}
        />
        <Input
          className="h-8 max-w-20"
          type="number"
          value={value}
          onChange={updatePriceRangeByinput}
          placeholder={placeHolder}
        ></Input>
      </div>
    );
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-foreground">
        Precios:
      </h3>
      <div className="">
        {createSlider(choosenPriceRange[0], "min")}
        {createSlider(choosenPriceRange[1], "max")}
      </div>
    </div>
  );
}
