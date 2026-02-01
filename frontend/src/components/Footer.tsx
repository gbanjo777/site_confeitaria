import { Link } from "react-router-dom";
import {
  Cake,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-chocolate text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cake className="w-8 h-8 text-caramel" />
              <div className="flex flex-col">
                <span className="font-playfair text-xl font-bold">
                  Delícias da
                </span>
                <span className="font-playfair text-lg text-caramel -mt-1">
                  Andresiani
                </span>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              Bolos artesanais feitos com amor e ingredientes selecionados.
              Transformando momentos especiais em memórias doces.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/deliciasdaandresiani/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-caramel/20 flex items-center justify-center hover:bg-caramel transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/andresiani.motaroque"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-caramel/20 flex items-center justify-center hover:bg-caramel transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-cream/80 hover:text-caramel transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/cardapio"
                  className="text-cream/80 hover:text-caramel transition-colors text-sm"
                >
                  Cardápio
                </Link>
              </li>
              <li>
                <Link
                  to="/galeria"
                  className="text-cream/80 hover:text-caramel transition-colors text-sm"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-cream/80 hover:text-caramel transition-colors text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/personalizar"
                  className="text-cream/80 hover:text-caramel transition-colors text-sm"
                >
                  Encomendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-cream/80 text-sm">
                <MapPin className="w-4 h-4 text-caramel flex-shrink-0" />
                <span>Rua das Flores, 123 - Centro</span>
              </li>
              <li className="flex items-center gap-3 text-cream/80 text-sm">
                <Phone className="w-4 h-4 text-caramel flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-cream/80 text-sm">
                <Mail className="w-4 h-4 text-caramel flex-shrink-0" />
                <span>contato@deliciasdaandresiani.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">
              Horário de Funcionamento
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-cream/80 text-sm">
                <Clock className="w-4 h-4 text-caramel flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Segunda a Sexta</p>
                  <p>08:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-cream/80 text-sm">
                <Clock className="w-4 h-4 text-caramel flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Sábado</p>
                  <p>09:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-cream/60 text-sm">
            © 2025 Delícias da Andresiani. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
