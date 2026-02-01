import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    );
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <span className="text-caramel font-inter font-semibold text-sm uppercase tracking-wider">
            Fale Conosco
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-chocolate mt-2 mb-4">
            Entre em Contato
          </h1>
          <p className="text-mediumBrown max-w-2xl mx-auto">
            Estamos aqui para ajudar! Tire suas dúvidas, faça orçamentos ou
            simplesmente diga olá. Respondemos em até 24 horas.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="font-playfair text-2xl font-bold text-chocolate mb-6">
                Envie uma Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-chocolate">
                      Nome Completo
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="border-cream focus:border-caramel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-chocolate">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      required
                      className="border-cream focus:border-caramel"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-chocolate">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="border-cream focus:border-caramel"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-chocolate">
                    Assunto
                  </Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      setFormData({ ...formData, subject: value })
                    }
                  >
                    <SelectTrigger className="border-cream focus:border-caramel">
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="orcamento">Orçamento</SelectItem>
                      <SelectItem value="duvida">Dúvida</SelectItem>
                      <SelectItem value="encomenda">Encomenda</SelectItem>
                      <SelectItem value="parceria">Parceria</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-chocolate">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem aqui..."
                    rows={5}
                    required
                    className="border-cream focus:border-caramel resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-caramel hover:bg-chocolate text-white font-inter font-semibold"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-chocolate text-white p-8 rounded-2xl">
                <h2 className="font-playfair text-2xl font-bold mb-6">
                  Contato Rápido
                </h2>
                <p className="text-cream/90 mb-6">
                  Prefere falar diretamente conosco? Use nosso WhatsApp para
                  atendimento rápido!
                </p>
                <a
                  href="https://wa.me/55219951644499?text=Olá! Gostaria de mais informações sobre os bolos."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full bg-whatsapp hover:bg-green-600 text-white font-inter font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chamar no WhatsApp
                  </Button>
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-cream p-8 rounded-2xl">
                <h2 className="font-playfair text-2xl font-bold text-chocolate mb-6">
                  Informações de Contato
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-caramel/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-caramel" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-chocolate">
                        Endereço
                      </h3>
                      <p className="text-mediumBrown text-sm">
                        Rua das Flores, 123 - Centro
                        <br />
                        São Paulo - SP, 01234-567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-caramel/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-caramel" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-chocolate">
                        Telefone
                      </h3>
                      <p className="text-mediumBrown text-sm">
                        (11) 99999-9999
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-caramel/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-caramel" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-chocolate">
                        E-mail
                      </h3>
                      <p className="text-mediumBrown text-sm">
                        contato@deliciasdaandresiani.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-caramel/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-caramel" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-chocolate">
                        Horário de Funcionamento
                      </h3>
                      <p className="text-mediumBrown text-sm">
                        Segunda a Sexta: 08:00 - 18:00
                        <br />
                        Sábado: 09:00 - 14:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-caramel/20">
                  <h3 className="font-inter font-semibold text-chocolate mb-4">
                    Siga-nos nas Redes Sociais
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/deliciasdaandresiani/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-caramel/20 rounded-full flex items-center justify-center hover:bg-caramel hover:text-white transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/andresiani.motaroque"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-caramel/20 rounded-full flex items-center justify-center hover:bg-caramel hover:text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="font-playfair text-2xl font-bold text-chocolate mb-4">
                  Política de Entrega
                </h2>
                <ul className="space-y-3 text-mediumBrown text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-caramel">✓</span>
                    Entregamos em toda a cidade de São Paulo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-caramel">✓</span>
                    Taxa de entrega calculada por distância
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-caramel">✓</span>
                    Retirada no local disponível (sem taxa)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-caramel">✓</span>
                    Entregas em caixas térmicas especiais
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-caramel">✓</span>
                    Agende sua entrega com antecedência
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
