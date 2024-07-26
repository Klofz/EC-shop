//

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default SearchBar;

interface Props {
  searchArr: {
    searchValue: string;
    setSearchValue: React.Dispatch<
      React.SetStateAction<string>
    >;
  };
  // openPopover: React.Dispatch<
  //   React.SetStateAction<boolean>
  // >;
}

function SearchBar({ searchArr }: Props) {
  const { searchValue, setSearchValue } = searchArr;

  return (
    <div
    // className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"
    >
      <form
      // className="ml-auto flex-1 sm:flex-initial"
      >
        <div
          className="relative"
          // onFocus={() => openPopover(true)}
          // onBlur={() => openPopover(false)}
        >
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products"
            className="pl-8 "
            value={searchValue}
            onChange={({ target: { value } }) =>
              setSearchValue(value)
            }
          />
        </div>
      </form>
    </div>
  );
}
