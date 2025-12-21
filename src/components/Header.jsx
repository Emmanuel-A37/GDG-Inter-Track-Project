import Shield from "../assets/shield.svg";
import Menu from "../assets/menu.svg";
import { cn } from "../utils/cn"

const Header = ({ showIcons, customClass, headerTitle }) => {
  return (
    <header className={cn("bg-white flex items-center justify-between px-4 pt-4 pb-2 border-b border-borderGrey", customClass)}>
      <div>
        {/* this pushes the admin portal text because it comes with space */}
        {showIcons && <img src={Shield} alt="shield" />}
        
      </div>
      <h2 className="text-lg md:text-2xl font-bold text-dark">{headerTitle}</h2>
      <div>
        {showIcons && <img src={Menu} alt="menu" />}
        
      </div>
    </header>
  );
};

export default Header;
