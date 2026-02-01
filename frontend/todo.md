# Delícias da Andresiani - Site de Confeitaria

## Design Guidelines

### Design References (Primary Inspiration)

- **Estilo**: Confeitaria artesanal, elegante e acolhedora
- **Mood**: Doce, sofisticado, caseiro e convidativo

### Color Palette

- Primary: #D4A574 (Caramel - tom quente de doce)
- Secondary: #8B4513 (Chocolate Brown - sofisticação)
- Accent: #F5E6D3 (Cream - suavidade)
- Background: #FFF8F0 (Warm White - acolhedor)
- Text Primary: #3D2914 (Dark Brown)
- Text Secondary: #6B5344 (Medium Brown)
- Success: #7CB342 (Verde para opções saudáveis)
- Pink Accent: #E8B4B8 (Rosa suave para detalhes femininos)

### Typography

- Heading1: Playfair Display font-weight 700 (48px) - elegância
- Heading2: Playfair Display font-weight 600 (36px)
- Heading3: Playfair Display font-weight 500 (24px)
- Body: Inter font-weight 400 (16px)
- Navigation: Inter font-weight 600 (14px)

### Key Component Styles

- **Buttons**: Caramel background (#D4A574), white text, 12px rounded, hover: darken 10%
- **Cards**: White background, soft shadow, 16px rounded, hover: lift effect
- **Forms**: Cream background inputs, caramel border on focus
- **WhatsApp Button**: Verde WhatsApp (#25D366), fixed position, sempre visível

### Layout & Spacing

- Hero section: Full viewport com imagem de fundo
- Product grid: 3 columns desktop, 2 tablet, 1 mobile, 24px gaps
- Section padding: 80px vertical
- Card hover: Lift 4px with soft shadow

### Images to Generate

1. **hero-cake-display.jpg** - Mesa elegante com vários bolos decorados, luz natural suave, estilo editorial de confeitaria (photorealistic, warm tones)
2. **birthday-cake-colorful.jpg** - Bolo de aniversário decorado com flores de açúcar, cores vibrantes, fundo neutro (photorealistic, celebration mood)
3. **chocolate-cake-slice.jpg** - Fatia de bolo de chocolate com recheio cremoso escorrendo, close-up apetitoso (photorealistic, food photography)
4. **wedding-cake-elegant.jpg** - Bolo de casamento branco elegante com detalhes dourados, flores naturais (photorealistic, luxury feel)
5. **homemade-cake-rustic.jpg** - Bolo caseiro rústico em prato de cerâmica, ambiente aconchegante de cozinha (photorealistic, cozy atmosphere)
6. **confectioner-working.jpg** - Confeiteira decorando um bolo com carinho, ambiente de cozinha profissional (photorealistic, artisan feel)

---

## Development Tasks

### 1. Setup & Structure

- [x] Initialize template
- [ ] Install dependencies (Google Fonts)
- [ ] Configure tailwind with custom colors

### 2. Generate Images

- [ ] Create all 6 images using ImageCreator.generate_images

### 3. Components to Create

- [ ] Header/Navigation (src/components/Header.tsx)
- [ ] Footer (src/components/Footer.tsx)
- [ ] WhatsAppButton (src/components/WhatsAppButton.tsx)
- [ ] ProductCard (src/components/ProductCard.tsx)
- [ ] TestimonialCard (src/components/TestimonialCard.tsx)
- [ ] CategoryFilter (src/components/CategoryFilter.tsx)

### 4. Pages to Create

- [ ] Home (src/pages/Index.tsx) - Hero, Destaques, Depoimentos, CTA
- [ ] Cardapio (src/pages/Cardapio.tsx) - Menu completo com filtros
- [ ] Galeria (src/pages/Galeria.tsx) - Portfólio de trabalhos
- [ ] Sobre (src/pages/Sobre.tsx) - História da confeiteira
- [ ] Contato (src/pages/Contato.tsx) - Formulário e informações
- [ ] Personalizar (src/pages/Personalizar.tsx) - Formulário de encomenda

### 5. Features

- [ ] Navegação responsiva
- [ ] Filtros por categoria no cardápio
- [ ] Formulário de personalização de bolos
- [ ] Integração WhatsApp
- [ ] Seção de opções especiais (sem glúten, vegano)
- [ ] Animações suaves

### 6. Final

- [ ] Lint check
- [ ] Build check
- [ ] UI validation
