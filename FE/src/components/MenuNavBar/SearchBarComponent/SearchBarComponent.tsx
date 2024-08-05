//
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TextBar from "./TextBar";
import merchService from "@/services/merch";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import CommandComp from "./CommandComp";
import { Search } from "lucide-react";

export default SearchBarComponent;

function SearchBarComponent() {
  const [searchValue, setSearchValue] = useState<string>("");
  const searchArr = { searchValue, setSearchValue };
  // const [open, setOpen] = useState(false);

  const resultMerch = useQuery({
    queryKey: ["merchAll"],
    queryFn: merchService.getAll,
  });

  const merchArr = resultMerch.data ? resultMerch.data : [];

  return (
    <>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <Popover
          // open={open} onOpenChange={setOpen}
          >
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                role="combobox"
                // aria-expanded={open}
                aria-expanded={true}
                className="px-2"
              >
                {/* {
                  <TextBar
                    searchArr={searchArr}
                    // openPopover={setOpen}
                  />
                } */}
                <div className="flex items-center">
                  Name <Search className=" text-muted-foreground" />
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[200px] p-0"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <CommandComp searchArr={searchArr} merchArr={merchArr} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
}
