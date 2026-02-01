import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";

const massas = [
  { id: "chocolate", name: "Chocolate", price: 0 },
  { id: "baunilha", name: "Baunilha", price: 0 },
  { id: "cenoura", name: "Cenoura", price: 0 },
  { id: "red-velvet", name: "Red Velvet", price: 15 },
  { id: "limao", name: "Limão", price: 0 },
  { id: "laranja", name: "Laranja", price: 0 },
];

const recheios = [
  { id: "brigadeiro", name: "Brigadeiro", price: 25 },
  { id: "doce-leite", name: "Doce de Leite", price: 25 },
  { id: "ninho", name: "Leite Ninho", price: 25 },
  { id: "morango", name: "Morango com Chantilly", price: 25 },
  { id: "maracuja", name: "Maracujá", price: 22 },
  { id: "nutella", name: "Nutella", price: 35 },
  { id: "pistache", name: "Pistache", price: 25 },
];

const coberturas = [
  { id: "ganache", name: "Ganache de Chocolate", price: 35 },
  { id: "chantilly", name: "Chantilly", price: 35 },
  { id: "buttercream", name: "Buttercream", price: 10 },
  { id: "pasta-americana", name: "Pasta Americana", price: 30 },
  { id: "naked", name: "Naked (sem cobertura)", price: 16 },
];

const tamanhos = [
  { id: "p", name: "Pequeno (1kg - 10 fatias)", price: 40 },
  { id: "m", name: "Médio (2kg - 20 fatias)", price: 150 },
  { id: "g", name: "Grande (3kg - 30 fatias)", price: 220 },
  { id: "gg", name: "Extra Grande (5kg - 50 fatias)", price: 350 },
];

