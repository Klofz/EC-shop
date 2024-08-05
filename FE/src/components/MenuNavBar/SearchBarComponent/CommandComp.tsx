//
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  // CommandSeparator,
  // CommandShortcut,
} from "@/components/ui/command";

import { Merch } from "@/types";
import { useNavigate } from "react-router-dom";

export default CommandComp;

interface Props {
  searchArr: {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  };
  merchArr: Merch[];
}

function CommandComp({ searchArr, merchArr }: Props) {
  const { searchValue, setSearchValue } = searchArr;
  const navigate = useNavigate();

  const items = merchArr.map((merch) => (
    <CommandItem
      key={merch.id}
      value={merch.title}
      onSelect={() => {
        navigate(`/merch/${merch.merch_url}`);
      }}
    >
      {merch.title}
    </CommandItem>
  ));

  return (
    <>
      <Command>
        <div
        // hidden={true}
        >
          <CommandInput
            placeholder="Search product..."
            className="h-9"
            value={searchValue}
            onValueChange={setSearchValue}
          />
        </div>
        <CommandList>
          <CommandEmpty>No product found.</CommandEmpty>
          <CommandGroup>{items}</CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}
