import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import ModalSearchBar from "@/components/MenuNavBar/SearchBarComponent/index";
import FilterModal from "@/components/MenuNavBar/FilterButtonComponent";

function MenuNavBar() {
  return (
    <header className="sticky top-0 border-b bg-background flex justify-center">
      <NavigationMenu className="">
        <NavigationMenuList className="w-[100vw] max-w-screen-xl">
          {/* First Menu Item, a Main page link */}
          <NavigationMenuItem className="w-1/4 flex justify-start whitespace-nowrap">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/">Main Page</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <div className="w-1/4"></div>
          {/* Second, "and optional" filter menu item*/}
          <FilterModal />
          {/* Third menu item, a search bar*/}
          <NavigationMenuItem className="w-1/4 flex justify-end">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <div className="flex items-center pr-[7%]">
                <ModalSearchBar />
              </div>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default MenuNavBar;

{
  /* <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/DB3-testing">test1</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/alone-testing">test2</Link>
            </NavigationMenuLink>
          </NavigationMenuItem> */
}