const Personalizar = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    massa: "",
    recheio: "",
    cobertura: "",
    tamanho: "",
    date: undefined as Date | undefined,
    delivery: "retirada",
    address: "",
    message: "",
    specialOptions: [] as string[],
  });

  const calculateTotal = () => {
    let total = 0;
    const selectedMassa = massas.find((m) => m.id === formData.massa);
    const selectedRecheio = recheios.find((r) => r.id === formData.recheio);
    const selectedCobertura = coberturas.find(
      (c) => c.id === formData.cobertura,
    );
    const selectedTamanho = tamanhos.find((t) => t.id === formData.tamanho);

    if (selectedTamanho) total += selectedTamanho.price;
    if (selectedMassa) total += selectedMassa.price;
    if (selectedRecheio) total += selectedRecheio.price;
    if (selectedCobertura) total += selectedCobertura.price;

    if (formData.specialOptions.includes("sem-gluten")) total += 20;
    if (formData.specialOptions.includes("sem-lactose")) total += 15;
    if (formData.specialOptions.includes("vegano")) total += 25;

    return total;
  };

  const handleSpecialOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        specialOptions: [...formData.specialOptions, option],
      });
    } else {
      setFormData({
        ...formData,
        specialOptions: formData.specialOptions.filter((o) => o !== option),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedMassa = massas.find((m) => m.id === formData.massa)?.name;
    const selectedRecheio = recheios.find(
      (r) => r.id === formData.recheio,
    )?.name;
    const selectedCobertura = coberturas.find(
      (c) => c.id === formData.cobertura,
    )?.name;
    const selectedTamanho = tamanhos.find(
      (t) => t.id === formData.tamanho,
    )?.name;

    const message = `Olá! Gostaria de encomendar um bolo personalizado:

📋 *Dados do Cliente:*
Nome: ${formData.name}
Telefone: ${formData.phone}
E-mail: ${formData.email}

🎂 *Detalhes do Bolo:*
Massa: ${selectedMassa}
Recheio: ${selectedRecheio}
Cobertura: ${selectedCobertura}
Tamanho: ${selectedTamanho}
${formData.specialOptions.length > 0 ? `Opções Especiais: ${formData.specialOptions.join(", ")}` : ""}

📅 *Data de Entrega:* ${formData.date ? format(formData.date, "dd/MM/yyyy", { locale: ptBR }) : "A definir"}
🚗 *Tipo:* ${formData.delivery === "entrega" ? "Entrega" : "Retirada"}
${formData.delivery === "entrega" ? `📍 Endereço: ${formData.address}` : ""}

💬 *Observações:* ${formData.message || "Nenhuma"}

💰 *Valor Estimado:* R$ ${calculateTotal().toFixed(2)}`;

    const whatsappUrl = `https://wa.me/5521995164449?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <span className="text-caramel font-inter font-semibold text-sm uppercase tracking-wider">
            Monte Seu Bolo
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-chocolate mt-2 mb-4">
            Personalize Sua Encomenda
          </h1>
          <p className="text-mediumBrown max-w-2xl mx-auto">
            Escolha cada detalhe do seu bolo perfeito. Massa, recheio, cobertura
            e tamanho - tudo do seu jeito!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="font-playfair text-2xl font-bold text-chocolate mb-6">
                  Seus Dados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-chocolate">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Seu nome"
                      required
                      className="border-cream focus:border-caramel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-chocolate">
                      Telefone/WhatsApp *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="(11) 99999-9999"
                      required
                      className="border-cream focus:border-caramel"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email" className="text-chocolate">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="seu@email.com"
                      className="border-cream focus:border-caramel"
                    />
                  </div>
                </div>
              </div>

              {/* Cake Options */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="font-playfair text-2xl font-bold text-chocolate mb-6">
                  Monte Seu Bolo
                </h2>

                {/* Tamanho */}
                <div className="mb-8">
                  <Label className="text-chocolate text-lg font-semibold mb-4 block">
                    Tamanho *
                  </Label>
                  <RadioGroup
                    value={formData.tamanho}
                    onValueChange={(value) =>
                      setFormData({ ...formData, tamanho: value })
                    }
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {tamanhos.map((tamanho) => (
                      <div
                        key={tamanho.id}
                        className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                          formData.tamanho === tamanho.id
                            ? "border-caramel bg-caramel/5"
                            : "border-cream hover:border-caramel/50"
                        }`}
                      >
                        <RadioGroupItem value={tamanho.id} id={tamanho.id} />
                        <Label
                          htmlFor={tamanho.id}
                          className="flex-1 cursor-pointer"
                        >
                          <span className="font-medium text-chocolate">
                            {tamanho.name}
                          </span>
                          <span className="block text-caramel font-semibold">
                            R$ {tamanho.price.toFixed(2)}
                          </span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Massa */}
                <div className="mb-8">
                  <Label className="text-chocolate text-lg font-semibold mb-4 block">
                    Massa *
                  </Label>
                  <Select
                    value={formData.massa}
                    onValueChange={(value) =>
                      setFormData({ ...formData, massa: value })
                    }
                  >
                    <SelectTrigger className="border-cream focus:border-caramel">
                      <SelectValue placeholder="Selecione a massa" />
                    </SelectTrigger>
                    <SelectContent>
                      {massas.map((massa) => (
                        <SelectItem key={massa.id} value={massa.id}>
                          {massa.name}{" "}
                          {massa.price > 0 && `(+R$ ${massa.price.toFixed(2)})`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Recheio */}
                <div className="mb-8">
                  <Label className="text-chocolate text-lg font-semibold mb-4 block">
                    Recheio *
                  </Label>
                  <Select
                    value={formData.recheio}
                    onValueChange={(value) =>
                      setFormData({ ...formData, recheio: value })
                    }
                  >
                    <SelectTrigger className="border-cream focus:border-caramel">
                      <SelectValue placeholder="Selecione o recheio" />
                    </SelectTrigger>
                    <SelectContent>
                      {recheios.map((recheio) => (
                        <SelectItem key={recheio.id} value={recheio.id}>
                          {recheio.name}{" "}
                          {recheio.price > 0 &&
                            `(+R$ ${recheio.price.toFixed(2)})`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Cobertura */}
                <div className="mb-8">
                  <Label className="text-chocolate text-lg font-semibold mb-4 block">
                    Cobertura *
                  </Label>
                  <Select
                    value={formData.cobertura}
                    onValueChange={(value) =>
                      setFormData({ ...formData, cobertura: value })
                    }
                  >
                    <SelectTrigger className="border-cream focus:border-caramel">
                      <SelectValue placeholder="Selecione a cobertura" />
                    </SelectTrigger>
                    <SelectContent>
                      {coberturas.map((cobertura) => (
                        <SelectItem key={cobertura.id} value={cobertura.id}>
                          {cobertura.name}{" "}
                          {cobertura.price > 0 &&
                            `(+R$ ${cobertura.price.toFixed(2)})`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Options */}
                <div>
                  <Label className="text-chocolate text-lg font-semibold mb-4 block">
                    Opções Especiais
                  </Label>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sem-gluten"
                        checked={formData.specialOptions.includes("sem-gluten")}
                        onCheckedChange={(checked) =>
                          handleSpecialOptionChange(
                            "sem-gluten",
                            checked as boolean,
                          )
                        }
                      />
                      <Label htmlFor="sem-gluten" className="cursor-pointer">
                        Sem Glúten (+R$ 20,00)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sem-lactose"
                        checked={formData.specialOptions.includes(
                          "sem-lactose",
                        )}
                        onCheckedChange={(checked) =>
                          handleSpecialOptionChange(
                            "sem-lactose",
                            checked as boolean,
                          )
                        }
                      />
                      <Label htmlFor="sem-lactose" className="cursor-pointer">
                        Sem Lactose (+R$ 15,00)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="vegano"
                        checked={formData.specialOptions.includes("vegano")}
                        onCheckedChange={(checked) =>
                          handleSpecialOptionChange(
                            "vegano",
                            checked as boolean,
                          )
                        }
                      />
                      <Label htmlFor="vegano" className="cursor-pointer">
                        Vegano (+R$ 25,00)
                      </Label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Options */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h2 className="font-playfair text-2xl font-bold text-chocolate mb-6">
                  Entrega
                </h2>

                {/* Date */}
                <div className="mb-6">
                  <Label className="text-chocolate text-lg font-semibold mb-4 block">
                    Data de Entrega/Retirada *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal border-cream"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? (
                          format(formData.date, "dd 'de' MMMM 'de' yyyy", {
                            locale: ptBR,
                          })
                        ) : (
                          <span>Selecione a data</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={(date) =>
                          setFormData({ ...formData, date: date })
                        }
                        disabled={(date) =>
                          date <
                          new Date(new Date().setDate(new Date().getDate() + 2))
                        }
                        locale={ptBR}
                      />
                    </PopoverContent>
                  </Popover>
                  <p className="text-mediumBrown text-sm mt-2">
                    * Mínimo de 48 horas de antecedência
                  </p>
                </div>

                {/* Delivery Type */}
                <div className="mb-6">
                  <Label className="text-chocolate text-lg font-semibold mb-4 block">
                    Tipo de Entrega *
                  </Label>
                  <RadioGroup
                    value={formData.delivery}
                    onValueChange={(value) =>
                      setFormData({ ...formData, delivery: value })
                    }
                    className="flex gap-4"
                  >
                    <div
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer flex-1 ${
                        formData.delivery === "retirada"
                          ? "border-caramel bg-caramel/5"
                          : "border-cream hover:border-caramel/50"
                      }`}
                    >
                      <RadioGroupItem value="retirada" id="retirada" />
                      <Label htmlFor="retirada" className="cursor-pointer">
                        Retirada no Local
                      </Label>
                    </div>
                    <div
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer flex-1 ${
                        formData.delivery === "entrega"
                          ? "border-caramel bg-caramel/5"
                          : "border-cream hover:border-caramel/50"
                      }`}
                    >
                      <RadioGroupItem value="entrega" id="entrega" />
                      <Label htmlFor="entrega" className="cursor-pointer">
                        Entrega (taxa adicional a partir de R$ 4,00)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Address */}
                {formData.delivery === "entrega" && (
                  <div className="mb-6">
                    <Label htmlFor="address" className="text-chocolate">
                      Endereço de Entrega *
                    </Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      placeholder="Rua, número, bairro, cidade..."
                      rows={3}
                      className="border-cream focus:border-caramel resize-none mt-2"
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-chocolate">
                    Observações / Mensagem no Bolo
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Descreva detalhes adicionais, decoração desejada, mensagem para escrever no bolo..."
                    rows={4}
                    className="border-cream focus:border-caramel resize-none mt-2"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="bg-chocolate text-white p-8 rounded-2xl">
                <h2 className="font-playfair text-2xl font-bold mb-4">
                  Resumo do Pedido
                </h2>
                <div className="space-y-2 mb-6">
                  {formData.tamanho && (
                    <p>
                      Tamanho:{" "}
                      {tamanhos.find((t) => t.id === formData.tamanho)?.name}
                    </p>
                  )}
                  {formData.massa && (
                    <p>
                      Massa: {massas.find((m) => m.id === formData.massa)?.name}
                    </p>
                  )}
                  {formData.recheio && (
                    <p>
                      Recheio:{" "}
                      {recheios.find((r) => r.id === formData.recheio)?.name}
                    </p>
                  )}
                  {formData.cobertura && (
                    <p>
                      Cobertura:{" "}
                      {
                        coberturas.find((c) => c.id === formData.cobertura)
                          ?.name
                      }
                    </p>
                  )}
                  {formData.specialOptions.length > 0 && (
                    <p>
                      Opções Especiais: {formData.specialOptions.join(", ")}
                    </p>
                  )}
                </div>
                <div className="border-t border-white/20 pt-4 mb-6">
                  <p className="text-3xl font-playfair font-bold text-caramel">
                    Total Estimado: R$ {calculateTotal().toFixed(2)}
                  </p>
                  <p className="text-cream/70 text-sm mt-1">
                    * Valor final pode variar de acordo com decoração
                  </p>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-whatsapp hover:bg-green-600 text-white font-inter font-semibold py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar Pedido pelo WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personalizar;
