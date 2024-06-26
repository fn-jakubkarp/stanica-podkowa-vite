interface HamburgerMenuProps {
  clicked?: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ clicked }) => {
  return (
    <>
      <span
        id="line-1"
        className={`block h-0.5 w-full bg-text-DARK transition-transform duration-300 ${clicked ? "translate-y-2 rotate-45 transform" : ""}`}
      ></span>
      <span
        id="line-2"
        className={`block h-0.5 w-full bg-text-DARK transition-opacity duration-300 ${clicked ? "opacity-0" : "opacity-100"}`}
      ></span>
      <span
        id="line-3"
        className={`block h-0.5 w-full bg-text-DARK transition-transform duration-300 ${clicked ? "-translate-y-2 -rotate-45 transform " : ""}`}
      ></span>
    </>
  );
};

export default HamburgerMenu;
