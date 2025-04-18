import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div>
      <div className="lg:hidden">
        <MobileMenu />
      </div>
      <div className="hidden lg:flex">
        <DesktopMenu />
      </div>
    </div>
  );
};

export default Header;
