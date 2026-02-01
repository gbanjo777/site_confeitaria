# Shadcn UI Template

Template moderno e produtivo para desenvolvimento de aplicações front-end utilizando **React**, **TypeScript**, **Vite**, **Tailwind CSS** e **shadcn/ui**.

Este repositório fornece uma base sólida, organizada e pronta para escalar, ideal tanto para projetos pessoais quanto profissionais.

---

## 🚀 Tecnologias Utilizadas

- **Vite** – Build tool rápida e moderna
- **React** – Biblioteca para construção de interfaces
- **TypeScript** – Tipagem estática para maior segurança e manutenção
- **Tailwind CSS** – Estilização utilitária e altamente customizável
- **shadcn/ui** – Componentes acessíveis, reutilizáveis e elegantes

Todos os componentes do **shadcn/ui** já estão instalados localmente e disponíveis em:

```
@/components/ui
```

---

## 📁 Estrutura do Projeto

```
├── index.html              # Ponto de entrada HTML
├── package.json            # Dependências e scripts do projeto
├── vite.config.ts          # Configuração do Vite
├── tailwind.config.js      # Configuração do Tailwind CSS
├── src
│   ├── app.tsx             # Componente raiz da aplicação
│   ├── main.tsx            # Arquivo de inicialização
│   ├── index.css           # Estilos globais
│   └── pages
│       └── Index.tsx       # Página inicial (Home)
```

---

## 🎨 Estilização

- Utilize **classes do Tailwind CSS** diretamente nos componentes
- Estilos globais podem ser adicionados em:

```
src/index.css
```

- Customizações avançadas podem ser feitas via:

```
tailwind.config.js
```

---

## 🧩 Componentes

- Todos os componentes do **shadcn/ui** já estão pré-instalados
- Importe-os diretamente nos seus componentes React:

```ts
import { Button } from "@/components/ui/button";
```

---

## 🛠️ Desenvolvimento

### Instalar dependências

```bash
pnpm install
```

### Rodar o projeto em ambiente de desenvolvimento

```bash
pnpm run dev
```

O projeto estará disponível em:

```
http://localhost:5173
```

---

## 📦 Build para Produção

Para gerar os arquivos otimizados para produção:

```bash
pnpm run build
```

Os arquivos finais serão gerados na pasta `dist/`.

---

## ⚠️ Observações Importantes

- O alias `@/` aponta para o diretório `src/`
- Evite **reexportar tipos** no TypeScript que já estejam sendo importados
- Este template segue boas práticas de organização e escalabilidade

---

## 📄 Licença

Este projeto pode ser utilizado livremente para fins pessoais ou comerciais.

---

## 🤝 Contribuição

Sinta-se à vontade para abrir issues ou pull requests com melhorias, correções ou sugestões.

---

Desenvolvido com foco em produtividade, organização e qualidade de código.
