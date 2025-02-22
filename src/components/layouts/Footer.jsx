import { PiCoffeeBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="z-[99] w-full min-h-[10vh]">
      <div className="container flex flex-col md:flex-row justify-between items-center border-t border-dark-2 p-6">
        <p className="flex items-center gap-2">
          From Jakarta with <PiCoffeeBold />
        </p>
        <p className="flex items-center gap-2">
          &copy;2025 Fadida Zanetti Junaedy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
