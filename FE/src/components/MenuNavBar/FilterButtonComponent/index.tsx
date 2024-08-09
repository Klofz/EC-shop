//

import { Link, useLocation } from "react-router-dom";
import FilterButton from "./FilterButton";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const FilterModal = () => {
  const location = useLocation();

  const addFilterButton =
    location.pathname === "/search" ? (
      <FilterButton />
    ) : (
      <NavigationMenuItem className="w-1/4 flex justify-end">
        <NavigationMenuLink
          asChild
          className={navigationMenuTriggerStyle()}
        >
          <Link to="/search">Search</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );

  return addFilterButton;
};

export default FilterModal;
