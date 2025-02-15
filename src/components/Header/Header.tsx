import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <div className="hidden md:flex">
        <DesktopMenu />
      </div>
    </div>
  );
};

export default Header;
