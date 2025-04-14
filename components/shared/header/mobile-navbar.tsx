import MobileMenu from "./mobile-menu";
import { User, ShoppingCart } from "lucide-react";
import UserButton from "./user-button";

const MobileNavbar = () => {
  return (
    <div className="p-6 flex justify-between text-purple-950 border-2 border-b-purple-950">
      {/* 
        Hamburger menu 
          Nested drawer
            Links
      */}
      <MobileMenu />
      {/*
        TODO: LOGO
        TODO: ACCOUNT ICONS (check if double render affects performance)
          Popover
          Functionality
      */}
      <div className="flex gap-4">
        <UserButton />
        <ShoppingCart />
      </div>
      {/* TODO: SEARCH BAR */}
    </div>
  );
};

export default MobileNavbar;
