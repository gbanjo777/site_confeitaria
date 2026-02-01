import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Cardápio", path: "/cardapio" },
    { name: "Galeria", path: "/galeria" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warmWhite/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Cake className="w-8 h-8 text-caramel" />
            <div className="flex flex-col">
              <span className="font-playfair text-xl font-bold text-chocolate">
                Delícias da
              </span>
              <span className="font-playfair text-lg text-caramel -mt-1">
                Andresiani
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter font-medium text-sm transition-colors hover:text-caramel ${
                  isActive(link.path) ? "text-caramel" : "text-darkBrown"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/personalizar">
              <Button className="bg-caramel hover:bg-chocolate text-white font-inter font-semibold px-6">
                Encomendar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-chocolate" />
            ) : (
              <Menu className="w-6 h-6 text-chocolate" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-cream animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 font-inter font-medium transition-colors hover:text-caramel ${
                  isActive(link.path) ? "text-caramel" : "text-darkBrown"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/personalizar" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-4 bg-caramel hover:bg-chocolate text-white font-inter font-semibold">
                Encomendar
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
