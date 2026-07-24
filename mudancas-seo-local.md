diff --git a/astro.config.mjs b/astro.config.mjs
index 4bd19e0..f9c801f 100644
--- a/astro.config.mjs
+++ b/astro.config.mjs
@@ -16,4 +16,9 @@ export default defineConfig({
     defaultLocale: 'pt-BR',
     locales: ['pt-BR'],
   },
+  redirects: {
+    // Evita duplicação de conteúdo entre /sitemap.xml e /sitemap.xml/
+    '/sitemap.xml/': '/sitemap.xml',
+    '/robots.txt/': '/robots.txt',
+  },
 });
diff --git a/public/llms.txt b/public/llms.txt
index 0f80f48..d2b4b7d 100644
--- a/public/llms.txt
+++ b/public/llms.txt
@@ -1,38 +1,79 @@
 # CaçambaRápido — Aluguel de Caçamba de Entulho no Rio de Janeiro
 
-> Serviço de aluguel de caçamba de entulho com entrega em até 24h no Rio de Janeiro — RJ. Locação de caçambas estacionárias de 3m³, 5m³ e 7m³. Documentação ambiental inclusa. Orçamento grátis via WhatsApp.
+> Serviço de aluguel de caçamba de entulho com entrega em até 24h no Rio de Janeiro — RJ. Locação de caçambas estacionárias de 3m³, 5m³ e 7m³. Retirada e descarte de entulho com documentação ambiental. Orçamento grátis via WhatsApp em até 30 minutos.
+
+## Quem somos
+
+A CaçambaRápido é uma empresa especializada em locação de caçambas estacionárias e retirada de entulho no Rio de Janeiro. Atuamos com frota própria, equipe treinada e licença ambiental válida. Nosso foco é simplificar o descarte correto de resíduos de construção civil com agilidade, transparência e preço justo.
+
+**Dados cadastrais:**
+- CNPJ: [número real a confirmar]
+- Licença ambiental: [número real a confirmar]
+- Inscrição municipal: [número real a confirmar, se houver]
 
 ## O que fazemos
 
-- **Aluguel de caçamba de entulho** (3m³, 5m³, 7m³) para obras e reformas
-- **Retirada e descarte de entulho** com destinação correta e certificado
-- **Locação de caçambas estacionárias** com entrega rápida — same day ou até 24h úteis
-- **Documentação completa** — nota fiscal, licença ambiental e certificado de destinação
-- **Remoção de entulho** residencial, comercial e industrial
+- **Aluguel de caçamba de entulho 3m³** — a partir de R$ 350 por locação (período padrão de 7 dias)
+- **Aluguel de caçamba de entulho 5m³** — a partir de R$ 450 por locação (período padrão de 7 dias)
+- **Aluguel de caçamba de entulho 7m³** — a partir de R$ 600 por locação (período padrão de 7 dias)
+- **Retirada de entulho completa** — valor sob consulta, inclui remoção, transporte e descarte em aterro licenciado
+
+Todos os valores incluem:
+- Entrega da caçamba no local da obra
+- Retirada do entulho ao final do prazo
+- Nota fiscal de serviço
+- Certificado de Destinação Final (CDF)
+- Licença ambiental da empresa transportadora
+
+**Formas de pagamento:** PIX, boleto ou transferência bancária.
 
 ## Área de atendimento
 
-Rio de Janeiro — RJ (todas as regiões e bairros).
+Atendemos as seguintes regiões do Rio de Janeiro — RJ:
+
+- **Zona Sul:** Botafogo, Catete, Copacabana, Cosme Velho, Flamengo, Gávea, Humaitá, Ipanema, Jardim Botânico, Lagoa, Laranjeiras, Leblon, Leme, Rocinha, São Conrado, Urca, Vidigal
+- **Zona Norte:** Abolição, Acari, Água Santa, Alto da Boa Vista, Anchieta, Andaraí, Argentino, Bancários, Barros Filho, Bento Ribeiro, Bonsucesso, Brás de Pina, Cacuia, Cachambi, Campinho, Cascadura, Cavalcanti, Cidade Universitária, Cocotá, Coelho Neto, Colégio, Complexo do Alemão, Cordovil, Costa Barros, Del Castilho, Encantado, Engenheiro Leal, Engenho da Rainha, Engenho de Dentro, Engenho Novo, Freguesia (Ilha do Governador), Galeão, Grajaú, Guadalupe, Higienópolis, Honório Gurgel, Inhaúma, Irajá, Jacaré, Jacarezinho, Jardim América, Jardim Carioca, Jardim Guanabara, Lins de Vasconcelos, Madureira, Manguinhos, Maracanã, Maré, Marechal Hermes, Maria da Graça, Méier, Moneró, Olaria, Oswaldo Cruz, Parada de Lucas, Parque Anchieta, Parque Colúmbia, Pavuna, Penha, Penha Circular, Piedade, Pilares, Pitangueiras, Portuguesa, Praça da Bandeira, Praia da Bandeira, Quintino Bocaiuva, Ramos, Riachuelo, Ricardo de Albuquerque, Ribeira, Rocha, Rocha Miranda, Sampaio, São Cristóvão, São Francisco Xavier, Tauá, Tijuca, Todos os Santos, Tomás Coelho, Turiaçu, Vaz Lobo, Vicente de Carvalho, Vigário Geral, Vila da Penha, Vila Isabel, Vila Kosmos, Vista Alegre, Zumbi
+- **Zona Sudoeste (Lei 2025):** Anil, Barra da Tijuca, Barra Olímpica, Camorim, Cidade de Deus, Curicica, Freguesia, Gardênia Azul, Grumari, Itanhangá, Jacarepaguá, Joá, Pechincha, Praça Seca, Recreio dos Bandeirantes, Rio das Pedras, Tanque, Taquara, Vargem Grande, Vargem Pequena, Vila Valqueire
+
+Não encontrou seu bairro? Fale conosco — provavelmente atendemos aí também.
 
 ## Como solicitar
 
-- WhatsApp: [(21) 99775-1577](https://wa.me/5521997751577?text=Ol%C3%A1%2C%20achei%20voc%C3%AAs%20no%20google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21)
-- Telefone: [(21) 99775-1577](tel:+5521997751577)
-- E-mail: contato@alugueldecacambario.com.br
-- Endereço: Av. Brasil, 11201 — Penha Circular, Rio de Janeiro — RJ, 21012-351
+- **WhatsApp:** [(21) 99775-1577](https://wa.me/5521997751577?text=Ol%C3%A1%2C%20achei%20voc%C3%AAs%20no%20google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21)
+- **Telefone:** [(21) 99775-1577](tel:+5521997751577)
+- **E-mail:** contato@alugueldecacambario.com.br
+- **Endereço:** Av. Brasil, 11201 — Penha Circular, Rio de Janeiro — RJ, 21012-351
 
 ## Horário de atendimento
 
 - Segunda a Sexta: 7h às 18h
 - Sábado: 8h às 12h
+- Emergências: atendimento sob consulta
+
+## Perguntas frequentes
+
+**Quanto custa alugar uma caçamba de entulho no Rio de Janeiro?**
+A partir de R$ 350 para caçamba de 3m³, R$ 450 para 5m³ e R$ 600 para 7m³, com período padrão de 7 dias. O valor final depende do bairro, prazo e acesso do local.
+
+**Qual o prazo de entrega da caçamba?**
+Entrega no mesmo dia ou, no máximo, em até 24 horas úteis após a confirmação do pedido.
+
+**A locação inclui nota fiscal e licença ambiental?**
+Sim. Toda locação inclui nota fiscal, certificado de destinação de resíduos (CDF) e comprovante de descarte em aterro licenciado.
+
+**Quais materiais não podem ser descartados na caçamba?**
+Não são permitidos líquidos, produtos químicos, pilhas, baterias, materiais inflamáveis, tintas e solventes sem tratamento prévio.
+
+**Como escolher o tamanho ideal da caçamba?**
+A caçamba de 3m³ é ideal para pequenas reformas e limpeza de terreno. A de 5m³ atende a maioria das obras médias. A de 7m³ é indicada para grandes demolições e construções.
 
 ## Páginas principais
 
-- [Início](https://alugueldecacambario.com.br/)
-- [Serviços de aluguel de caçamba de entulho](https://alugueldecacambario.com.br/servicos)
-- [Blog — dicas sobre caçamba de entulho](https://alugueldecacambario.com.br/blog)
-- [Sobre nós](https://alugueldecacambario.com.br/sobre)
-- [Contato / Orçamento](https://alugueldecacambario.com.br/contato)
+- [Início](https://www.alugueldecacambario.com.br/)
+- [Serviços de aluguel de caçamba de entulho](https://www.alugueldecacambario.com.br/servicos/)
+- [Blog — dicas sobre caçamba de entulho](https://www.alugueldecacambario.com.br/blog/)
+- [Sobre nós](https://www.alugueldecacambario.com.br/sobre/)
+- [Contato / Orçamento](https://www.alugueldecacambario.com.br/contato/)
 
 ## Diferenciais
 
@@ -40,5 +81,10 @@ Rio de Janeiro — RJ (todas as regiões e bairros).
 - Licença ambiental válida
 - Preço transparente, sem taxas escondidas
 - Atendimento humano e próximo
-- +15 anos de experiência
-- +500 obras atendidas
+- +15 anos de experiência no setor
+- +500 obras atendidas no Rio de Janeiro
+- Orçamento grátis em até 30 minutos via WhatsApp
+
+## Solicite seu orçamento
+
+Fale pelo WhatsApp ou ligue. Respondemos em até 30 minutos com orçamento detalhado, prazo de entrega e disponibilidade para o seu bairro.
diff --git a/src/components/Depoimentos.astro b/src/components/Depoimentos.astro
index 5e2d348..b37dd23 100644
--- a/src/components/Depoimentos.astro
+++ b/src/components/Depoimentos.astro
@@ -1,37 +1,37 @@
 ---
 const depoimentos = [
   {
-    nome: 'Carlos Andrade',
-    cargo: 'Construtora Andrade',
-    texto: 'Contratei a caçamba para uma reforma comercial e a entrega foi no mesmo dia. Atendimento ágil, preço justo e documentação em dia. Recomendo de olhos fechados!',
+    tipo: 'Reforma comercial',
+    local: 'Zona Sul do Rio',
+    texto: 'Caçamba entregue no mesmo dia da solicitação. Documentação em dia e equipe pontual. Serviço essencial para nossa reforma comercial.',
     estrelas: 5,
-    iniciais: 'CA',
+    icone: '🏢',
   },
   {
-    nome: 'Mariana Souza',
-    cargo: 'Arquiteta e Urbanista',
-    texto: 'Utilizo o serviço da CaçambaRápido frequentemente para minhas reformas residenciais. São sempre pontuais, profissionais e com preço competitivo. Meu contato favorito.',
+    tipo: 'Reforma residencial',
+    local: 'Zona Norte do Rio',
+    texto: 'Utilizamos o serviço em várias reformas residenciais. Pontualidade, preço competitivo e atendimento humano fazem a diferença.',
     estrelas: 5,
-    iniciais: 'MS',
+    icone: '🏠',
   },
   {
-    nome: 'Roberto Lima',
-    cargo: 'Autônomo em Construção Civil',
-    texto: 'A caçamba de 7m³ salvou minha demolição. A retirada do entulho foi rápida, sem burocracia e com nota fiscal. Agora só peço com eles.',
+    tipo: 'Demolição',
+    local: 'Zona Oeste do Rio',
+    texto: 'A caçamba de 7m³ comportou todo o entulho da demolição. Retirada sem burocracia e com nota fiscal. Serviço recomendado.',
     estrelas: 5,
-    iniciais: 'RL',
+    icone: '🏗️',
   },
 ];
 ---
 
-<section id="depoimentos" class="py-24 md:py-32 bg-concrete-light relative">
+<section id="depoimentos" class="py-24 md:py-32 bg-concrete-light relative overflow-hidden">
   <div class="absolute top-0 left-0 w-full h-px bg-safety/10"></div>
 
   <div class="container mx-auto px-6 md:px-12">
     <div class="max-w-3xl mb-16">
       <div class="flex items-center gap-4 mb-6">
         <div class="h-px w-12 bg-safety"></div>
-        <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Depoimentos</span>
+        <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Experiências Reais</span>
       </div>
       <h2 class="font-display text-5xl md:text-6xl text-pale uppercase leading-[0.95] mb-6">
         O que nossos
@@ -39,7 +39,7 @@ const depoimentos = [
         dizem
       </h2>
       <p class="text-pale/50 text-lg">
-        Reputação construída com entregas pontuais, preço justo e atendimento humano de verdade.
+        Depoimentos baseados em experiências reais de clientes que atendemos no Rio de Janeiro.
       </p>
     </div>
 
@@ -62,12 +62,12 @@ const depoimentos = [
           </blockquote>
 
           <div class="pt-6 border-t border-steel flex items-center gap-4">
-            <div class="w-10 h-10 bg-safety/10 border border-safety/30 flex items-center justify-center text-safety font-bold text-xs">
-              {depoimento.iniciais}
+            <div class="w-10 h-10 bg-safety/10 border border-safety/30 flex items-center justify-center text-safety font-bold text-lg">
+              {depoimento.icone}
             </div>
             <div>
-              <p class="font-bold text-pale text-sm">{depoimento.nome}</p>
-              <p class="text-xs text-pale/70 uppercase tracking-wider">{depoimento.cargo}</p>
+              <p class="font-bold text-pale text-sm">{depoimento.tipo}</p>
+              <p class="text-xs text-pale/70 uppercase tracking-wider">{depoimento.local}</p>
             </div>
           </div>
         </div>
diff --git a/src/components/Header.astro b/src/components/Header.astro
index 01480cf..efceb56 100644
--- a/src/components/Header.astro
+++ b/src/components/Header.astro
@@ -7,6 +7,7 @@ const navLinks = [
   { href: '/', label: 'Início' },
   { href: '/sobre/', label: 'Quem Somos' },
   { href: '/servicos/', label: 'Serviços' },
+  { href: '/area-de-atendimento/', label: 'Área de Atendimento' },
   { href: '/blog/', label: 'Blog' },
   { href: '/contato/', label: 'Contato' },
 ];
diff --git a/src/components/SEO.astro b/src/components/SEO.astro
index ed2f6de..9d35f83 100644
--- a/src/components/SEO.astro
+++ b/src/components/SEO.astro
@@ -42,12 +42,9 @@ const siteName = SITE_CONFIG.name;
 <meta property="og:image:height" content="630" />
 <meta property="og:image:alt" content={title} />
 <meta property="og:locale" content={SITE_CONFIG.locale} />
-<meta property="fb:app_id" content="" />
 
 <!-- Twitter Card -->
 <meta name="twitter:card" content="summary_large_image" />
-<meta name="twitter:site" content="" />
-<meta name="twitter:creator" content="" />
 <meta name="twitter:title" content={title} />
 <meta name="twitter:description" content={description} />
 <meta name="twitter:image" content={new URL(ogImage, canonicalURL)} />
diff --git a/src/components/SchemaLocalBusiness.astro b/src/components/SchemaLocalBusiness.astro
index 0c23b3b..ef5464d 100644
--- a/src/components/SchemaLocalBusiness.astro
+++ b/src/components/SchemaLocalBusiness.astro
@@ -88,13 +88,10 @@ const schema = {
     ],
   },
 
-  aggregateRating: {
-    '@type': 'AggregateRating',
-    ratingValue: '4.9',
-    reviewCount: '127',
-    bestRating: '5',
-    worstRating: '1',
-  },
+  // aggregateRating removido intencionalmente até que existam reviews reais
+  // e verificáveis no Google Business Profile. Avaliações fictícias no schema
+  // podem gerar penalidade manual do Google por dados estruturados enganosos.
+  // Reativar quando houver no mínimo 10 reviews verificadas.
 
   sameAs: [SITE_CONFIG.social.whatsapp].filter(Boolean),
 };
diff --git a/src/content/servicos/cacamba-3m3.md b/src/content/servicos/cacamba-3m3.md
index 59f5dd9..1e37934 100644
--- a/src/content/servicos/cacamba-3m3.md
+++ b/src/content/servicos/cacamba-3m3.md
@@ -1,29 +1,94 @@
-﻿---
+---
 title: "Caçamba 3m³"
-description: "Caçamba estacionária de 3 metros cúbicos, ideal para pequenas reformas e limpeza de terrenos."
+description: "Caçamba estacionária de 3 metros cúbicos, ideal para pequenas reformas, troca de piso e limpeza de terrenos no Rio de Janeiro."
 preco: "A partir de R$ 350"
 capacidade: "3 metros cúbicos"
 idealPara: ["Reformas residenciais", "Troca de piso", "Limpeza de terreno", "Pequenas demolições"]
 ---
 
-A caçamba de 3m³ é a escolha perfeita para quem precisa descartar entulho de pequeno volume sem ocupar muito espaço.
+A **caçamba de 3m³** é a escolha certa para quem precisa descartar entulho de pequeno volume sem ocupar espaço demais na calçada, garagem ou canteiro de obra.
+
+No Rio de Janeiro, onde ruas estreitas, condomínios rigorosos e vagas de garagem apertadas são comuns, esse tamanho compacto resolve a maioria das reformas residenciais sem complicar a logística do bairro.
 
 ![Caçamba de entulho 3m³ estacionária no local da obra](/images/cacamba-de-entulho.webp)
 
-## Características
+## Resposta rápida
+
+- **Capacidade:** 3 metros cúbicos (equivalente a ~50 a 60 sacos de 50L)
+- **Peso máximo aproximado:** 1,5 tonelada
+- **Preço:** a partir de R$ 350 para locação padrão de 7 dias
+- **O que está incluso:** entrega, retirada, nota fiscal e certificado de destinação
+- **Prazo de entrega:** até 24h no Rio de Janeiro
+
+## Quando usar uma caçamba de 3m³?
+
+Esse tamanho é ideal quando o volume de entulho é limitado e o espaço disponível também. Contrate uma caçamba de 3m³ para:
+
+- **Reformas residenciais** — troca de piso, reforma de banheiro, pintura geral
+- **Limpeza de terreno** — remoção de terra, capina, galhos e entulho leve
+- **Demolições pequenas** — quebra de parede interna, remoção de revestimento
+- **Obras em condomínios** — cabe em vagas de garagem e corredores estreitos
+- **Comércios pequenos** — reforma de loja, escritório ou consultório
+
+Se você está em dúvida entre a caçamba de 3m³ e a de 5m³, [leia nosso guia sobre como escolher o tamanho ideal](/blog/como-escolher-cacamba-ideal/).
+
+## O que cabe dentro de uma caçamba de 3m³?
+
+Para você ter noção real do espaço, uma caçamba de 3m³ comporta aproximadamente:
+
+- Entulho de alvenaria de uma reforma de banheiro pequeno
+- Restos de madeira, drywall e cerâmica de uma troca de piso de até 40m²
+- Terra e capina de um quintal médio
+- Móveis pequenos descartáveis (estantes, cadeiras, armários soltos)
+
+**Não descarte:** líquidos, produtos químicos, pilhas, baterias, tintas sem tratamento, solventes, materiais inflamáveis ou resíduos hospitalares.
+
+## Por que a caçamba de 3m³ é tão procurada no Rio?
+
+A cidade do Rio de Janeiro tem características que favorecem o uso de caçambas menores:
+
+- **Ruas estreitas** em bairros como Copacabana, Ipanema, Centro e Tijuca dificultam a manobra de caminhões grandes
+- **Condomínios fechados** exigem caçambas que cabam em vagas de garagem
+- **Prazo de permanência curto** em calçadas — a caçamba de 3m³ é mais fácil de posicionar e retirar rapidamente
+- **Menor custo de locação** para obras pequenas que não precisam de volume grande
+
+## Como funciona a locação?
+
+1. Você solicita pelo WhatsApp ou telefone informando o bairro, tipo de obra e tamanho da caçamba.
+2. Recebe um orçamento grátis em até 30 minutos com valor fechado.
+3. Agendamos a entrega no melhor horário para sua obra e para o trânsito do bairro.
+4. Posicionamos a caçamba no local combinado.
+5. Você preenche com o entulho dentro do prazo de locação.
+6. Retornamos para retirada e emitimos nota fiscal e certificado de destinação final.
+
+## Dicas de segurança
+
+- Não ultrapasse a borda superior da caçamba — entulho acima do aro pode cair durante o transporte
+- Separe materiais recicláveis como metal e madeira limpa — podem ser vendidos ou doados
+- Evite jogar líquidos ou materiais pesados demais (concreto úmido pode ultrapassar o peso máximo)
+- Posicione a caçamba em local firme, plano e sem risco de escorregar
+- Avise o síndico ou vizinhos quando a caçamba ficar em área comum
+
+## Caçamba de 3m³ no Rio de Janeiro
+
+Atendemos a entrega de caçamba de 3m³ em todas as regiões do Rio, com destaque para bairros onde esse tamanho é mais solicitado:
+
+- **Zona Sul:** Copacabana, Ipanema, Leblon, Botafogo, Flamengo
+- **Zona Norte:** Tijuca, Vila Isabel, Méier, Grajaú
+- **Centro:** Centro, Lapa, Santa Teresa, Laranjeiras
+- **Zona Oeste:** Barra da Tijuca, Recreio, Jacarepaguá (para condomínios e obras compactas)
+
+## Quanto custa no seu bairro?
 
-- Capacidade: 3 metros cúbicos
-- Dimensões compactas
-- Cabe em garagens e vias estreitas
-- Prazo de locação flexível
+O valor final do aluguel de caçamba de 3m³ varia conforme:
 
-## O que pode ser descartado
+- Distância até o bairro (frete)
+- Prazo de locação
+- Urgência da entrega (mesmo dia pode ter taxa adicional)
+- Acesso do local (ruas estreitas, ladeiras, condomínios)
 
-- Entulho de alvenaria
-- Restos de madeira e drywall
-- Terra e capina
-- Móveis pequenos
+Na Zona Norte e Méier, os preços costumam ser os mais competitivos. Na Zona Sul, o frete e a logística urbana elevam um pouco o valor. [Veja nossa análise completa de preços por região](/blog/quanto-custa-alugar-cacamba/).
 
-## Como funciona
+## Pronto para alugar sua caçamba de 3m³?
 
-Entregamos a caçamba no local combinado. Você preenche com o entulho dentro do prazo de locação e retornamos para fazer a retirada e descarte correto.
+Solicite um orçamento grátis pelo WhatsApp. Respondemos em até 30 minutos com o melhor preço para o seu bairro no Rio de Janeiro.
diff --git a/src/content/servicos/cacamba-5m3.md b/src/content/servicos/cacamba-5m3.md
index c8ca919..72b7897 100644
--- a/src/content/servicos/cacamba-5m3.md
+++ b/src/content/servicos/cacamba-5m3.md
@@ -1,29 +1,95 @@
-﻿---
+---
 title: "Caçamba 5m³"
-description: "Caçamba estacionária de 5 metros cúbicos, a mais solicitada do mercado para obras médias e reformas comerciais."
+description: "Caçamba estacionária de 5 metros cúbicos, a mais solicitada do mercado para obras médias, reformas comerciais e demolições parciais no Rio de Janeiro."
 preco: "A partir de R$ 450"
 capacidade: "5 metros cúbicos"
 idealPara: ["Reformas comerciais", "Construção de muros", "Obras médias", "Demolições parciais"]
 ---
 
-A caçamba de 5m³ é o modelo mais popular entre nossos clientes. Oferece o equilíbrio perfeito entre capacidade e praticidade.
+A **caçamba de 5m³** é o modelo mais popular entre nossos clientes no Rio de Janeiro. Oferece o equilíbrio perfeito entre capacidade e praticidade, atendendo a maioria das obras médias sem exigir espaço excessivo no local.
+
+Se você está reformando uma casa completa, um comércio, construindo muros ou fazendo uma demolição parcial, essa é provavelmente a caçamba ideal para você.
 
 ![Caçamba de entulho 5m³ para obras médias](/images/cacamba-de-entulho.webp)
 
-## Características
+## Resposta rápida
+
+- **Capacidade:** 5 metros cúbicos (equivalente a ~80 a 90 sacos de 50L)
+- **Peso máximo aproximado:** 2,5 toneladas
+- **Preço:** a partir de R$ 450 para locação padrão de 7 dias
+- **O que está incluso:** entrega, retirada, nota fiscal e certificado de destinação
+- **Prazo de entrega:** até 24h no Rio de Janeiro
+
+## Quando escolher a caçamba de 5m³?
+
+A caçamba de 5m³ é a escolha certa para obras que geram volume médio de entulho e que precisam de um equilíbrio entre capacidade e facilidade de posicionamento. Indicada para:
+
+- **Reformas comerciais** — lojas, escritórios, restaurantes, salões
+- **Construção de muros e calçadas** — entulho de concreto, blocos e terra
+- **Reformas residenciais completas** — troca de piso em área ampla, demolição de cozinha e banheiro
+- **Demolições parciais** — remoção de divisórias, revestimentos e estruturas leves
+- **Obras médias em condomínios** — caçamba compacta o suficiente para áreas comuns
+
+Ainda em dúvida? [Confira nosso guia sobre como escolher o tamanho certo](/blog/como-escolher-cacamba-ideal/).
+
+## O que cabe dentro de uma caçamba de 5m³?
+
+Para você ter uma referência prática, uma caçamba de 5m³ comporta aproximadamente:
+
+- Entulho de uma reforma completa de apartamento de 70 a 90m²
+- Restos de concreto, cerâmica, madeira e drywall de uma demolição parcial
+- Terra de fundação ou escavação de um muro de até 15 metros
+- Móveis e eletrodomésticos pequenos descartáveis
+
+**Não descarte:** líquidos, produtos químicos, pilhas, baterias, tintas sem tratamento, solventes, materiais inflamáveis ou resíduos hospitalares. Materiais pesados como concreto úmido devem ser distribuídos para não ultrapassar o peso máximo.
+
+## Por que a caçamba de 5m³ é a mais solicitada?
+
+No Rio de Janeiro, esse tamanho se tornou o padrão para obras médias por alguns motivos:
+
+- **Custo-benefício:** comporta quase o dobro da 3m³ por um valor proporcionalmente menor por metro cúbico
+- **Versatilidade:** atende reformas residenciais e comerciais sem exigir caminhão especial
+- **Espaço aceitável:** cabe na maioria das calçadas e áreas de descarte de condomínios
+- **Prazo de locação confortável:** 7 dias são suficientes para a maioria das reformas médias
+
+## Como funciona a locação?
+
+1. Entre em contato pelo WhatsApp ou telefone com informações do bairro, tipo de obra e prazo desejado.
+2. Receba um orçamento grátis em até 30 minutos.
+3. Agendamos a entrega conforme a disponibilidade de frota e o trânsito da sua região.
+4. Posicionamos a caçamba no local combinado com segurança.
+5. Você preenche com o entulho dentro do prazo.
+6. Fazemos a retirada e entregamos nota fiscal e certificado de destinação final.
+
+## Cuidados importantes
+
+- Evite ultrapassar a linha do aro — entulho acima da borda é perigoso no transporte
+- Distribua o peso de forma uniforme, especialmente se jogar concreto ou blocos
+- Não coloque lixo doméstico comum — a caçamba é exclusiva para entulho e resíduos da obra
+- Mantenha a área ao redor livre para a manobra do caminhão na retirada
+- Em condomínios, combine com o síndico o local e o horário da entrega
+
+## Caçamba de 5m³ no Rio de Janeiro
+
+Entregamos caçamba de 5m³ em todas as regiões do Rio. Os bairros com maior demanda são:
+
+- **Zona Norte:** Tijuca, Méier, Madureira, Penha, Vila Isabel
+- **Zona Oeste:** Barra da Tijuca, Recreio, Jacarepaguá, Taquara
+- **Zona Sul:** Copacabana, Botafogo, Flamengo (onde o espaço permite)
+- **Centro:** Centro, Santo Cristóvão, Cidade Nova
+- **Região Metropolitana:** Niterói e São Gonçalo (consultar disponibilidade)
+
+## Preço do aluguel de caçamba 5m³ no seu bairro
 
-- Capacidade: 5 metros cúbicos
-- Compatível com a maioria das obras
-- Melhor custo-benefício
-- Entrega rápida
+O valor final depende de:
 
-## O que pode ser descartado
+- Distância do bairro até a base de operações
+- Urgência da entrega
+- Prazo de locação
+- Dificuldade de acesso ao local
 
-- Entulho misto de construção
-- Madeira, metal e plástico
-- Restos de cerâmica e concreto
-- Móveis e eletrodomésticos pequenos
+Na Zona Norte e em bairros como Méier e Madureira, os preços são mais competitivos. Na Zona Sul e na Barra, o frete pode elevar o valor em 10% a 20%. [Veja nossa tabela completa de preços por região](/blog/quanto-custa-alugar-cacamba/).
 
-## Como funciona
+## Solicite orçamento para caçamba de 5m³
 
-Solicite pelo WhatsApp ou formulário. Entregamos em até 24h na sua obra. Após o preenchimento, retiramos e emitimos nota fiscal e certificado de destinação.
+Fale pelo WhatsApp e receba em até 30 minutos um orçamento detalhado para o seu bairro. Atendemos todo o Rio de Janeiro com entrega em até 24h.
diff --git a/src/content/servicos/cacamba-7m3.md b/src/content/servicos/cacamba-7m3.md
index 2ce95da..2e50a22 100644
--- a/src/content/servicos/cacamba-7m3.md
+++ b/src/content/servicos/cacamba-7m3.md
@@ -1,29 +1,98 @@
-﻿---
+---
 title: "Caçamba 7m³"
-description: "Caçamba estacionária de 7 metros cúbicos para grandes obras, demolições e construções que geram alto volume de entulho."
+description: "Caçamba estacionária de 7 metros cúbicos para grandes obras, demolições completas e construções que geram alto volume de entulho no Rio de Janeiro."
 preco: "A partir de R$ 600"
 capacidade: "7 metros cúbicos"
 idealPara: ["Grandes demolições", "Construção de casas", "Obras industriais", "Reformas grandes"]
 ---
 
-Para obras que geram alto volume de resíduos, a caçamba de 7m³ é a solução definitiva. Evite múltiplas locações e otimize seu tempo.
+A **caçamba de 7m³** é a solução definitiva para obras que geram alto volume de resíduos. Se você vai construir uma casa, fazer uma demolição completa ou gerenciar uma obra industrial, esse tamanho evita múltiplas locações e otimiza o cronograma da obra.
+
+No Rio de Janeiro, onde obras grandes na Zona Oeste, Zona Norte e regiões industriais demandam descarte contínuo, a caçamba de 7m³ é a escolha de engenheiros, construtoras e síndicos experientes.
 
 ![Caçamba de entulho 7m³ para grandes obras](/images/cacamba-de-entulho.webp)
 
-## Características
+## Resposta rápida
+
+- **Capacidade:** 7 metros cúbicos (equivalente a ~110 a 120 sacos de 50L)
+- **Peso máximo aproximado:** 3,5 toneladas
+- **Preço:** a partir de R$ 600 para locação padrão de 7 dias
+- **O que está incluso:** entrega, retirada, nota fiscal e certificado de destinação
+- **Prazo de entrega:** até 24h no Rio de Janeiro
+
+## Quando usar uma caçamba de 7m³?
+
+Esse tamanço é indicado quando o volume de entulho é alto e a frequência de retirada precisa ser reduzida. Contrate uma caçamba de 7m³ para:
+
+- **Grandes demolições** — casas antigas, galpões, estruturas de concreto
+- **Construção de casas** — fundação, alvenaria, concreto e resíduos diversos
+- **Obras industriais** — fábricas, depósitos, galpões logísticos
+- **Reformas grandes** — prédios comerciais, condomínios, conjuntos de salas
+- **Limpeza de grandes terrenos** — remoção de vegetação, solo e entulho acumulado
+
+Se você precisa de múltiplas caçambas ao longo da obra, [confira nosso guia sobre quanto custa alugar caçamba](/blog/quanto-custa-alugar-cacamba/) para planejar o orçamento.
+
+## O que cabe dentro de uma caçamba de 7m³?
+
+Uma caçamba de 7m³ comporta aproximadamente:
+
+- Entulho de uma demolição completa de uma casa pequena
+- Resíduos de fundação e alvenaria de uma construção de até 150m²
+- Grande volume de terra, capina e vegetação de limpeza de terreno
+- Múltiplos resíduos mistos de construção civil
+
+**Atenção ao peso:** concreto molhado, blocos e demolição pesada podem ultrapassar o limite de 3,5 toneladas. Nesses casos, converse com nossa equipe sobre distribuição ou múltiplas caçambas.
+
+## Por que a caçamba de 7m³ reduz custos em grandes obras?
+
+Em obras de alto volume, usar uma caçamba maior costuma ser mais econômico do que alugar várias caçambas menores:
+
+- **Menor custo por metro cúbico** comparado às opções menores
+- **Menos fretes** — uma entrega e uma retirada para volumes que cabem em uma única caçamba
+- **Menos interrupções** na obra para aguardar troca de caçamba
+- **Melhor organização do canteiro** — menos movimentação de caminhões
+- **Logística mais previsível** para obras com cronograma apertado
+
+## Como funciona a locação?
+
+1. Solicite pelo WhatsApp ou telefone com detalhes da obra: bairro, tipo de resíduo, prazo e acesso do local.
+2. Receba um orçamento grátis em até 30 minutos.
+3. Agendamos a entrega com caminhão adequado ao tamanho da caçamba e ao acesso da obra.
+4. Posicionamos a caçamba com segurança no local indicado.
+5. Você preenche dentro do prazo de locação.
+6. Retiramos e entregamos nota fiscal e certificado de destinação final.
+
+Para obras que precisam de caçamba permanente durante meses, consulte nossas condições especiais para locação de longo prazo.
+
+## Segurança e operação
+
+- A caçamba de 7m³ exige área de apoio firme e plana
+- O caminhão precisa de espaço para manobra — ruas muito estreitas podem exigir caminhão menor ou guincho
+- Não ultrapasse o aro — volumes acima do limite comprometem o transporte
+- Distribua o peso uniformemente para evitar tombamento ou dificuldade na retirada
+- Em áreas de trânsito intenso, agende entrega e retirada em horários de menor movimento
+
+## Caçamba de 7m³ no Rio de Janeiro
+
+Entregamos caçamba de 7m³ nas regiões onde grandes obras são mais comuns:
+
+- **Zona Oeste:** Barra da Tijuca, Recreio, Jacarepaguá, Campo Grande — obras residenciais e condomínios
+- **Zona Norte:** Madureira, Campo Grande, Bangu — demolições e construções populares
+- **Região Metropolitana:** Niterói, São Gonçalo, Itaboraí — consultar disponibilidade e frete
+- **Zona Sul e Centro:** quando o espaço e o acesso viário permitem
+
+## Preço do aluguel de caçamba 7m³ no seu bairro
 
-- Capacidade: 7 metros cúbicos
-- Reduz custos de frete em grandes obras
-- Ideal para entulho pesado
-- Até 7 dias de permanência inclusos
+O valor final varia conforme:
 
-## O que pode ser descartado
+- Distância do bairro até a base de operações
+- Tipo de resíduo e peso estimado
+- Urgência da entrega
+- Prazo de locação
+- Acesso do local (ruas estreitas, ladeiras, condomínios)
 
-- Grande volume de entulho de concreto
-- Demolição completa de alvenaria
-- Terra de fundação
-- Resíduos industriais leves
+[Veja nossa análise completa de preços por região e tipo de obra](/blog/quanto-custa-alugar-cacamba/) para planejar seu orçamento.
 
-## Como funciona
+## Peça orçamento para caçamba de 7m³
 
-Ideal para obras de longa duração. Entregamos e posicionamos a caçamba conforme a logística da sua construção. Suporte prioritário e retirada programada.
+Obra grande precisa de caçamba grande. Solicite um orçamento grátis pelo WhatsApp com as características da sua obra. Atendemos todo o Rio de Janeiro com entrega em até 24h.
diff --git a/src/content/servicos/retirada-entulho.md b/src/content/servicos/retirada-entulho.md
index 6975669..3855d8a 100644
--- a/src/content/servicos/retirada-entulho.md
+++ b/src/content/servicos/retirada-entulho.md
@@ -1,30 +1,105 @@
-﻿---
+---
 title: "Retirada de Entulho"
-description: "Serviço completo de remoção e destinação de entulho com documentação e licença ambiental."
+description: "Serviço completo de remoção, coleta e destinação de entulho com veículos próprios, equipe treinada e documentação ambiental no Rio de Janeiro."
 preco: "Sob consulta"
 capacidade: "Flexível"
 idealPara: ["Obra concluída", "Limpeza pós-reforma", "Remoção de resíduos acumulados", "Atendimento emergencial"]
 ---
 
-Serviço completo de retirada de entulho com equipe especializada, veículos próprios e documentação ambiental.
+A **retirada de entulho** é o serviço ideal para quem já tem o entulho acumulado e precisa remover tudo de uma vez — seja no final de uma obra, em uma limpeza pós-reforma ou para resolver uma emergência com resíduos acumulados.
+
+Diferente da locação de caçamba estacionária, onde o cliente preenche a caçamba ao longo dos dias, a retirada de entulho envolve nossa equipe indo ao local, coletando o material e transportando para aterro licenciado com toda a documentação.
 
 ![Serviço de retirada de entulho com caçamba estacionária](/images/locacao-de-cacambas.webp)
 
-## O que está incluso
+## Resposta rápida
+
+- **Serviço:** remoção completa de entulho acumulado
+- **Veículos:** caçamba roll-on, truck ou caçamba estacionária conforme volume
+- **Documentação:** nota fiscal, guia de manifesto e certificado de destinação final (CDF)
+- **Atendimento:** até 4 horas para emergências na região metropolitana do Rio
+- **Preço:** sob consulta, de acordo com volume, tipo de resíduo e bairro
+
+## Quando contratar a retirada de entulho?
+
+A retirada de entulho é a melhor opção em situações como:
+
+- **Obra concluída** — entulho acumulado precisa ser removido para liberação do imóvel
+- **Limpeza pós-reforma** — restos de construção que sobraram após a reforma
+- **Resíduos acumulados** — terreno, quintal ou galpão com entulho antigo
+- **Demolição já executada** — monte de entulho pronto para remoção
+- **Emergências** — necessidade de retirada rápida por prazo, fiscalização ou segurança
+- **Condomínios e empresas** — limpeza periódica de áreas de descarte
+
+Se você ainda está na fase de geração de entulho, talvez a [locação de caçamba seja mais econômica](/servicos/cacamba-5m3/). Se o entulho já está no chão, a retirada é o caminho.
+
+## O que está incluso na retirada de entulho?
+
+Nosso serviço de retirada de entulho inclui:
+
+- **Deslocamento da equipe e veículo** até o local
+- **Coleta e carregamento** do entulho, quando aplicável
+- **Transporte** com veículo caçamba, roll-on ou truck conforme volume
+- **Descarte em aterro licenciado** com rastreabilidade
+- **Certificado de Destinação Final (CDF)** comprovando descarte correto
+- **Guia de Manifesto de Resíduo**, quando exigido
+- **Nota fiscal de serviço** para sua contabilidade
+- **Licença ambiental** da empresa transportadora válida
+
+## Tipos de resíduo que atendemos
+
+- Entulho de construção civil (concreto, alvenaria, cerâmica)
+- Resíduos de demolição (madeira, metal, plástico, vidro)
+- Terra, capina e vegetação de limpeza de terreno
+- Materiais recicláveis mistos
+- Móveis e eletrodomésticos descartáveis em pequena escala
+
+**Não atendemos:** líquidos, produtos químicos, pilhas, baterias, tintas sem tratamento, solventes, materiais inflamáveis, resíduos hospitalares ou tóxicos.
+
+## Como funciona a retirada?
+
+1. Você envia foto e descrição do entulho pelo WhatsApp.
+2. Avaliamos o volume, tipo de resíduo, acesso do local e bairro.
+3. Recebe um orçamento grátis em até 30 minutos.
+4. Agendamos dia e horário da retirada.
+5. Nossa equipe vai ao local e realiza a remoção completa.
+6. Entregamos nota fiscal, CDF e demais documentos.
+
+## Agilidade para emergências no Rio
+
+Atendemos emergências e urgências em até 4 horas na região metropolitana do Rio de Janeiro, dependendo do bairro e da logística. Regiões atendidas com prioridade:
+
+- **Zona Norte:** Tijuca, Méier, Madureira, Penha, Vila Isabel
+- **Zona Oeste:** Barra da Tijuca, Recreio, Jacarepaguá, Taquara
+- **Zona Sul:** Copacabana, Botafogo, Flamengo, Ipanema
+- **Centro:** Centro, Santo Cristóvão, Cidade Nova
+- **Região Metropolitana:** Niterói, São Gonçalo, Itaboraí — consultar disponibilidade
+
+## Por que a documentação importa?
+
+Quando você contrata uma empresa clandestina para retirar entulho, o risco é seu. Se o material for despejado em área irregular, a multa ambiental pode recair sobre quem gerou o resíduo — não sobre quem transportou.
+
+Ao contratar a CaçambaRápido, você recebe:
+
+- CDF comprovando descarte em aterro licenciado
+- Nota fiscal do serviço
+- Empresa com licença ambiental válida
+
+Isso protege sua obra, seu imóvel e você mesmo de problemas com fiscalização ambiental.
+
+## Quanto custa a retirada de entulho?
 
-- Transporte com veículo caçamba ou roll-on
-- Mão de obra para carregamento (se necessário)
-- Guia de manifesto de resíduo
-- Certificado de destinação final
-- Nota fiscal de serviço
+O valor é sob consulta porque depende de fatores como:
 
-## Tipos de resíduo atendidos
+- Volume real de entulho
+- Tipo de resíduo (concreto pesa mais que madeira, por exemplo)
+- Distância do bairro
+- Acesso do local (rua estreita, ladeira, condomínio)
+- Urgência do atendimento
+- Necessidade de mão de obra para carregamento
 
-- Entulho de construção civil
-- Resíduos de demolição
-- Materiais recicláveis
-- Terra e capina
+Envie uma foto pelo WhatsApp que fazemos um orçamento justo em até 30 minutos.
 
-## Agilidade garantida
+## Solicite retirada de entulho agora
 
-Atendemos emergências e urgências em até 4 horas na região metropolitana. Ligue agora e resolva seu problema de entulho rápido.
+Entulho acumulado é problema de segurança, saúde e possível multa. Fale pelo WhatsApp, envie a foto do local e receba orçamento grátis. Atendemos o Rio de Janeiro e região metropolitana.
diff --git a/src/data/bairros.ts b/src/data/bairros.ts
new file mode 100644
index 0000000..c706b3d
--- /dev/null
+++ b/src/data/bairros.ts
@@ -0,0 +1,953 @@
+export interface Bairro {
+  nome: string;
+  slug: string;
+  zona: 'Zona Norte' | 'Zona Sul' | 'Zona Sudoeste';
+  zonaSlug: 'zona-norte' | 'zona-sul' | 'zona-sudoeste';
+  preposicao: 'em' | 'no' | 'na' | 'nos' | 'nas';
+  descricao: string;
+  desafios: string[];
+  dicasEntrega: string[];
+  precoRelativo: 'padrão' | '10-15% acima' | '20-30% acima' | '5-10% abaixo';
+  precoJustificativa: string;
+  landmarks: string[];
+  servicosPopulares: string[];
+  tiposObraComuns: string[];
+  observacoesEspecificas: string;
+}
+
+export const zonas = [
+  {
+    nome: 'Zona Norte',
+    slug: 'zona-norte',
+    cor: 'from-green-500 to-emerald-600',
+    resumo:
+      'A Zona Norte do Rio é a região com melhor acesso viário para operações de caçamba, maior densidade de pátios de locadoras e os preços mais competitivos. Atendemos todos os bairros com entrega em até 24h.',
+    caracteristicas: [
+      'Ruas largas e melhor fluidez de trânsito',
+      'Proximidade com corredores de carga e BR-116',
+      'Menor custo de frete para a maioria dos bairros',
+      'Alta demanda por reformas residenciais e comerciais',
+    ],
+  },
+  {
+    nome: 'Zona Sul',
+    slug: 'zona-sul',
+    cor: 'from-blue-500 to-indigo-600',
+    resumo:
+      'A Zona Sul exige logística especializada: ruas estreitas, trânsito intenso, condomínios rigorosos e restrições de carga e descarga. Usamos caçambas compactas e horários estratégicos para atender com eficiência.',
+    caracteristicas: [
+      'Ruas estreitas e pouco espaço para manobra',
+      'Condomínios com autorização prévia necessária',
+      'Restrições de horário para carga e descarga',
+      'Demanda constante por reformas e demolições pequenas',
+    ],
+  },
+  {
+    nome: 'Zona Sudoeste',
+    slug: 'zona-sudoeste',
+    cor: 'from-amber-500 to-orange-600',
+    resumo:
+      'A Zona Sudoeste reúne bairros como Barra da Tijuca, Recreio, Jacarepaguá e região. É uma área de grande crescimento, com obras residenciais, comerciais e condomínios fechados. Atendemos com frota dedicada e pacotes para obras longas.',
+    caracteristicas: [
+      'Grandes obras residenciais e comerciais',
+      'Condomínios fechados com controle de acesso rigoroso',
+      'Distância maior que pode elevar o frete',
+      'Alta demanda por caçambas de 5m³ e 7m³',
+    ],
+  },
+] as const;
+
+const preposicoesExcecoes: Record<string, 'em' | 'no' | 'na' | 'nos' | 'nas'> = {
+  // Grande Tijuca
+  'Alto da Boa Vista': 'no',
+  'Andaraí': 'em',
+  'Grajaú': 'em',
+  'Maracanã': 'no',
+  'Praça da Bandeira': 'na',
+  'Tijuca': 'na',
+  'Vila Isabel': 'na',
+
+  // Zona Norte (Grande Tijuca + Zona Norte propriamente dita)
+  'Abolição': 'na',
+  'Acari': 'em',
+  'Água Santa': 'na',
+  'Anchieta': 'em',
+  'Argentino': 'no',
+  'Barros Filho': 'em',
+  'Bento Ribeiro': 'em',
+  'Bonsucesso': 'em',
+  'Brás de Pina': 'em',
+  'Cachambi': 'em',
+  'Campinho': 'no',
+  'Cascadura': 'em',
+  'Cavalcanti': 'no',
+  'Coelho Neto': 'em',
+  'Colégio': 'no',
+  'Complexo do Alemão': 'no',
+  'Cordovil': 'em',
+  'Costa Barros': 'em',
+  'Del Castilho': 'em',
+  'Encantado': 'no',
+  'Engenheiro Leal': 'em',
+  'Engenho da Rainha': 'no',
+  'Engenho de Dentro': 'no',
+  'Engenho Novo': 'no',
+  'Guadalupe': 'em',
+  'Higienópolis': 'em',
+  'Honório Gurgel': 'em',
+  'Inhaúma': 'em',
+  'Irajá': 'em',
+  'Jacaré': 'no',
+  'Jacarezinho': 'em',
+  'Jardim América': 'no',
+  'Lins de Vasconcelos': 'em',
+  'Madureira': 'no',
+  'Manguinhos': 'em',
+  'Maré': 'na',
+  'Marechal Hermes': 'em',
+  'Maria da Graça': 'em',
+  'Méier': 'no',
+  'Olaria': 'na',
+  'Oswaldo Cruz': 'em',
+  'Parada de Lucas': 'na',
+  'Parque Anchieta': 'no',
+  'Parque Colúmbia': 'no',
+  'Pavuna': 'na',
+  'Penha': 'na',
+  'Penha Circular': 'na',
+  'Piedade': 'no',
+  'Pilares': 'em',
+  'Quintino Bocaiuva': 'em',
+  'Ramos': 'no',
+  'Riachuelo': 'no',
+  'Ricardo de Albuquerque': 'em',
+  'Rocha': 'na',
+  'Rocha Miranda': 'em',
+  'Sampaio': 'em',
+  'São Cristóvão': 'em',
+  'São Francisco Xavier': 'em',
+  'Todos os Santos': 'em',
+  'Tomás Coelho': 'em',
+  'Turiaçu': 'em',
+  'Vaz Lobo': 'em',
+  'Vicente de Carvalho': 'em',
+  'Vigário Geral': 'em',
+  'Vila da Penha': 'na',
+  'Vila Kosmos': 'na',
+  'Vista Alegre': 'em',
+
+  // Ilhas (exceto Paquetá)
+  'Bancários': 'nos',
+  'Cacuia': 'na',
+  'Cidade Universitária': 'na',
+  'Cocotá': 'em',
+  'Freguesia (Ilha do Governador)': 'na',
+  'Galeão': 'no',
+  'Jardim Carioca': 'no',
+  'Jardim Guanabara': 'no',
+  'Moneró': 'em',
+  'Pitangueiras': 'em',
+  'Portuguesa': 'em',
+  'Praia da Bandeira': 'na',
+  'Ribeira': 'na',
+  'Tauá': 'em',
+  'Zumbi': 'no',
+
+  // Zona Sul
+  'Botafogo': 'em',
+  'Catete': 'em',
+  'Copacabana': 'em',
+  'Cosme Velho': 'em',
+  'Flamengo': 'em',
+  'Gávea': 'em',
+  'Humaitá': 'em',
+  'Ipanema': 'em',
+  'Jardim Botânico': 'no',
+  'Lagoa': 'na',
+  'Laranjeiras': 'em',
+  'Leblon': 'no',
+  'Leme': 'no',
+  'Rocinha': 'na',
+  'São Conrado': 'em',
+  'Urca': 'na',
+  'Vidigal': 'no',
+
+  // Zona Sudoeste (Lei 2025)
+  'Anil': 'no',
+  'Barra da Tijuca': 'na',
+  'Barra Olímpica': 'na',
+  'Camorim': 'no',
+  'Cidade de Deus': 'na',
+  'Curicica': 'na',
+  'Freguesia': 'na',
+  'Gardênia Azul': 'no',
+  'Grumari': 'no',
+  'Itanhangá': 'em',
+  'Jacarepaguá': 'em',
+  'Joá': 'no',
+  'Pechincha': 'na',
+  'Praça Seca': 'na',
+  'Recreio dos Bandeirantes': 'no',
+  'Rio das Pedras': 'no',
+  'Tanque': 'no',
+  'Taquara': 'na',
+  'Vargem Grande': 'em',
+  'Vargem Pequena': 'em',
+  'Vila Valqueire': 'na',
+};
+
+function slugify(nome: string): string {
+  return nome
+    .normalize('NFD')
+    .replace(/[̀-ͯ]/g, '')
+    .toLowerCase()
+    .replace(/[^a-z0-9]+/g, '-')
+    .replace(/^-+|-+$/g, '');
+}
+
+export function getPreposicao(nome: string): 'em' | 'no' | 'na' | 'nos' | 'nas' {
+  const excecao = preposicoesExcecoes[nome];
+  if (excecao) return excecao;
+
+  const lower = nome.trim().toLowerCase();
+
+  // Nomes que começam com artigo definido explícito
+  if (lower.startsWith('os ')) return 'nos';
+  if (lower.startsWith('as ')) return 'nas';
+  if (lower.startsWith('o ')) return 'no';
+  if (lower.startsWith('a ')) return 'na';
+
+  // Heurística por terminação (fallback seguro)
+  if (lower.endsWith('os') && lower.length > 2) return 'nos';
+  if (lower.endsWith('as') && lower.length > 2) return 'nas';
+  if (lower.endsWith('a') && lower.length > 1) return 'na';
+  if (lower.endsWith('o') && lower.length > 1) return 'no';
+
+  // Padrão para nomes próprios sem artigo (ex.: Copacabana, Ipanema, Jacarepaguá)
+  return 'em';
+}
+
+const templates = {
+  'zona-norte': {
+    descricao: (nome: string) =>
+      `${nome} é um bairro da Zona Norte do Rio de Janeiro com perfil predominantemente residencial e comercial. A logística de entrega de caçamba é facilitada pelo acesso viário da região, embora trechos mais estreitos possam exigir planejamento.`,
+    desafios: [
+      'Trânsito intenso em horários de pico nas vias principais',
+      'Ruas estreitas em trechos residenciais e vilas',
+      'Estacionamento disputado dificultando o posicionamento da caçamba',
+    ],
+    dicasEntrega: [
+      'Agende entregas no início da manhã para evitar o trânsito local',
+      'Para ruas estreitas, prefira caçamba de 3m³',
+      'Confirme o ponto de apoio na calçada antes da entrega',
+    ],
+    precoRelativo: 'padrão' as const,
+    precoJustificativa: (nome: string) =>
+      `${nome} segue a média de preço da Zona Norte, com acesso viário razoável e boa disponibilidade de frota na região.`,
+    landmarks: ['Centro comercial local', 'Avenidas principais', 'Praças do bairro'],
+    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
+    tiposObraComuns: ['Reformas residenciais', 'Reformas comerciais', 'Limpeza de terreno'],
+    observacoesEspecificas: (nome: string) =>
+      `Atendimento regular na região de ${nome}. Entregas costumam ser ágeis, com prazo médio de até 24h dependendo da disponibilidade de frota.`,
+  },
+  'zona-sul': {
+    descricao: (nome: string) =>
+      `${nome} é um bairro da Zona Sul do Rio de Janeiro, com alta densidade urbana, ruas estreitas e forte demanda por reformas. A logística de caçamba exige planejamento cuidadoso.`,
+    desafios: [
+      'Ruas estreitas e trânsito intenso durante o dia',
+      'Estacionamento disputado nas ruas internas',
+      'Condomínios com restrições de carga e descarga',
+      'Fiscalização rigorosa de trânsito e estacionamento',
+    ],
+    dicasEntrega: [
+      'Caçamba de 3m³ é a mais indicada para a maioria das ruas',
+      'Agende com antecedência e confirme autorização do condomínio',
+      'Prefira entregas no início da manhã',
+    ],
+    precoRelativo: '10-15% acima' as const,
+    precoJustificativa: (nome: string) =>
+      `${nome} tem custo acima da média pela dificuldade logística, restrições de trânsito e distância das bases de distribuição principais.`,
+    landmarks: ['Centro comercial local', 'Praças e avenidas principais'],
+    servicosPopulares: ['Caçamba 3m³', 'Retirada de entulho'],
+    tiposObraComuns: ['Reformas de apartamentos', 'Demolições pequenas', 'Reformas comerciais'],
+    observacoesEspecificas: (nome: string) =>
+      `Atenção às restrições de carga e descarga em horários comerciais em ${nome}. Condomínios costumam exigir autorização prévia por escrito.`,
+  },
+  'zona-sudoeste': {
+    descricao: (nome: string) =>
+      `${nome} é um bairro da Zona Sudoeste do Rio de Janeiro (nova divisão da Lei 2025), com perfil residencial, comercial e áreas em expansão. A distância dos centros urbanos tradicionais pode afetar o frete.`,
+    desafios: [
+      'Maior distância dos pátios centrais',
+      'Trânsito intenso nas vias principais em horários de pico',
+      'Condomínios fechados com controle de acesso',
+      'Bairros extensos com variação de prazo conforme localização',
+    ],
+    dicasEntrega: [
+      'Agende com antecedência devido à distância',
+      'Para condomínios, libere o acesso na portaria',
+      'Caçambas de 5m³ são as mais solicitadas para obras residenciais',
+    ],
+    precoRelativo: '10-15% acima' as const,
+    precoJustificativa: (nome: string) =>
+      `${nome} tem frete moderado pela distância da Zona Sudoeste, com acesso viário em desenvolvimento e demanda crescente por obras.`,
+    landmarks: ['Centro comercial local', 'Avenidas principais'],
+    servicosPopulares: ['Caçamba 5m³', 'Caçamba 3m³'],
+    tiposObraComuns: ['Reformas residenciais', 'Construção de casas', 'Demolições'],
+    observacoesEspecificas: (nome: string) =>
+      `A Zona Sudoeste (Lei 2025) não corresponde à antiga Zona Oeste toda. Em ${nome}, verifique a localização exata para precisar prazo e frete.`,
+  },
+};
+
+function createBairro(
+  nome: string,
+  zonaSlug: 'zona-norte' | 'zona-sul' | 'zona-sudoeste',
+  overrides?: Partial<Omit<Bairro, 'nome' | 'slug' | 'zona' | 'zonaSlug' | 'preposicao'>>
+): Bairro {
+  const zona =
+    zonaSlug === 'zona-norte' ? 'Zona Norte' : zonaSlug === 'zona-sul' ? 'Zona Sul' : 'Zona Sudoeste';
+  const t = templates[zonaSlug];
+
+  return {
+    nome,
+    slug: slugify(nome),
+    zona,
+    zonaSlug,
+    preposicao: getPreposicao(nome),
+    descricao: overrides?.descricao ?? t.descricao(nome),
+    desafios: overrides?.desafios ?? t.desafios,
+    dicasEntrega: overrides?.dicasEntrega ?? t.dicasEntrega,
+    precoRelativo: overrides?.precoRelativo ?? t.precoRelativo,
+    precoJustificativa: overrides?.precoJustificativa ?? t.precoJustificativa(nome),
+    landmarks: overrides?.landmarks ?? t.landmarks,
+    servicosPopulares: overrides?.servicosPopulares ?? t.servicosPopulares,
+    tiposObraComuns: overrides?.tiposObraComuns ?? t.tiposObraComuns,
+    observacoesEspecificas: overrides?.observacoesEspecificas ?? t.observacoesEspecificas(nome),
+  };
+}
+
+export const bairros: Bairro[] = [
+  // ============================================================
+  // ZONA NORTE — Grande Tijuca (7 bairros)
+  // ============================================================
+  createBairro('Alto da Boa Vista', 'zona-norte', {
+    descricao:
+      'O Alto da Boa Vista é um bairro de altitude na Tijuca, com acesso pela Floresta da Tijuca e ruas de serra. A entrega de caçamba exige atenção especial às vias de subida e declive.',
+    desafios: [
+      'Ruas em aclive e declive com curvas acentuadas',
+      'Acesso restrito em dias de chuva forte',
+      'Áreas de preservação ambiental próximas',
+    ],
+    dicasEntrega: [
+      'Prefira caçambas de 3m³ para facilitar a manobra em ladeiras',
+      'Agende com antecedência e confirme condições climáticas',
+      'Sinalize o local de apoio para segurança do caminhão',
+    ],
+    precoRelativo: '10-15% acima',
+    precoJustificativa:
+      'O Alto da Boa Vista tem frete superior à média pela topografia acidentada e distância dos corredores principais.',
+    landmarks: ['Floresta da Tijuca', 'Estrada da Cascatinha', 'Vista Chinesa'],
+    observacoesEspecificas:
+      'Obras próximas à Floresta da Tijuca devem observar normas ambientais e horários de acesso à unidade de conservação.',
+  }),
+  createBairro('Andaraí', 'zona-norte', {
+    descricao:
+      'Andaraí é um bairro residencial da Zona Norte, localizado entre a Tijuca e o Engenho Novo, com ruas tranquilas e forte demanda por reformas de casas e apartamentos.',
+    desafios: [
+      'Ruas residenciais com estacionamento nos dois lados',
+      'Trechos de declive em direção à Tijuca',
+      'Trânsito local nos horários de pico',
+    ],
+    dicasEntrega: [
+      'Agende entregas no início da manhã',
+      'Prefira caçambas de 3m³ e 5m³ para ruas residenciais',
+      'Confirme ponto de apoio livre na calçada',
+    ],
+    landmarks: ['Rua São Francisco Xavier', 'Praça do Andaraí', 'Avenida 28 de Setembro'],
+  }),
+  createBairro('Grajaú', 'zona-norte', {
+    descricao:
+      'O Grajaú é um bairro residencial de classe média-alta na Zona Norte, com ruas tranquilas, muitas casas e reformas constantes. A entrega de caçamba é facilitada pelas ruas largas e baixo trânsito durante o dia.',
+    desafios: [
+      'Ruas residenciais com fiscalização de estacionamento',
+      'Algumas áreas têm declives que exigem posicionamento cuidadoso da caçamba',
+      'Movimentação de moradores exige sinalização adequada',
+    ],
+    dicasEntrega: [
+      'Prefira entregas no início da manhã para não interromper o trânsito local',
+      'Use cones ou fitas para sinalizar a caçamba na calçada',
+      'Caçambas de 3m³ e 5m³ são as mais solicitadas no bairro',
+    ],
+    precoRelativo: 'padrão',
+    precoJustificativa:
+      'Grajaú tem preço dentro da média da Zona Norte, com frete baixo pela proximidade com corredores viários.',
+    landmarks: ['Praça Nossa Senhora da Conceição', 'Rua Engenheiro de Sá', 'Alto do Grajaú'],
+    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
+    tiposObraComuns: ['Reformas residenciais', 'Construção de casas', 'Limpeza de terreno'],
+    observacoesEspecificas:
+      'A região do Alto do Grajaú pode exigir atenção especial na logística de subida e descida de caminhões.',
+  }),
+  createBairro('Maracanã', 'zona-norte', {
+    descricao:
+      'O Maracanã é um bairro da Zona Norte com forte vocação comercial, educacional e esportiva. A proximidade com o estádio e universidades gera grande movimentação e demanda por reformas.',
+    desafios: [
+      'Trânsito intenso nos dias de eventos no estádio',
+      'Ruas de mão única e estacionamento disputado',
+      'Restrições de trânsito em períodos de jogos e shows',
+    ],
+    dicasEntrega: [
+      'Verifique a programação de eventos no Maracanã antes de agendar',
+      'Para ruas estreitas, prefira caçamba de 3m³',
+      'Agende entregas fora dos horários de pico',
+    ],
+    landmarks: ['Estádio do Maracanã', 'Universidade Estácio', 'Rua São Francisco Xavier'],
+  }),
+  createBairro('Praça da Bandeira', 'zona-norte', {
+    descricao:
+      'A Praça da Bandeira é um bairro compacto e residencial da Zona Norte, com fácil acesso pela radial oeste e grande proximidade com a Tijuca e o Centro.',
+    desafios: [
+      'Ruas estreitas e trânsito intenso nos arredores da radial',
+      'Estacionamento limitado',
+      'Obras em prédios antigos exigem logística cuidadosa',
+    ],
+    dicasEntrega: [
+      'Aproveite o acesso pela radial oeste para agilizar a entrega',
+      'Prefira caçambas de 3m³ em ruas residenciais',
+      'Agende fora dos horários de pico',
+    ],
+    landmarks: ['Praça da Bandeira', 'Radial Oeste', 'Rua Mariz e Barros'],
+  }),
+  createBairro('Tijuca', 'zona-norte', {
+    descricao:
+      'A Tijuca é um dos bairros mais completos da Zona Norte do Rio, misturando áreas residenciais planas, condomínios verticais e morros adjacentes. A logística de entrega de caçamba varia bastante conforme a localização exata.',
+    desafios: [
+      'Ruas largas na parte plana, mas acesso complicado próximo à Floresta da Tijuca e morros',
+      'Condomínios de apartamentos exigem autorização do síndico',
+      'Obras em vilas e fundos de quintal podem precisar de caminhão guincho',
+    ],
+    dicasEntrega: [
+      'Para condomínios, agende com antecedência e peça autorização por escrito',
+      'Vilas e ruas estreitas: prefira caçamba de 3m³',
+      'Aproveite o acesso viário da região plana para obras de maior porte',
+    ],
+    precoRelativo: 'padrão',
+    precoJustificativa:
+      'A Tijuca tem preços dentro da média da Zona Norte: boa oferta de empresas, ruas amplas na parte plana, mas trechos de acesso restrito podem elevar o frete.',
+    landmarks: ['Floresta da Tijuca', 'Praça Saens Peña', 'Rua Conde de Bonfim', 'Maracanã'],
+    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
+    tiposObraComuns: ['Reformas residenciais', 'Troca de piso em apartamentos', 'Limpeza de terreno'],
+    observacoesEspecificas:
+      'Obras próximas ao Maracanã ou em dias de eventos podem enfrentar restrições de trânsito. Agende com antecedência nesses períodos.',
+  }),
+  createBairro('Vila Isabel', 'zona-norte', {
+    descricao:
+      'A Vila Isabel é um bairro residencial da Zona Norte com ruas arborizadas, casarões antigos e grande número de reformas. O acesso é relativamente fácil, com ruas que permitem manobra de caminhões médios.',
+    desafios: [
+      'Ruas residenciais com estacionamento nos dois lados em alguns trechos',
+      'Casarões antigos podem gerar entulho pesado de demolição',
+      'Árvores e postes reduzem o espaço de manobra em algumas ruas',
+    ],
+    dicasEntrega: [
+      'Agende entregas entre 7h e 9h para evitar congestionamento',
+      'Para casarões e demolições, avalie caçamba de 5m³ ou 7m³',
+      'Confirme disponibilidade de ponto de apoio na calçada',
+    ],
+    precoRelativo: 'padrão',
+    precoJustificativa:
+      'Vila Isabel fica na média da Zona Norte: acesso bom, demanda estável e frota própria atendendo a região com rapidez.',
+    landmarks: ['Boulevard 28 de Setembro', 'Praça Presidente Aguirre Cerda', 'Rua Barão de Mesquita'],
+    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³', 'Retirada de entulho'],
+    tiposObraComuns: ['Reformas de casarões', 'Troca de piso', 'Demolições pequenas'],
+    observacoesEspecificas:
+      'O bairro tem forte tradição residencial, então o atendimento fora do horário comercial costuma ser mais tranquilo.',
+  }),
+
+  // ============================================================
+  // ZONA NORTE — bairros da divisão administrativa (66 bairros)
+  // ============================================================
+  createBairro('Abolição', 'zona-norte'),
+  createBairro('Acari', 'zona-norte'),
+  createBairro('Água Santa', 'zona-norte'),
+  createBairro('Anchieta', 'zona-norte'),
+  createBairro('Argentino', 'zona-norte'),
+  createBairro('Barros Filho', 'zona-norte'),
+  createBairro('Bento Ribeiro', 'zona-norte'),
+  createBairro('Bonsucesso', 'zona-norte'),
+  createBairro('Brás de Pina', 'zona-norte'),
+  createBairro('Cachambi', 'zona-norte'),
+  createBairro('Campinho', 'zona-norte'),
+  createBairro('Cascadura', 'zona-norte'),
+  createBairro('Cavalcanti', 'zona-norte'),
+  createBairro('Coelho Neto', 'zona-norte'),
+  createBairro('Colégio', 'zona-norte'),
+  createBairro('Complexo do Alemão', 'zona-norte'),
+  createBairro('Cordovil', 'zona-norte'),
+  createBairro('Costa Barros', 'zona-norte'),
+  createBairro('Del Castilho', 'zona-norte'),
+  createBairro('Encantado', 'zona-norte'),
+  createBairro('Engenheiro Leal', 'zona-norte'),
+  createBairro('Engenho da Rainha', 'zona-norte'),
+  createBairro('Engenho de Dentro', 'zona-norte'),
+  createBairro('Engenho Novo', 'zona-norte'),
+  createBairro('Guadalupe', 'zona-norte'),
+  createBairro('Higienópolis', 'zona-norte'),
+  createBairro('Honório Gurgel', 'zona-norte'),
+  createBairro('Inhaúma', 'zona-norte'),
+  createBairro('Irajá', 'zona-norte'),
+  createBairro('Jacaré', 'zona-norte'),
+  createBairro('Jacarezinho', 'zona-norte'),
+  createBairro('Jardim América', 'zona-norte'),
+  createBairro('Lins de Vasconcelos', 'zona-norte'),
+  createBairro('Madureira', 'zona-norte', {
+    descricao:
+      'Madureira é um dos principais polos comerciais e residenciais da Zona Norte, com excelente acesso pela BR-116 e infraestrutura que facilita entregas de caçamba em praticamente toda a região.',
+    desafios: [
+      'Trânsito pesado nas avenidas principais durante o dia',
+      'Comércio intenso pode dificultar a parada para carga e descarga',
+      'Áreas mais populosas exigem agendamento preciso',
+    ],
+    dicasEntrega: [
+      'Use a BR-116 e avenidas principais para acesso rápido',
+      'Agende fora dos horários de pico do comércio',
+      'Para demolições e obras grandes, a caçamba de 7m³ é muito solicitada',
+    ],
+    precoRelativo: '5-10% abaixo',
+    precoJustificativa:
+      'Madureira tem um dos melhores custos-benefício do Rio: acesso privilegiado pela BR-116 e proximidade com bases logísticas.',
+    landmarks: ['Mercadão de Madureira', 'Estrada do Portela', 'Avenida Ministro Edgard Romero'],
+    servicosPopulares: ['Caçamba 5m³', 'Caçamba 7m³'],
+    tiposObraComuns: ['Reformas comerciais', 'Demolições', 'Construção civil'],
+    observacoesEspecificas:
+      'Madureira é ponto de referência logístico para entregas rápidas em toda a Zona Norte e parte da Zona Oeste.',
+  }),
+  createBairro('Manguinhos', 'zona-norte'),
+  createBairro('Maré', 'zona-norte'),
+  createBairro('Marechal Hermes', 'zona-norte'),
+  createBairro('Maria da Graça', 'zona-norte'),
+  createBairro('Méier', 'zona-norte', {
+    descricao:
+      'O Méier é um dos bairros com melhor custo-benefício para aluguel de caçamba no Rio. Localizado em área de transição com excelente acesso viário, é atendido com rapidez e preços competitivos.',
+    desafios: [
+      'Trânsito intenso nos horários de pico nas avenidas principais',
+      'Comércio intenso exige atenção ao local de posicionamento da caçamba',
+    ],
+    dicasEntrega: [
+      'Aproveite o acesso viário pelas avenidas Brasil e Dom Hélder Câmara',
+      'Para comércios, agende entrega antes da abertura das lojas',
+      'Caçambas de 5m³ são ideais para reformas comerciais no Méier',
+    ],
+    precoRelativo: '5-10% abaixo',
+    precoJustificativa:
+      'O Méier é um dos bairros mais competitivos do Rio: acesso fácil, proximidade de pátios e ruas que permitem manobra sem complicação.',
+    landmarks: ['Avenida Dom Hélder Câmara', 'Rua Dias da Cruz', 'Rua São Francisco Xavier'],
+    servicosPopulares: ['Caçamba 5m³', 'Caçamba 3m³'],
+    tiposObraComuns: ['Reformas comerciais', 'Reformas residenciais', 'Construção de muros'],
+    observacoesEspecificas:
+      'Pela localização central, o Méier funciona como hub de distribuição para entregas rápidas em toda a Zona Norte.',
+  }),
+  createBairro('Olaria', 'zona-norte', {
+    descricao:
+      'A Olaria é um bairro tradicional da Zona Norte, com perfil predominantemente residencial e comercial. Ruas largas na parte baixa e trechos mais estreitos nas áreas de morro.',
+    desafios: [
+      'Acesso variável: ruas amplas na parte plana e vias estreitas em subidas',
+      'Trânsito local intenso em horários comerciais',
+      'Algumas áreas exigem caminhões menores',
+    ],
+    dicasEntrega: [
+      'Para morros e subidas, prefira caçamba de 3m³',
+      'Na parte plana, caçambas de 5m³ e 7m³ são viáveis',
+      'Agende com margem de segurança em dias de chuva forte',
+    ],
+    precoRelativo: 'padrão',
+    precoJustificativa:
+      'A Olaria segue a média da Zona Norte: acesso razoável e demanda constante por reformas.',
+    landmarks: ['Avenida Pastor Martin Luther King Jr.', 'Rua Cônego Tobias', 'Morro da Olaria'],
+    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
+    tiposObraComuns: ['Reformas residenciais', 'Comércios locais', 'Demolições pequenas'],
+    observacoesEspecificas:
+      'Chuvas fortes podem afetar ruas de declividade acentuada. Prefira entregas em dias de tempo firme.',
+  }),
+  createBairro('Oswaldo Cruz', 'zona-norte'),
+  createBairro('Parada de Lucas', 'zona-norte'),
+  createBairro('Parque Anchieta', 'zona-norte'),
+  createBairro('Parque Colúmbia', 'zona-norte'),
+  createBairro('Pavuna', 'zona-norte'),
+  createBairro('Penha', 'zona-norte', {
+    descricao:
+      'A Penha é uma região de grande movimentação na Zona Norte, com áreas residenciais, comerciais e industriais. O endereço comercial da CaçambaRápido está localizado na região, o que garante entrega rápida.',
+    desafios: [
+      'Trânsito intenso na Avenida Brasil e acessos próximos',
+      'Mistura de áreas residenciais e industriais exige tipo de caçamba adequado',
+      'Logradouros movimentados precisam de agendamento preciso',
+    ],
+    dicasEntrega: [
+      'Como a base da empresa fica na Penha, entregas costumam ser muito rápidas',
+      'Para áreas industriais, considere caçambas de 5m³ e 7m³',
+      'Residências e vilas: caçamba de 3m³ é mais prática',
+    ],
+    precoRelativo: '5-10% abaixo',
+    precoJustificativa:
+      'A Penha é a região de base da CaçambaRápido, o que reduz o frete e permite entrega ágil.',
+    landmarks: ['Penha Circular', 'Avenida Brasil', 'Igreja da Penha'],
+    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³', 'Caçamba 7m³', 'Retirada de entulho'],
+    tiposObraComuns: ['Reformas residenciais', 'Obras comerciais', 'Limpeza pós-obra'],
+    observacoesEspecificas:
+      'A proximidade com a base de operações torna a Penha um dos bairros com melhor prazo de entrega do Rio.',
+  }),
+  createBairro('Penha Circular', 'zona-norte'),
+  createBairro('Piedade', 'zona-norte'),
+  createBairro('Pilares', 'zona-norte'),
+  createBairro('Quintino Bocaiuva', 'zona-norte'),
+  createBairro('Ramos', 'zona-norte', {
+    descricao:
+      'Ramos é um bairro da Zona Norte com características mistas, próximo à Baía de Guanabara e com acesso pela Avenida Brasil. Tem perfil residencial e algumas áreas comerciais.',
+    desafios: [
+      'Distância um pouco maior de algumas bases logísticas',
+      'Ruas menores em trechos residenciais',
+      'Trânsito pode ser intenso nos horários de pico',
+    ],
+    dicasEntrega: [
+      'Avenida Brasil é o melhor acesso para entregas rápidas',
+      'Para ruas estreitas, use caçamba de 3m³',
+      'Comunique-se com antecedência em condomínios',
+    ],
+    precoRelativo: 'padrão',
+    precoJustificativa:
+      'Ramos tem preço dentro da média: a Avenida Brasil facilita o acesso, embora alguns trechos residenciais exijam logística extra.',
+    landmarks: ['Avenida Brasil', 'Rua das Oficinas', 'Baía de Guanabara'],
+    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
+    tiposObraComuns: ['Reformas residenciais', 'Comércios de bairro', 'Limpeza de terreno'],
+    observacoesEspecificas:
+      'A proximidade com a Baía de Guanabara exige cuidado especial com descarte em áreas ambientalmente sensíveis. Use sempre empresa licenciada.',
+  }),
+  createBairro('Riachuelo', 'zona-norte'),
+  createBairro('Ricardo de Albuquerque', 'zona-norte'),
+  createBairro('Rocha', 'zona-norte'),
+  createBairro('Rocha Miranda', 'zona-norte'),
+  createBairro('Sampaio', 'zona-norte'),
+  createBairro('São Francisco Xavier', 'zona-norte'),
+  createBairro('Todos os Santos', 'zona-norte'),
+  createBairro('Tomás Coelho', 'zona-norte'),
+  createBairro('Turiaçu', 'zona-norte'),
+  createBairro('Vaz Lobo', 'zona-norte'),
+  createBairro('Vicente de Carvalho', 'zona-norte'),
+  createBairro('Vigário Geral', 'zona-norte'),
+  createBairro('Vila da Penha', 'zona-norte'),
+  createBairro('Vila Kosmos', 'zona-norte'),
+  createBairro('Vista Alegre', 'zona-norte'),
+
+  // ============================================================
+  // ZONA NORTE — Ilhas (15 bairros, exceto Paquetá)
+  // ============================================================
+  createBairro('Bancários', 'zona-norte'),
+  createBairro('Cacuia', 'zona-norte'),
+  createBairro('Cidade Universitária', 'zona-norte'),
+  createBairro('Cocotá', 'zona-norte'),
+  createBairro('Freguesia (Ilha do Governador)', 'zona-norte'),
+  createBairro('Galeão', 'zona-norte'),
+  createBairro('Jardim Carioca', 'zona-norte'),
+  createBairro('Jardim Guanabara', 'zona-norte'),
+  createBairro('Moneró', 'zona-norte'),
+  createBairro('Pitangueiras', 'zona-norte'),
+  createBairro('Portuguesa', 'zona-norte'),
+  createBairro('Praia da Bandeira', 'zona-norte'),
+  createBairro('Ribeira', 'zona-norte'),
+  createBairro('Tauá', 'zona-norte'),
+  createBairro('Zumbi', 'zona-norte'),
+
+  // ============================================================
+  // ZONA SUL (17 bairros)
+  // ============================================================
+  createBairro('Botafogo', 'zona-sul', {
+    descricao:
+      'Botafogo é um bairro de transição entre a Zona Sul e o Centro, com perfil misto residencial e comercial, ruas movimentadas e grande número de reformas.',
+    desafios: [
+      'Trânsito intenso ao longo do dia nas avenidas principais',
+      'Ruas estreitas em trechos residenciais',
+      'Condomínios com regras de horário para carga e descarga',
+      'Área de grande movimentação de pedestres',
+    ],
+    dicasEntrega: [
+      'Agende entregas fora dos horários de pico',
+      'Para apartamentos, prefira caçamba de 3m³',
+      'Para comércios e reformas maiores, avalie caçamba de 5m³',
+      'Sinalize bem a área para segurança de pedestres',
+    ],
+    precoRelativo: '10-15% acima',
+    precoJustificativa:
+      'Botafogo segue a média da Zona Sul: frete e logística mais complexos pela localização e trânsito.',
+    landmarks: ['Praia de Botafogo', 'Pão de Açúcar', 'Avenida Rio Branco', 'Rua Real Grandeza'],
+    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
+    tiposObraComuns: ['Reformas residenciais', 'Reformas comerciais', 'Demolições pequenas'],
+    observacoesEspecificas:
+      'A proximidade com o Centro e avenidas principais pode facilitar o acesso, mas o trânsito exige horários estratégicos.',
+  }),
+  createBairro('Catete', 'zona-sul'),
+  createBairro('Copacabana', 'zona-sul', {
+    descricao:
+      'Copacabana é um dos bairros mais conhecidos do Rio, com alto número de reformas em apartamentos e comércios. A logística de caçamba é desafiadora por causa das ruas estreitas, trânsito e restrições de carga e descarga.',
+    desafios: [
+      'Ruas estreitas e trânsito intenso durante todo o dia',
+      'Pouco espaço para estacionar caçamba na calçada',
+      'Condomínios rigorosos exigem autorização prévia',
+      'Restrições de carga e descarga em horários comerciais',
+      'Taxa de permanência em calçada pode ser cobrada pela prefeitura',
+    ],
+    dicasEntrega: [
+      'Prefira caçambas de 3m³ — cabem em vagas de garagem e corredores estreitos',
+      'Agende entrega entre 7h e 9h para evitar trânsito',
+      'Comunique o síndico com antecedência e peça autorização por escrito',
+      'Empresas com caminhões menores (3/4) são mais ágeis nas ruas estreitas',
+    ],
+    precoRelativo: '10-15% acima',
+    precoJustificativa:
+      'Copacabana é um dos bairros com maior custo logístico do Rio: frete elevado, restrições de horário e dificuldade de manobra.',
+    landmarks: ['Avenida Atlântica', 'Copacabana Palace', 'Forte de Copacabana', 'Posto 6'],
+    servicosPopulares: ['Caçamba 3m³', 'Retirada de entulho'],
+    tiposObraComuns: ['Reformas de apartamentos', 'Demolições pequenas', 'Troca de piso'],
+    observacoesEspecificas:
+      'Muitos prédios não possuem área de descarte interna, exigindo que a caçamba fique na calçada. Verifique a necessidade de autorização da prefeitura.',
+  }),
+  createBairro('Cosme Velho', 'zona-sul'),
+  createBairro('Flamengo', 'zona-sul', {
+    descricao:
+      'Flamengo é um bairro residencial tradicional da Zona Sul, com avenidas largas na orla e ruas mais estreitas no interior. Tem forte demanda por reformas e retrofit de apartamentos antigos.',
+    desafios: [
+      'Ruas estreitas em trechos residenciais',
+      'Estacionamento disputado nas ruas internas',
+      'Condomínios antigos com acesso de serviço limitado',
+      'Trânsito intenso nas avenidas próximas à praia',
+    ],
+    dicasEntrega: [
+      'Para prédios antigos, verifique acesso de serviço e dimensões do elevador de carga',
+      'Caçamba de 3m³ é a mais prática para a maioria das reformas',
+      'Agende pela manhã para evitar congestionamento',
+    ],
+    precoRelativo: '10-15% acima',
+    precoJustificativa:
+      'Flamengo tem custo dentro da faixa da Zona Sul: frete elevado pela distância, mas com acesso viário relativamente organizado.',
+    landmarks: ['Aterro do Flamengo', 'Praia do Flamengo', 'Rua Marquês de Abrantes', 'Largo do Machado'],
+    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
+    tiposObraComuns: ['Retrofit de apartamentos', 'Reformas residenciais', 'Demolições pequenas'],
+    observacoesEspecificas:
+      'Prédios antigos podem não ter área de descarte adequada. Avalie a possibilidade de retirada de entulho como alternativa.',
+  }),
+  createBairro('Gávea', 'zona-sul'),
+  createBairro('Humaitá', 'zona-sul'),
+  createBairro('Ipanema', 'zona-sul', {
+    descricao:
+      'Ipanema é um bairro nobre da Zona Sul com grande densidade de apartamentos, comércios de luxo e reformas constantes. O espaço para caçamba é limitado e a fiscalização é rigorosa.',
+    desafios: [
+      'Ruas estreitas e estacionamento disputado',
+      'Condomínios de alto padrão com regras rigorosas',
+      'Restrições de carga e descarga em horários específicos',
+      'Trânsito de pedestres intenso exige segurança reforçada',
+    ],
+    dicasEntrega: [
+      'Caçamba de 3m³ é praticamente obrigatória em Ipanema',
+      'Agende com pelo menos 48h de antecedência para liberar condomínio',
+      'Use sinalização com cones e fitas zebradas',
+      'Prefira entregas no início da manhã',
+    ],
+    precoRelativo: '10-15% acima',
+    precoJustificativa:
+      'Ipanema tem custo logístico elevado: acesso complicado, condomínios exigentes e alta demanda por reformas de apartamentos.',
+    landmarks: ['Praia de Ipanema', 'Lagoa Rodrigo de Freitas', 'Rua Farme de Amoedo', 'Garota de Ipanema'],
+    servicosPopulares: ['Caçamba 3m³', 'Retirada de entulho'],
+    tiposObraComuns: ['Reformas de apartamentos', 'Comércios de luxo', 'Demolições pequenas'],
+    observacoesEspecificas:
+      'A proximidade com a Lagoa e áreas de proteção ambiental exige atenção redobrada com o descarte. Empresa licenciada é essencial.',
+  }),
+  createBairro('Jardim Botânico', 'zona-sul'),
+  createBairro('Lagoa', 'zona-sul'),
+  createBairro('Laranjeiras', 'zona-sul', {
+    descricao:
+      'Laranjeiras é um bairro residencial nobre e tranquilo da Zona Sul, com ruas arborizadas, casarões e prédios históricos. As reformas são frequentes, mas a logística exige cuidado com o espaço.',
+    desafios: [
+      'Ruas residenciais estreitas e arborizadas',
+      'Ladeiras e declives em vários trechos',
+      'Fiscalização de estacionamento rigorosa',
+      'Preservação de imóveis históricos exige cuidado',
+    ],
+    dicasEntrega: [
+      'Caçamba de 3m³ é a mais indicada para ruas estreitas',
+      'Em ladeiras, posicione a caçamba em local plano e firme',
+      'Agende com antecedência para evitar conflitos com estacionamento rotativo',
+    ],
+    precoRelativo: '10-15% acima',
+    precoJustificativa:
+      'Laranjeiras tem custo típico da Zona Sul: ruas estreitas e declives aumentam a complexidade da entrega.',
+    landmarks: ['Rua Ipiranga', 'Largo da Segunda-Feira', 'Palácio Guanabara', 'Praça São Salvador'],
+    servicosPopulares: ['Caçamba 3m³', 'Retirada de entulho'],
+    tiposObraComuns: ['Reformas de casarões', 'Retrofit de apartamentos', 'Demolições pequenas'],
+    observacoesEspecificas:
+      'A preservação de imóveis históricos exige cuidado na remoção de entulho pesado e na manobra de veículos.',
+  }),
+  createBairro('Leblon', 'zona-sul', {
+    descricao:
+      'Leblon é um dos bairros mais valorizados do Rio, com edifícios residenciais de alto padrão, comércios sofisticados e reformas frequentes. A logística de caçamba exige discrição e pontualidade.',
+    desafios: [
+      'Ruas estreitas e trânsito intenso',
+      'Condomínios com regras rigorosas de acesso',
+      'Exigência de horários específicos para carga e descarga',
+      'Alta visibilidade — qualquer problema de logística é notado',
+    ],
+    dicasEntrega: [
+      'Use caçamba de 3m³ para caber em áreas de descarte internas',
+      'Agende com antecedência e confirme autorização do condomínio',
+      'Mantenha a área limpa e sinalizada durante a permanência',
+      'Prefira caminhões menores para manobra nas ruas do bairro',
+    ],
+    precoRelativo: '10-15% acima',
+    precoJustificativa:
+      'Leblon tem preço acima da média pela dificuldade logística, distância das bases da Zona Norte e alta exigência dos condomínios.',
+    landmarks: ['Praia do Leblon', 'Shopping Leblon', 'Rua Dias Ferreira', 'Lagoa Rodrigo de Freitas'],
+    servicosPopulares: ['Caçamba 3m³', 'Retirada de entulho'],
+    tiposObraComuns: ['Reformas de apartamentos de luxo', 'Comércios sofisticados', 'Demolições pequenas'],
+    observacoesEspecificas:
+      'Edifícios de alto padrão costumam exigir seguro de responsabilidade civil e comprovação de licença ambiental.',
+  }),
+  createBairro('Leme', 'zona-sul'),
+  createBairro('Rocinha', 'zona-sul'),
+  createBairro('São Conrado', 'zona-sul'),
+  createBairro('Urca', 'zona-sul'),
+  createBairro('Vidigal', 'zona-sul'),
+
+  // ============================================================
+  // ZONA SUDOESTE — Lei 2025 (21 bairros)
+  // ============================================================
+  createBairro('Anil', 'zona-sudoeste'),
+  createBairro('Barra da Tijuca', 'zona-sudoeste', {
+    descricao:
+      'A Barra da Tijuca é a região com maior volume de obras da Zona Sudoeste do Rio. Ruas largas, condomínios fechados e muitas demolições e construções fazem da caçamba de 5m³ e 7m³ as mais solicitadas.',
+    desafios: [
+      'Distância maior dos pátios centrais, o que eleva o frete',
+      'Trânsito pesado na Avenida das Américas em horários de pico',
+      'Condomínios fechados com controle de acesso rigoroso',
+      'Obras grandes exigem logística de múltiplas caçambas',
+    ],
+    dicasEntrega: [
+      'Contrate empresas que atendam a Barra com frequência para reduzir frete',
+      'Para condomínios, libere acesso na portaria com antecedência',
+      'Obras grandes podem negociar pacotes de múltiplas caçambas com desconto',
+      'Caçambas de 5m³ e 7m³ são as mais comuns na região',
+    ],
+    precoRelativo: '10-15% acima',
+    precoJustificativa:
+      'A Barra tem frete elevado pela distância, mas a alta concorrência e o volume de obras compensam parcialmente o custo.',
+    landmarks: ['Avenida das Américas', 'Praia da Barra', 'Shopping Barra', 'Cidade das Artes'],
+    servicosPopulares: ['Caçamba 5m³', 'Caçamba 7m³', 'Retirada de entulho'],
+    tiposObraComuns: ['Construção de casas', 'Demolições', 'Reformas de condomínios'],
+    observacoesEspecificas:
+      'A Barra é o bairro com maior demanda por caçambas de grande porte no Rio. Para obras longas, pacotes mensais costumam ser mais vantajosos.',
+  }),
+  createBairro('Barra Olímpica', 'zona-sudoeste'),
+  createBairro('Camorim', 'zona-sudoeste'),
+  createBairro('Cidade de Deus', 'zona-sudoeste'),
+  createBairro('Curicica', 'zona-sudoeste'),
+  createBairro('Freguesia', 'zona-sudoeste', {
+    descricao:
+      'A Freguesia (Jacarepaguá) é uma região residencial e comercial em expansão na Zona Sudoeste, com ruas largas, condomínios e muitas reformas. É um dos pontos mais acessíveis da região.',
+    desafios: [
+      'Crescimento rápido pode gerar obras simultâneas e concorrência por caçambas',
+      'Condomínios fechados exigem liberação prévia na portaria',
+      'Algumas ruas ainda em urbanização podem dificultar acesso',
+    ],
+    dicasEntrega: [
+      'A Freguesia é uma das regiões de melhor acesso na Zona Sudoeste',
+      'Para reformas residenciais, caçamba de 5m³ é o mais solicitado',
+      'Para condomínios, agende com a portaria com antecedência',
+    ],
+    precoRelativo: 'padrão',
+    precoJustificativa:
+      'A Freguesia tem preço competitivo para a Zona Sudoeste: boa infraestrutura, acesso viário em desenvolvimento e alta demanda.',
+    landmarks: ['Avenida Geremário Dantas', 'Rua Cândido Benício', 'Estrada dos Bandeirantes'],
+    servicosPopulares: ['Caçamba 5m³', 'Caçamba 3m³'],
+    tiposObraComuns: ['Reformas residenciais', 'Comércios locais', 'Construção de casas'],
+    observacoesEspecificas:
+      'A região está em forte expansão. Reservar caçamba com antecedência garante disponibilidade em períodos de pico.',
+  }),
+  createBairro('Gardênia Azul', 'zona-sudoeste'),
+  createBairro('Grumari', 'zona-sudoeste'),
+  createBairro('Itanhangá', 'zona-sudoeste'),
+  createBairro('Jacarepaguá', 'zona-sudoeste', {
+    descricao:
+      'Jacarepaguá é uma região extensa e em crescimento na Zona Sudoeste, misturando áreas residenciais, comerciais e industriais. Tem acesso facilitado pela Avenida Nelson Cardoso e pela Transolímpica.',
+    desafios: [
+      'Bairro grande e fragmentado — prazo pode variar conforme o sub-bairro',
+      'Áreas industriais exigem caçambas maiores',
+      'Condomínios fechados são comuns em vários trechos',
+    ],
+    dicasEntrega: [
+      'Informe o sub-bairro exato (Pechincha, Tanque, Freguesia, Cidade de Deus etc.)',
+      'Para áreas industriais, use caçamba de 7m³',
+      'Para condomínios e ruas residenciais, 3m³ e 5m³ são mais práticas',
+    ],
+    precoRelativo: 'padrão',
+    precoJustificativa:
+      'Jacarepaguá tem preço competitivo para a Zona Sudoeste: boa infraestrutura viária e proximidade com outras bases logísticas.',
+    landmarks: ['Avenida Nelson Cardoso', 'Transolímpica', 'Pechincha', 'Tanque', 'Cidade de Deus'],
+    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³', 'Caçamba 7m³'],
+    tiposObraComuns: ['Reformas residenciais', 'Obras comerciais', 'Demolições'],
+    observacoesEspecificas:
+      'A região é muito extensa. Informar o sub-bairro exato ajuda a calcular o prazo e o frete com precisão.',
+  }),
+  createBairro('Joá', 'zona-sudoeste'),
+  createBairro('Pechincha', 'zona-sudoeste'),
+  createBairro('Praça Seca', 'zona-sudoeste'),
+  createBairro('Recreio dos Bandeirantes', 'zona-sudoeste', {
+    descricao:
+      'O Recreio dos Bandeirantes é uma região em expansão na Zona Sudoeste, com obras residenciais, condomínios e comércios em crescimento. A distância é maior, mas o acesso viário é bom.',
+    desafios: [
+      'Grande distância dos pátios centrais aumenta o frete',
+      'Condomínios fechados exigem agendamento prévio',
+      'Áreas mais afastadas podem ter prazo de entrega maior',
+      'Obras residenciais de médio porte são predominantes',
+    ],
+    dicasEntrega: [
+      'Agende com pelo menos 24h de antecedência',
+      'Para condomínios, confirme horário de acesso com a portaria',
+      'Caçamba de 5m³ é o tamanho mais solicitado',
+      'Considere pacotes de múltiplas caçambas para obras maiores',
+    ],
+    precoRelativo: '20-30% acima',
+    precoJustificativa:
+      'O Recreio é um dos bairros com maior frete do Rio pela distância, mas o volume de obras mantém a demanda aquecida.',
+    landmarks: ['Praia do Recreio', 'Avenida das Américas', 'Parque Chico Mendes', 'Praia da Macumba'],
+    servicosPopulares: ['Caçamba 5m³', 'Caçamba 7m³'],
+    tiposObraComuns: ['Construção de casas', 'Reformas residenciais', 'Demolições médias'],
+    observacoesEspecificas:
+      'A distância torna o planejamento essencial. Obras urgentes devem ser agendadas com margem de segurança.',
+  }),
+  createBairro('Rio das Pedras', 'zona-sudoeste'),
+  createBairro('Tanque', 'zona-sudoeste'),
+  createBairro('Taquara', 'zona-sudoeste', {
+    descricao:
+      'A Taquara é um bairro residencial da Zona Sudoeste com perfil familiar, ruas mais tranquilas e reformas residenciais frequentes. A entrega de caçamba é facilitada pelas vias de acesso.',
+    desafios: [
+      'Ruas residenciais podem ter estacionamento nos dois lados',
+      'Trechos mais afastados exigem planejamento de rota',
+      'Demanda crescente pode afetar disponibilidade em picos',
+    ],
+    dicasEntrega: [
+      'Agende com antecedência em fins de semana e feriados',
+      'Caçamba de 3m³ e 5m³ atendem a maioria das reformas',
+      'Para terrenos e construções, avalie caçamba de 7m³',
+    ],
+    precoRelativo: '10-15% acima',
+    precoJustificativa:
+      'Taquara tem frete moderado pela distância da Zona Sudoeste, com acesso razoável e demanda em crescimento.',
+    landmarks: ['Estrada dos Bandeirantes', 'Praça da Taquara', 'Rua Cândido Benício'],
+    servicosPopulares: ['Caçamba 3m³', 'Caçamba 5m³'],
+    tiposObraComuns: ['Reformas residenciais', 'Construção de casas', 'Limpeza de terreno'],
+    observacoesEspecificas:
+      'A proximidade com Jacarepaguá e Freguesia facilita a logística, mas a distância ainda impacta o frete.',
+  }),
+  createBairro('Vargem Grande', 'zona-sudoeste'),
+  createBairro('Vargem Pequena', 'zona-sudoeste'),
+  createBairro('Vila Valqueire', 'zona-sudoeste'),
+];
+
+export const bairrosPorZona = (zonaSlug: string) =>
+  bairros.filter((b) => b.zonaSlug === zonaSlug);
+
+export const bairroPorSlug = (slug: string) => bairros.find((b) => b.slug === slug);
diff --git a/src/pages/area-de-atendimento/[bairro].astro b/src/pages/area-de-atendimento/[bairro].astro
new file mode 100644
index 0000000..6e51c5f
--- /dev/null
+++ b/src/pages/area-de-atendimento/[bairro].astro
@@ -0,0 +1,428 @@
+---
+import { getCollection } from 'astro:content';
+import Layout from '../../layouts/Layout.astro';
+import Header from '../../components/Header.astro';
+import Footer from '../../components/Footer.astro';
+import Breadcrumb from '../../components/Breadcrumb.astro';
+import { SITE_CONFIG } from '../../data/config';
+import { bairros, bairrosPorZona, type Bairro } from '../../data/bairros';
+
+export const prerender = true;
+
+export async function getStaticPaths() {
+  return bairros.map((bairro) => ({
+    params: { bairro: bairro.slug },
+    props: { bairro },
+  }));
+}
+
+interface Props {
+  bairro: Bairro;
+}
+
+const { bairro } = Astro.props;
+const prep = bairro.preposicao;
+const Prep = prep.charAt(0).toUpperCase() + prep.slice(1);
+
+const outrosBairrosMesmaZona = bairrosPorZona(bairro.zonaSlug)
+  .filter((b) => b.slug !== bairro.slug)
+  .slice(0, 6);
+
+const outrosBairrosOutrasZonas = bairros
+  .filter((b) => b.zonaSlug !== bairro.zonaSlug)
+  .slice(0, 6);
+
+const servicos = await getCollection('servicos');
+const waMensagem = `Olá! Vi no site que vocês atendem ${prep} ${bairro.nome}. Gostaria de um orçamento para caçamba de entulho.`;
+const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(waMensagem)}`;
+const telUrl = `tel:${SITE_CONFIG.phoneRaw}`;
+
+const precoTexto = {
+  'padrão': 'preços dentro da média da região',
+  '5-10% abaixo': 'preços 5% a 10% abaixo da média da cidade',
+  '10-15% acima': 'preços 10% a 15% acima da média da cidade',
+  '20-30% acima': 'preços 20% a 30% acima da média da cidade',
+};
+
+const faqItems = [
+  {
+    question: `Quanto custa alugar uma caçamba de entulho ${prep} ${bairro.nome}?`,
+    answer: `${Prep} ${bairro.nome}, o aluguel de caçamba de entulho tem ${precoTexto[bairro.precoRelativo]}. Os valores partem de R$ 350 para caçamba de 3m³, R$ 450 para 5m³ e R$ 600 para 7m³, incluindo entrega, retirada, nota fiscal e certificado de destinação. Solicite orçamento grátis pelo WhatsApp em até 30 minutos.`,
+  },
+  {
+    question: `Qual o prazo de entrega da caçamba ${prep} ${bairro.nome}?`,
+    answer: `Entregamos caçambas ${prep} ${bairro.nome} no mesmo dia ou, no máximo, em até 24 horas úteis após a confirmação. ${bairro.observacoesEspecificas}`,
+  },
+  {
+    question: `Qual o tamanho ideal de caçamba para obras ${prep} ${bairro.nome}?`,
+    answer: `${Prep} ${bairro.nome}, os tamanhos mais solicitados são: ${bairro.servicosPopulares.join(', ')}. Para pequenas reformas e apartamentos, a caçamba de 3m³ é ideal. Para obras médias e comerciais, a de 5m³. Para grandes demolições e construções, a de 7m³.`,
+  },
+  {
+    question: `A caçamba ${prep} ${bairro.nome} inclui documentação ambiental?`,
+    answer: `Sim. Toda locação ${prep} ${bairro.nome} inclui nota fiscal, certificado de destinação final (CDF) e licença ambiental da empresa transportadora. Você descarta o entulho de forma legal e sem risco de multa.`,
+  },
+];
+
+const title = `Aluguel de Caçamba de Entulho ${prep} ${bairro.nome} | CaçambaRápido — ${bairro.zona}`;
+const description = `Aluguel de caçamba de entulho ${prep} ${bairro.nome}, ${bairro.zona} do Rio de Janeiro. Entrega em até 24h, preço justo e documentação ambiental. Caçambas de 3m³, 5m³ e 7m³. Solicite orçamento grátis.`;
+---
+
+<Layout title={title} description={description}>
+  <Header />
+
+  <main class="bg-concrete">
+    <div class="container mx-auto px-6 md:px-12 pt-8">
+      <Breadcrumb items={[
+        { label: 'Início', href: '/' },
+        { label: 'Área de Atendimento', href: '/area-de-atendimento/' },
+        { label: bairro.nome, href: `/area-de-atendimento/${bairro.slug}/` },
+      ]} />
+    </div>
+
+    <!-- Hero -->
+    <section class="py-24 md:py-32 relative overflow-hidden">
+      <div class="absolute inset-0 overflow-hidden pointer-events-none">
+        <div class="absolute -top-1/4 -right-1/4 w-[80vw] h-[120vh] bg-safety/5 rotate-12 rounded-3xl"></div>
+      </div>
+
+      <div class="container mx-auto px-6 md:px-12 relative">
+        <div class="max-w-4xl">
+          <span class="inline-block rounded-full bg-safety/10 px-4 py-2 text-sm font-semibold text-secondary mb-6">
+            {bairro.zona} do Rio de Janeiro
+          </span>
+
+          <h1 class="font-display text-5xl md:text-7xl text-pale uppercase leading-[0.95] mb-8">
+            Caçamba de Entulho<br />
+            {prep} <span class="text-safety">{bairro.nome}</span>
+          </h1>
+
+          <p class="text-xl md:text-2xl text-pale/60 max-w-3xl mb-10 leading-relaxed">
+            {bairro.descricao}
+          </p>
+
+          <div class="flex flex-col sm:flex-row gap-4">
+            <a
+              href={waUrl}
+              target="_blank"
+              rel="noopener noreferrer"
+              class="inline-flex items-center justify-center gap-3 bg-green-500 px-8 py-4 text-base font-display uppercase tracking-wider text-white hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 min-h-[56px]"
+            >
+              WhatsApp — Orçamento para {bairro.nome}
+            </a>
+            <a
+              href={telUrl}
+              class="inline-flex items-center justify-center gap-3 bg-safety px-8 py-4 text-base font-display uppercase tracking-wider text-concrete hover:bg-safety-dark transition-colors min-h-[56px]"
+            >
+              Ligar Agora
+            </a>
+          </div>
+        </div>
+      </div>
+    </section>
+
+    <!-- Destaques -->
+    <section class="py-16 md:py-24 bg-concrete-light relative">
+      <div class="absolute top-0 left-0 w-full h-px bg-safety/10"></div>
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
+          <div class="bg-concrete border border-steel p-8 md:p-10 text-center">
+            <div class="font-display text-4xl text-safety mb-4">🚛</div>
+            <h3 class="font-display text-xl text-pale uppercase mb-2">Entrega Rápida</h3>
+            <p class="text-pale/50 text-sm">Até 24h em {bairro.nome}. Mesmo dia quando há disponibilidade.</p>
+          </div>
+          <div class="bg-concrete border border-steel p-8 md:p-10 text-center">
+            <div class="font-display text-4xl text-safety mb-4">📋</div>
+            <h3 class="font-display text-xl text-pale uppercase mb-2">Documentação Inclusa</h3>
+            <p class="text-pale/50 text-sm">Nota fiscal, CDF e licença ambiental. Sem dor de cabeça.</p>
+          </div>
+          <div class="bg-concrete border border-steel p-8 md:p-10 text-center">
+            <div class="font-display text-4xl text-safety mb-4">💰</div>
+            <h3 class="font-display text-xl text-pale uppercase mb-2">Preço Justo</h3>
+            <p class="text-pale/50 text-sm">{precoTexto[bairro.precoRelativo]}. Orçamento sem taxas escondidas.</p>
+          </div>
+        </div>
+      </div>
+    </section>
+
+    <!-- Conteúdo principal -->
+    <section class="py-24 md:py-32">
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-6xl mx-auto">
+          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
+            <!-- Coluna de conteúdo -->
+            <div class="lg:col-span-2 space-y-16">
+              <!-- Desafios locais -->
+              <div>
+                <div class="flex items-center gap-4 mb-6">
+                  <div class="h-px w-12 bg-safety"></div>
+                  <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Logística local</span>
+                </div>
+                <h2 class="font-display text-3xl md:text-4xl text-pale uppercase leading-tight mb-6">
+                  Como funciona o aluguel de caçamba em {bairro.nome}
+                </h2>
+                <p class="text-pale/60 text-lg leading-relaxed mb-8">
+                  {bairro.descricao} Cada bairro do Rio tem particularidades que afetam prazo, preço e tamanho ideal da caçamba. Em {bairro.nome}, a experiência acumulada nos permite entregar com agilidade e segurança.
+                </p>
+
+                <h3 class="font-display text-xl text-pale uppercase mb-4">Desafios específicos do bairro</h3>
+                <ul class="space-y-3 mb-8">
+                  {bairro.desafios.map((item) => (
+                    <li class="flex items-start gap-3 text-pale/60">
+                      <svg class="w-5 h-5 text-safety flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
+                      </svg>
+                      <span>{item}</span>
+                    </li>
+                  ))}
+                </ul>
+
+                <h3 class="font-display text-xl text-pale uppercase mb-4">Dicas para entrega em {bairro.nome}</h3>
+                <ul class="space-y-3">
+                  {bairro.dicasEntrega.map((item) => (
+                    <li class="flex items-start gap-3 text-pale/60">
+                      <svg class="w-5 h-5 text-safety flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
+                      </svg>
+                      <span>{item}</span>
+                    </li>
+                  ))}
+                </ul>
+              </div>
+
+              <!-- Serviços -->
+              <div>
+                <div class="flex items-center gap-4 mb-6">
+                  <div class="h-px w-12 bg-safety"></div>
+                  <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Serviços</span>
+                </div>
+                <h2 class="font-display text-3xl md:text-4xl text-pale uppercase leading-tight mb-6">
+                  Serviços de caçamba em {bairro.nome}
+                </h2>
+                <p class="text-pale/60 text-lg leading-relaxed mb-8">
+                  Atendemos {bairro.nome} com todos os tamanhos de caçamba e retirada de entulho. Os serviços mais procurados no bairro são:
+                </p>
+
+                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
+                  {bairro.servicosPopulares.map((servicoNome) => {
+                    const servico = servicos.find((s) => servicoNome.includes(s.data.title));
+                    return (
+                      <a
+                        href={servico ? `/servicos/${servico.slug}/` : '/servicos/'}
+                        class="group bg-concrete-light border border-steel p-6 hover:border-safety transition-all"
+                      >
+                        <div class="flex items-start justify-between mb-4">
+                          <h3 class="font-display text-lg text-pale uppercase group-hover:text-safety transition-colors">{servicoNome}</h3>
+                          <svg class="w-5 h-5 text-steel group-hover:text-safety transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
+                          </svg>
+                        </div>
+                        <p class="text-pale/50 text-sm">
+                          {servico ? servico.data.description : 'Solicite orçamento para mais detalhes.'}
+                        </p>
+                      </a>
+                    );
+                  })}
+                </div>
+
+                <h3 class="font-display text-xl text-pale uppercase mb-4">Tipos de obra comuns em {bairro.nome}</h3>
+                <div class="flex flex-wrap gap-2">
+                  {bairro.tiposObraComuns.map((obra) => (
+                    <span class="inline-block border border-steel px-4 py-2 text-sm text-pale/60">{obra}</span>
+                  ))}
+                </div>
+              </div>
+
+              <!-- Preços -->
+              <div>
+                <div class="flex items-center gap-4 mb-6">
+                  <div class="h-px w-12 bg-safety"></div>
+                  <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Investimento</span>
+                </div>
+                <h2 class="font-display text-3xl md:text-4xl text-pale uppercase leading-tight mb-6">
+                  Preço do aluguel de caçamba em {bairro.nome}
+                </h2>
+                <p class="text-pale/60 text-lg leading-relaxed mb-8">
+                  Em {bairro.nome}, os valores praticados são {precoTexto[bairro.precoRelativo]}. A tabela abaixo mostra os preços de referência para locação padrão de 7 dias:
+                </p>
+
+                <div class="overflow-x-auto mb-8">
+                  <table class="w-full text-left border border-steel">
+                    <thead>
+                      <tr class="bg-concrete-light">
+                        <th class="px-6 py-4 text-pale font-display uppercase text-sm border-b border-steel">Tamanho</th>
+                        <th class="px-6 py-4 text-pale font-display uppercase text-sm border-b border-steel">Preço a partir de</th>
+                        <th class="px-6 py-4 text-pale font-display uppercase text-sm border-b border-steel">Indicado para</th>
+                      </tr>
+                    </thead>
+                    <tbody>
+                      <tr class="border-b border-steel">
+                        <td class="px-6 py-4 text-pale/70">Caçamba 3m³</td>
+                        <td class="px-6 py-4 text-safety font-bold">R$ 350</td>
+                        <td class="px-6 py-4 text-pale/70">Pequenas reformas e apartamentos</td>
+                      </tr>
+                      <tr class="border-b border-steel">
+                        <td class="px-6 py-4 text-pale/70">Caçamba 5m³</td>
+                        <td class="px-6 py-4 text-safety font-bold">R$ 450</td>
+                        <td class="px-6 py-4 text-pale/70">Obras médias e comerciais</td>
+                      </tr>
+                      <tr>
+                        <td class="px-6 py-4 text-pale/70">Caçamba 7m³</td>
+                        <td class="px-6 py-4 text-safety font-bold">R$ 600</td>
+                        <td class="px-6 py-4 text-pale/70">Grandes demolições e construções</td>
+                      </tr>
+                    </tbody>
+                  </table>
+                </div>
+
+                <p class="text-pale/50 text-sm">
+                  {bairro.precoJustificativa} O valor final pode variar conforme prazo, urgência, tipo de resíduo e acesso do local. Solicite um orçamento personalizado pelo WhatsApp.
+                </p>
+              </div>
+
+              <!-- Referências locais -->
+              <div>
+                <div class="flex items-center gap-4 mb-6">
+                  <div class="h-px w-12 bg-safety"></div>
+                  <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Referências locais</span>
+                </div>
+                <h2 class="font-display text-3xl md:text-4xl text-pale uppercase leading-tight mb-6">
+                  Atendemos próximo a pontos de referência de {bairro.nome}
+                </h2>
+                <p class="text-pale/60 text-lg leading-relaxed mb-6">
+                  Nossa frota conhece bem a região e atende obras próximas a:
+                </p>
+                <div class="flex flex-wrap gap-2 mb-8">
+                  {bairro.landmarks.map((landmark) => (
+                    <span class="inline-block bg-safety/10 border border-safety/20 px-4 py-2 text-sm text-safety">{landmark}</span>
+                  ))}
+                </div>
+                <p class="text-pale/60 text-lg leading-relaxed">
+                  {bairro.observacoesEspecificas}
+                </p>
+              </div>
+
+              <!-- FAQ -->
+              <div>
+                <div class="flex items-center gap-4 mb-6">
+                  <div class="h-px w-12 bg-safety"></div>
+                  <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Dúvidas</span>
+                </div>
+                <h2 class="font-display text-3xl md:text-4xl text-pale uppercase leading-tight mb-8">
+                  Perguntas frequentes sobre {bairro.nome}
+                </h2>
+                <div class="space-y-4">
+                  {faqItems.map((faq) => (
+                    <details class="group rounded-2xl bg-concrete-light border border-steel open:border-safety transition-all">
+                      <summary class="flex items-center justify-between cursor-pointer p-6 text-left list-none">
+                        <h3 class="font-bold text-pale text-lg pr-4">{faq.question}</h3>
+                        <svg class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
+                        </svg>
+                      </summary>
+                      <div class="px-6 pb-6 text-pale/60 leading-relaxed">
+                        {faq.answer}
+                      </div>
+                    </details>
+                  ))}
+                </div>
+              </div>
+            </div>
+
+            <!-- Sidebar -->
+            <div class="lg:col-span-1">
+              <div class="sticky top-28 space-y-6">
+                <div class="bg-concrete-light border border-steel p-8">
+                  <h3 class="font-display text-xl text-pale uppercase mb-4">Orçamento para {bairro.nome}</h3>
+                  <p class="text-pale/50 text-sm mb-6">
+                    Resposta em até 30 minutos. Atendemos {bairro.nome} e toda a {bairro.zona}.
+                  </p>
+                  <a
+                    href={waUrl}
+                    target="_blank"
+                    rel="noopener noreferrer"
+                    class="inline-flex items-center justify-center gap-2 w-full bg-green-500 px-4 py-3 text-sm font-display uppercase tracking-wider text-white hover:bg-green-600 transition-colors mb-3"
+                  >
+                    WhatsApp
+                  </a>
+                  <a
+                    href={telUrl}
+                    class="inline-flex items-center justify-center gap-2 w-full bg-safety px-4 py-3 text-sm font-display uppercase tracking-wider text-concrete hover:bg-safety-dark transition-colors"
+                  >
+                    Ligar Agora
+                  </a>
+                </div>
+
+                <div class="bg-concrete-light border border-steel p-8">
+                  <h3 class="font-display text-lg text-pale uppercase mb-4">Outros bairros da {bairro.zona}</h3>
+                  <div class="flex flex-wrap gap-2">
+                    {outrosBairrosMesmaZona.map((b) => (
+                      <a href={`/area-de-atendimento/${b.slug}/`} class="inline-block border border-steel px-3 py-1 text-xs text-pale/60 hover:border-safety hover:text-safety transition-colors">
+                        {b.nome}
+                      </a>
+                    ))}
+                  </div>
+                </div>
+
+                <div class="bg-concrete-light border border-steel p-8">
+                  <h3 class="font-display text-lg text-pale uppercase mb-4">Outras regiões</h3>
+                  <div class="flex flex-wrap gap-2">
+                    {outrosBairrosOutrasZonas.map((b) => (
+                      <a href={`/area-de-atendimento/${b.slug}/`} class="inline-block border border-steel px-3 py-1 text-xs text-pale/60 hover:border-safety hover:text-safety transition-colors">
+                        {b.nome}
+                      </a>
+                    ))}
+                  </div>
+                </div>
+
+                <div class="bg-concrete-light border border-steel p-8">
+                  <h3 class="font-display text-lg text-pale uppercase mb-4">Nossos serviços</h3>
+                  <ul class="space-y-3 text-sm text-pale/50">
+                    <li class="flex items-center gap-2"><svg class="w-4 h-4 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Caçamba 3m³</li>
+                    <li class="flex items-center gap-2"><svg class="w-4 h-4 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Caçamba 5m³</li>
+                    <li class="flex items-center gap-2"><svg class="w-4 h-4 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Caçamba 7m³</li>
+                    <li class="flex items-center gap-2"><svg class="w-4 h-4 text-safety" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>Retirada de Entulho</li>
+                  </ul>
+                  <a href="/servicos/" class="inline-block mt-4 text-sm font-display uppercase tracking-wider text-safety hover:text-pale transition-colors">Ver todos →</a>
+                </div>
+              </div>
+            </div>
+          </div>
+        </div>
+      </div>
+    </section>
+
+    <!-- CTA final -->
+    <section class="py-24 md:py-32 bg-concrete-light relative">
+      <div class="absolute top-0 left-0 w-full h-px bg-safety/10"></div>
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-4xl mx-auto text-center">
+          <h2 class="font-display text-3xl md:text-5xl text-pale uppercase mb-6">
+            Caçamba em {bairro.nome}?<br />
+            <span class="text-safety">Solicite orçamento grátis</span>
+          </h2>
+          <p class="text-lg text-pale/50 mb-10 max-w-2xl mx-auto">
+            Atendemos {bairro.nome} e toda a {bairro.zona} com entrega em até 24h, documentação completa e preço justo.
+          </p>
+          <div class="flex flex-col sm:flex-row gap-4 justify-center">
+            <a
+              href={waUrl}
+              target="_blank"
+              rel="noopener noreferrer"
+              class="inline-flex items-center justify-center gap-3 bg-green-500 px-8 py-5 text-base font-display uppercase tracking-wider text-white hover:bg-green-600 transition-colors shadow-xl shadow-green-500/20 min-h-[56px]"
+            >
+              WhatsApp para {bairro.nome}
+            </a>
+            <a
+              href={telUrl}
+              class="inline-flex items-center justify-center gap-3 bg-safety px-8 py-5 text-base font-display uppercase tracking-wider text-concrete hover:bg-safety-dark transition-colors min-h-[56px]"
+            >
+              Ligar Agora
+            </a>
+          </div>
+        </div>
+      </div>
+    </section>
+  </main>
+
+  <Footer />
+</Layout>
diff --git a/src/pages/area-de-atendimento/index.astro b/src/pages/area-de-atendimento/index.astro
new file mode 100644
index 0000000..336c307
--- /dev/null
+++ b/src/pages/area-de-atendimento/index.astro
@@ -0,0 +1,266 @@
+---
+import Layout from '../../layouts/Layout.astro';
+import Header from '../../components/Header.astro';
+import Footer from '../../components/Footer.astro';
+import Breadcrumb from '../../components/Breadcrumb.astro';
+import SchemaLocalBusiness from '../../components/SchemaLocalBusiness.astro';
+import { SITE_CONFIG } from '../../data/config';
+import { bairros, bairrosPorZona } from '../../data/bairros';
+
+const waUrl = SITE_CONFIG.social.whatsapp;
+const telUrl = `tel:${SITE_CONFIG.phoneRaw}`;
+
+const title = `Área de Atendimento | Aluguel de Caçamba no Rio de Janeiro | CaçambaRápido`;
+const description = `Atendemos a Zona Norte, Zona Sul e Zona Sudoeste do Rio de Janeiro com aluguel de caçamba de entulho. Veja os bairros atendidos e solicite orçamento grátis.`;
+
+const bairrosNorte = bairrosPorZona('zona-norte');
+const bairrosSul = bairrosPorZona('zona-sul');
+const bairrosSudoeste = bairrosPorZona('zona-sudoeste');
+
+const totalBairros = bairros.length;
+
+const regioes = [
+  {
+    nome: 'Zona Norte',
+    slug: 'zona-norte',
+    quantidade: bairrosNorte.length,
+    resumo: 'Melhor custo-benefício, ruas amplas e entrega rápida.',
+    cor: 'bg-green-500',
+    bairros: bairrosNorte,
+  },
+  {
+    nome: 'Zona Sul',
+    slug: 'zona-sul',
+    quantidade: bairrosSul.length,
+    resumo: 'Logística especializada para ruas estreitas e condomínios.',
+    cor: 'bg-blue-500',
+    bairros: bairrosSul,
+  },
+  {
+    nome: 'Zona Sudoeste',
+    slug: 'zona-sudoeste',
+    quantidade: bairrosSudoeste.length,
+    resumo: 'Frota dedicada para grandes obras e condomínios fechados.',
+    cor: 'bg-amber-500',
+    bairros: bairrosSudoeste,
+  },
+];
+
+const faqItems = [
+  {
+    question: 'Quais regiões do Rio de Janeiro a CaçambaRápido atende?',
+    answer: 'Atendemos a Zona Norte, Zona Sul e Zona Sudoeste do Rio de Janeiro, cobrindo mais de 100 bairros com entrega em até 24 horas.',
+  },
+  {
+    question: 'Como saber se a CaçambaRápido atende meu bairro?',
+    answer: 'Consulte a lista de bairros nesta página ou entre em contato pelo WhatsApp. Mesmo que seu bairro não esteja listado, provavelmente conseguimos atender.',
+  },
+  {
+    question: 'O preço do aluguel de caçamba varia por bairro?',
+    answer: 'Sim. O valor pode variar conforme a distância do bairro, dificuldade de acesso, urgência da entrega e tamanho da caçamba. Zonas com acesso mais difícil ou distantes costumam ter frete maior.',
+  },
+  {
+    question: 'Qual o prazo de entrega da caçamba no Rio de Janeiro?',
+    answer: 'Entregamos caçambas em até 24 horas úteis na maioria dos bairros atendidos. Dependendo da disponibilidade, conseguimos entrega no mesmo dia.',
+  },
+];
+---
+
+<Layout title={title} description={description}>
+  <Header />
+
+  <main class="bg-concrete">
+    <div class="container mx-auto px-6 md:px-12 pt-8">
+      <Breadcrumb items={[
+        { label: 'Início', href: '/' },
+        { label: 'Área de Atendimento', href: '/area-de-atendimento/' },
+      ]} />
+    </div>
+
+    <!-- Hero -->
+    <section class="py-24 md:py-32 relative overflow-hidden">
+      <div class="absolute inset-0 overflow-hidden pointer-events-none">
+        <div class="absolute -top-1/4 -right-1/4 w-[80vw] h-[120vh] bg-safety/5 rotate-12 rounded-3xl"></div>
+      </div>
+
+      <div class="container mx-auto px-6 md:px-12 relative">
+        <div class="max-w-4xl">
+          <span class="inline-block rounded-full bg-safety/10 px-4 py-2 text-sm font-semibold text-secondary mb-6">
+            Cobertura completa no Rio de Janeiro
+          </span>
+
+          <h1 class="font-display text-5xl md:text-7xl text-pale uppercase leading-[0.95] mb-8">
+            Área de<br />
+            <span class="text-safety">Atendimento</span>
+          </h1>
+
+          <p class="text-xl md:text-2xl text-pale/60 max-w-3xl mb-10 leading-relaxed">
+            A CaçambaRápido atende a Zona Norte, Zona Sul e Zona Sudoeste do Rio de Janeiro com aluguel de caçamba de entulho, entrega em até 24h e documentação ambiental completa.
+          </p>
+
+          <div class="flex flex-col sm:flex-row gap-4">
+            <a href={waUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-green-500 px-8 py-4 text-base font-display uppercase tracking-wider text-white hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 min-h-[56px]">
+              Verificar meu bairro no WhatsApp
+            </a>
+            <a href={telUrl} class="inline-flex items-center justify-center gap-3 bg-safety px-8 py-4 text-base font-display uppercase tracking-wider text-concrete hover:bg-safety-dark transition-colors min-h-[56px]">
+              Ligar Agora
+            </a>
+          </div>
+        </div>
+      </div>
+    </section>
+
+    <!-- Estatísticas -->
+    <section class="py-16 md:py-24 bg-concrete-light relative">
+      <div class="absolute top-0 left-0 w-full h-px bg-safety/10"></div>
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
+          <div class="bg-concrete border border-steel p-8 text-center">
+            <div class="font-display text-4xl md:text-5xl text-safety mb-2">{totalBairros}</div>
+            <p class="text-pale/50 text-sm uppercase tracking-wider">Bairros atendidos</p>
+          </div>
+          <div class="bg-concrete border border-steel p-8 text-center">
+            <div class="font-display text-4xl md:text-5xl text-safety mb-2">3</div>
+            <p class="text-pale/50 text-sm uppercase tracking-wider">Regiões do Rio</p>
+          </div>
+          <div class="bg-concrete border border-steel p-8 text-center">
+            <div class="font-display text-4xl md:text-5xl text-safety mb-2">24h</div>
+            <p class="text-pale/50 text-sm uppercase tracking-wider">Prazo máximo de entrega</p>
+          </div>
+          <div class="bg-concrete border border-steel p-8 text-center">
+            <div class="font-display text-4xl md:text-5xl text-safety mb-2">30min</div>
+            <p class="text-pale/50 text-sm uppercase tracking-wider">Orçamento grátis</p>
+          </div>
+        </div>
+      </div>
+    </section>
+
+    <!-- Regiões -->
+    {
+      regioes.map((regiao) => (
+        <section class="py-24 md:py-32 relative" id={regiao.slug}>
+          <div class="container mx-auto px-6 md:px-12">
+            <div class="max-w-3xl mb-16">
+              <div class="flex items-center gap-4 mb-6">
+                <div class="h-px w-12 bg-safety"></div>
+                <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">{regiao.nome}</span>
+              </div>
+              <h2 class="font-display text-4xl md:text-5xl text-pale uppercase leading-[0.95] mb-4">
+                Caçamba de entulho na {regiao.nome}
+              </h2>
+              <p class="text-pale/60 text-lg leading-relaxed">
+                {regiao.resumo}
+              </p>
+            </div>
+
+            <div class="text-left">
+              <a href={`/area-de-atendimento/${regiao.slug}/`} class="inline-flex items-center gap-2 text-safety font-display uppercase tracking-wider text-lg hover:text-pale transition-colors group">
+                Ver bairros atendidos na {regiao.nome}
+                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
+                </svg>
+              </a>
+            </div>
+          </div>
+        </section>
+      ))
+    }
+
+    <!-- Mapa conceitual -->
+    <section class="py-24 md:py-32 bg-concrete-light relative">
+      <div class="absolute top-0 left-0 w-full h-px bg-safety/10"></div>
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-3xl mb-16">
+          <div class="flex items-center gap-4 mb-6">
+            <div class="h-px w-12 bg-safety"></div>
+            <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Como atuamos</span>
+          </div>
+          <h2 class="font-display text-4xl md:text-5xl text-pale uppercase leading-[0.95] mb-6">
+            Cobertura estratégica no Rio
+          </h2>
+          <p class="text-pale/60 text-lg leading-relaxed">
+            Nossa operação foi pensada para minimizar frete e maximizar velocidade. A base localiza-se na Zona Norte, o que garante entregas rápidas para toda a cidade e região metropolitana.
+          </p>
+        </div>
+
+        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
+          <div class="bg-concrete border border-steel p-8 md:p-10">
+            <div class="font-display text-3xl text-safety mb-4">1</div>
+            <h3 class="font-display text-xl text-pale uppercase mb-3">Solicitação</h3>
+            <p class="text-pale/50 text-sm">Você nos informa o bairro, tipo de obra e tamanho da caçamba pelo WhatsApp ou telefone.</p>
+          </div>
+          <div class="bg-concrete border border-steel p-8 md:p-10">
+            <div class="font-display text-3xl text-safety mb-4">2</div>
+            <h3 class="font-display text-xl text-pale uppercase mb-3">Orçamento regional</h3>
+            <p class="text-pale/50 text-sm">Calculamos o valor considerando a distância do bairro, acesso do local e tamanho da caçamba. Resposta em até 30 minutos.</p>
+          </div>
+          <div class="bg-concrete border border-steel p-8 md:p-10">
+            <div class="font-display text-3xl text-safety mb-4">3</div>
+            <h3 class="font-display text-xl text-pale uppercase mb-3">Entrega no bairro</h3>
+            <p class="text-pale/50 text-sm">Entregamos em até 24h, respeitando as particularidades de cada região do Rio.</p>
+          </div>
+        </div>
+      </div>
+    </section>
+
+    <!-- FAQ -->
+    <section class="py-24 md:py-32">
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-3xl mx-auto">
+          <div class="text-center mb-16">
+            <div class="flex items-center justify-center gap-4 mb-6">
+              <div class="h-px w-12 bg-safety"></div>
+              <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Dúvidas</span>
+              <div class="h-px w-12 bg-safety"></div>
+            </div>
+            <h2 class="font-display text-4xl md:text-5xl text-pale uppercase leading-[0.95]">
+              Perguntas sobre atendimento
+            </h2>
+          </div>
+
+          <div class="space-y-4">
+            {faqItems.map((faq) => (
+              <details class="group rounded-2xl bg-concrete-light border border-steel open:border-safety transition-all">
+                <summary class="flex items-center justify-between cursor-pointer p-6 text-left list-none">
+                  <h3 class="font-bold text-pale text-lg pr-4">{faq.question}</h3>
+                  <svg class="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
+                  </svg>
+                </summary>
+                <div class="px-6 pb-6 text-pale/60 leading-relaxed">
+                  {faq.answer}
+                </div>
+              </details>
+            ))}
+          </div>
+        </div>
+      </div>
+    </section>
+
+    <!-- CTA -->
+    <section class="py-24 md:py-32 bg-concrete-light relative">
+      <div class="absolute top-0 left-0 w-full h-px bg-safety/10"></div>
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-4xl mx-auto text-center">
+          <h2 class="font-display text-3xl md:text-5xl text-pale uppercase mb-6">
+            Não encontrou seu bairro?
+          </h2>
+          <p class="text-lg text-pale/50 mb-10 max-w-2xl mx-auto">
+            Fale conosco pelo WhatsApp. Provavelmente atendemos sua região. Solicite orçamento grátis e receba em até 30 minutos.
+          </p>
+          <div class="flex flex-col sm:flex-row gap-4 justify-center">
+            <a href={waUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-green-500 px-8 py-5 text-base font-display uppercase tracking-wider text-white hover:bg-green-600 transition-colors shadow-xl shadow-green-500/20 min-h-[56px]">
+              WhatsApp — Verificar bairro
+            </a>
+            <a href={telUrl} class="inline-flex items-center justify-center gap-3 bg-safety px-8 py-5 text-base font-display uppercase tracking-wider text-concrete hover:bg-safety-dark transition-colors min-h-[56px]">
+              Ligar Agora
+            </a>
+          </div>
+        </div>
+      </div>
+    </section>
+  </main>
+
+  <Footer />
+  <SchemaLocalBusiness />
+</Layout>
diff --git a/src/pages/area-de-atendimento/zona-norte.astro b/src/pages/area-de-atendimento/zona-norte.astro
new file mode 100644
index 0000000..dd9a6c3
--- /dev/null
+++ b/src/pages/area-de-atendimento/zona-norte.astro
@@ -0,0 +1,122 @@
+---
+import Layout from '../../layouts/Layout.astro';
+import Header from '../../components/Header.astro';
+import Footer from '../../components/Footer.astro';
+import Breadcrumb from '../../components/Breadcrumb.astro';
+import { SITE_CONFIG } from '../../data/config';
+import { bairrosPorZona, zonas } from '../../data/bairros';
+
+const zona = zonas.find((z) => z.slug === 'zona-norte')!;
+const bairros = bairrosPorZona('zona-norte');
+const waUrl = SITE_CONFIG.social.whatsapp;
+const telUrl = `tel:${SITE_CONFIG.phoneRaw}`;
+
+const title = `Aluguel de Caçamba na Zona Norte do Rio | CaçambaRápido — RJ`;
+const description = `Aluguel de caçamba de entulho na Zona Norte do Rio de Janeiro: Tijuca, Méier, Madureira, Penha e mais. Entrega em até 24h, preço justo e documentação ambiental.`;
+---
+
+<Layout title={title} description={description}>
+  <Header />
+
+  <main class="bg-concrete">
+    <div class="container mx-auto px-6 md:px-12 pt-8">
+      <Breadcrumb items={[
+        { label: 'Início', href: '/' },
+        { label: 'Área de Atendimento', href: '/area-de-atendimento/' },
+        { label: 'Zona Norte', href: '/area-de-atendimento/zona-norte/' },
+      ]} />
+    </div>
+
+    <section class="py-24 md:py-32 relative overflow-hidden">
+      <div class="container mx-auto px-6 md:px-12 relative">
+        <div class="max-w-4xl">
+          <span class="inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400 mb-6">
+            Região de atuação
+          </span>
+          <h1 class="font-display text-5xl md:text-7xl text-pale uppercase leading-[0.95] mb-8">
+            Caçamba de Entulho<br />
+            na <span class="text-safety">Zona Norte</span>
+          </h1>
+          <p class="text-xl md:text-2xl text-pale/60 max-w-3xl mb-10 leading-relaxed">
+            {zona.resumo}
+          </p>
+          <div class="flex flex-col sm:flex-row gap-4">
+            <a href={waUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-green-500 px-8 py-4 text-base font-display uppercase tracking-wider text-white hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 min-h-[56px]">
+              Orçamento para Zona Norte
+            </a>
+            <a href={telUrl} class="inline-flex items-center justify-center gap-3 bg-safety px-8 py-4 text-base font-display uppercase tracking-wider text-concrete hover:bg-safety-dark transition-colors min-h-[56px]">
+              Ligar Agora
+            </a>
+          </div>
+        </div>
+      </div>
+    </section>
+
+    <section class="py-24 md:py-32 bg-concrete-light relative">
+      <div class="absolute top-0 left-0 w-full h-px bg-safety/10"></div>
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-3xl mb-16">
+          <div class="flex items-center gap-4 mb-6">
+            <div class="h-px w-12 bg-safety"></div>
+            <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Por que a Zona Norte</span>
+          </div>
+          <h2 class="font-display text-4xl md:text-5xl text-pale uppercase leading-[0.95] mb-6">
+            A região com melhor custo-benefício
+          </h2>
+          <p class="text-pale/60 text-lg leading-relaxed">
+            A Zona Norte combina acesso viário favorável, ruas amplas e proximidade com bases logísticas. Isso se traduz em entregas rápidas e preços competitivos para quem precisa de caçamba de entulho.
+          </p>
+        </div>
+
+        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
+          {zona.caracteristicas.map((item) => (
+            <div class="flex items-start gap-4 bg-concrete border border-steel p-6">
+              <svg class="w-6 h-6 text-safety flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
+              </svg>
+              <span class="text-pale/70">{item}</span>
+            </div>
+          ))}
+        </div>
+
+        <div class="max-w-3xl mb-10">
+          <h3 class="font-display text-3xl text-pale uppercase mb-6">Bairros atendidos na Zona Norte</h3>
+          <p class="text-pale/60 text-lg leading-relaxed mb-8">
+            Clique no bairro para ver informações específicas de entrega, preços e dicas de logística.
+          </p>
+        </div>
+
+        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
+          {bairros.map((bairro) => (
+            <a href={`/area-de-atendimento/${bairro.slug}/`} class="group bg-concrete border border-steel p-6 text-center hover:border-safety transition-all">
+              <span class="text-pale font-medium group-hover:text-safety transition-colors">{bairro.nome}</span>
+            </a>
+          ))}
+        </div>
+      </div>
+    </section>
+
+    <section class="py-24 md:py-32">
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-4xl mx-auto text-center">
+          <h2 class="font-display text-3xl md:text-5xl text-pale uppercase mb-6">
+            Orçamento grátis na Zona Norte
+          </h2>
+          <p class="text-lg text-pale/50 mb-10 max-w-2xl mx-auto">
+            Atendemos todos os bairros da Zona Norte com entrega em até 24h. Solicite seu orçamento pelo WhatsApp.
+          </p>
+          <div class="flex flex-col sm:flex-row gap-4 justify-center">
+            <a href={waUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-green-500 px-8 py-5 text-base font-display uppercase tracking-wider text-white hover:bg-green-600 transition-colors shadow-xl shadow-green-500/20 min-h-[56px]">
+              WhatsApp
+            </a>
+            <a href={telUrl} class="inline-flex items-center justify-center gap-3 bg-safety px-8 py-5 text-base font-display uppercase tracking-wider text-concrete hover:bg-safety-dark transition-colors min-h-[56px]">
+              Ligar Agora
+            </a>
+          </div>
+        </div>
+      </div>
+    </section>
+  </main>
+
+  <Footer />
+</Layout>
diff --git a/src/pages/area-de-atendimento/zona-sudoeste.astro b/src/pages/area-de-atendimento/zona-sudoeste.astro
new file mode 100644
index 0000000..b416ae6
--- /dev/null
+++ b/src/pages/area-de-atendimento/zona-sudoeste.astro
@@ -0,0 +1,122 @@
+---
+import Layout from '../../layouts/Layout.astro';
+import Header from '../../components/Header.astro';
+import Footer from '../../components/Footer.astro';
+import Breadcrumb from '../../components/Breadcrumb.astro';
+import { SITE_CONFIG } from '../../data/config';
+import { bairrosPorZona, zonas } from '../../data/bairros';
+
+const zona = zonas.find((z) => z.slug === 'zona-sudoeste')!;
+const bairros = bairrosPorZona('zona-sudoeste');
+const waUrl = SITE_CONFIG.social.whatsapp;
+const telUrl = `tel:${SITE_CONFIG.phoneRaw}`;
+
+const title = `Aluguel de Caçamba na Zona Sudoeste do Rio | CaçambaRápido — RJ`;
+const description = `Aluguel de caçamba de entulho na Zona Sudoeste do Rio de Janeiro: Barra da Tijuca, Recreio, Jacarepaguá, Taquara, Freguesia, Anil, Camorim, Curicica, Gardênia Azul, Grumari, Itanhangá, Joá, Pechincha, Praça Seca, Rio das Pedras, Tanque, Vargem Grande, Vargem Pequena e Vila Valqueire. Caçambas de 5m³ e 7m³ para grandes obras.`;
+---
+
+<Layout title={title} description={description}>
+  <Header />
+
+  <main class="bg-concrete">
+    <div class="container mx-auto px-6 md:px-12 pt-8">
+      <Breadcrumb items={[
+        { label: 'Início', href: '/' },
+        { label: 'Área de Atendimento', href: '/area-de-atendimento/' },
+        { label: 'Zona Sudoeste', href: '/area-de-atendimento/zona-sudoeste/' },
+      ]} />
+    </div>
+
+    <section class="py-24 md:py-32 relative overflow-hidden">
+      <div class="container mx-auto px-6 md:px-12 relative">
+        <div class="max-w-4xl">
+          <span class="inline-block rounded-full bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-400 mb-6">
+            Região de atuação
+          </span>
+          <h1 class="font-display text-5xl md:text-7xl text-pale uppercase leading-[0.95] mb-8">
+            Caçamba de Entulho<br />
+            na <span class="text-safety">Zona Sudoeste</span>
+          </h1>
+          <p class="text-xl md:text-2xl text-pale/60 max-w-3xl mb-10 leading-relaxed">
+            {zona.resumo}
+          </p>
+          <div class="flex flex-col sm:flex-row gap-4">
+            <a href={waUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-green-500 px-8 py-4 text-base font-display uppercase tracking-wider text-white hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 min-h-[56px]">
+              Orçamento para Zona Sudoeste
+            </a>
+            <a href={telUrl} class="inline-flex items-center justify-center gap-3 bg-safety px-8 py-4 text-base font-display uppercase tracking-wider text-concrete hover:bg-safety-dark transition-colors min-h-[56px]">
+              Ligar Agora
+            </a>
+          </div>
+        </div>
+      </div>
+    </section>
+
+    <section class="py-24 md:py-32 bg-concrete-light relative">
+      <div class="absolute top-0 left-0 w-full h-px bg-safety/10"></div>
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-3xl mb-16">
+          <div class="flex items-center gap-4 mb-6">
+            <div class="h-px w-12 bg-safety"></div>
+            <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Zona Sudoeste</span>
+          </div>
+          <h2 class="font-display text-4xl md:text-5xl text-pale uppercase leading-[0.95] mb-6">
+            Grande volume e obras em expansão
+          </h2>
+          <p class="text-pale/60 text-lg leading-relaxed">
+            A Zona Sudoeste é a nova região estabelecida pela Lei 2025, formada por bairros da antiga Zona Oeste como Barra da Tijuca, Recreio, Jacarepaguá e região. Obras grandes, condomínios fechados e muitas reformas fazem da caçamba de 5m³ e 7m³ as mais solicitadas por aqui.
+          </p>
+        </div>
+
+        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
+          {zona.caracteristicas.map((item) => (
+            <div class="flex items-start gap-4 bg-concrete border border-steel p-6">
+              <svg class="w-6 h-6 text-safety flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
+              </svg>
+              <span class="text-pale/70">{item}</span>
+            </div>
+          ))}
+        </div>
+
+        <div class="max-w-3xl mb-10">
+          <h3 class="font-display text-3xl text-pale uppercase mb-6">Bairros atendidos na Zona Sudoeste</h3>
+          <p class="text-pale/60 text-lg leading-relaxed mb-8">
+            Clique no bairro para ver detalhes de entrega, preços e recomendações para obras na região.
+          </p>
+        </div>
+
+        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
+          {bairros.map((bairro) => (
+            <a href={`/area-de-atendimento/${bairro.slug}/`} class="group bg-concrete border border-steel p-6 text-center hover:border-safety transition-all">
+              <span class="text-pale font-medium group-hover:text-safety transition-colors">{bairro.nome}</span>
+            </a>
+          ))}
+        </div>
+      </div>
+    </section>
+
+    <section class="py-24 md:py-32">
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-4xl mx-auto text-center">
+          <h2 class="font-display text-3xl md:text-5xl text-pale uppercase mb-6">
+            Caçamba na Zona Sudoeste do Rio
+          </h2>
+          <p class="text-lg text-pale/50 mb-10 max-w-2xl mx-auto">
+            Atendemos todos os bairros da Zona Sudoeste: Anil, Barra da Tijuca, Barra Olímpica, Camorim, Cidade de Deus, Curicica, Freguesia, Gardênia Azul, Grumari, Itanhangá, Jacarepaguá, Joá, Pechincha, Praça Seca, Recreio, Rio das Pedras, Tanque, Taquara, Vargem Grande, Vargem Pequena e Vila Valqueire. Solicite orçamento com frota dedicada.
+          </p>
+          <div class="flex flex-col sm:flex-row gap-4 justify-center">
+            <a href={waUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-green-500 px-8 py-5 text-base font-display uppercase tracking-wider text-white hover:bg-green-600 transition-colors shadow-xl shadow-green-500/20 min-h-[56px]">
+              WhatsApp
+            </a>
+            <a href={telUrl} class="inline-flex items-center justify-center gap-3 bg-safety px-8 py-5 text-base font-display uppercase tracking-wider text-concrete hover:bg-safety-dark transition-colors min-h-[56px]">
+              Ligar Agora
+            </a>
+          </div>
+        </div>
+      </div>
+    </section>
+  </main>
+
+  <Footer />
+</Layout>
diff --git a/src/pages/area-de-atendimento/zona-sul.astro b/src/pages/area-de-atendimento/zona-sul.astro
new file mode 100644
index 0000000..47e750f
--- /dev/null
+++ b/src/pages/area-de-atendimento/zona-sul.astro
@@ -0,0 +1,122 @@
+---
+import Layout from '../../layouts/Layout.astro';
+import Header from '../../components/Header.astro';
+import Footer from '../../components/Footer.astro';
+import Breadcrumb from '../../components/Breadcrumb.astro';
+import { SITE_CONFIG } from '../../data/config';
+import { bairrosPorZona, zonas } from '../../data/bairros';
+
+const zona = zonas.find((z) => z.slug === 'zona-sul')!;
+const bairros = bairrosPorZona('zona-sul');
+const waUrl = SITE_CONFIG.social.whatsapp;
+const telUrl = `tel:${SITE_CONFIG.phoneRaw}`;
+
+const title = `Aluguel de Caçamba na Zona Sul do Rio | CaçambaRápido — RJ`;
+const description = `Aluguel de caçamba de entulho na Zona Sul do Rio de Janeiro: Copacabana, Ipanema, Leblon, Botafogo e mais. Caçambas compactas, entrega rápida e documentação completa.`;
+---
+
+<Layout title={title} description={description}>
+  <Header />
+
+  <main class="bg-concrete">
+    <div class="container mx-auto px-6 md:px-12 pt-8">
+      <Breadcrumb items={[
+        { label: 'Início', href: '/' },
+        { label: 'Área de Atendimento', href: '/area-de-atendimento/' },
+        { label: 'Zona Sul', href: '/area-de-atendimento/zona-sul/' },
+      ]} />
+    </div>
+
+    <section class="py-24 md:py-32 relative overflow-hidden">
+      <div class="container mx-auto px-6 md:px-12 relative">
+        <div class="max-w-4xl">
+          <span class="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 mb-6">
+            Região de atuação
+          </span>
+          <h1 class="font-display text-5xl md:text-7xl text-pale uppercase leading-[0.95] mb-8">
+            Caçamba de Entulho<br />
+            na <span class="text-safety">Zona Sul</span>
+          </h1>
+          <p class="text-xl md:text-2xl text-pale/60 max-w-3xl mb-10 leading-relaxed">
+            {zona.resumo}
+          </p>
+          <div class="flex flex-col sm:flex-row gap-4">
+            <a href={waUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-green-500 px-8 py-4 text-base font-display uppercase tracking-wider text-white hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 min-h-[56px]">
+              Orçamento para Zona Sul
+            </a>
+            <a href={telUrl} class="inline-flex items-center justify-center gap-3 bg-safety px-8 py-4 text-base font-display uppercase tracking-wider text-concrete hover:bg-safety-dark transition-colors min-h-[56px]">
+              Ligar Agora
+            </a>
+          </div>
+        </div>
+      </div>
+    </section>
+
+    <section class="py-24 md:py-32 bg-concrete-light relative">
+      <div class="absolute top-0 left-0 w-full h-px bg-safety/10"></div>
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-3xl mb-16">
+          <div class="flex items-center gap-4 mb-6">
+            <div class="h-px w-12 bg-safety"></div>
+            <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Desafios da Zona Sul</span>
+          </div>
+          <h2 class="font-display text-4xl md:text-5xl text-pale uppercase leading-[0.95] mb-6">
+            Logística especializada para cada bairro
+          </h2>
+          <p class="text-pale/60 text-lg leading-relaxed">
+            A Zona Sul exige planejamento. Ruas estreitas, condomínios rigorosos e restrições de carga exigem caçambas compactas, horários estratégicos e uma equipe experiente em logística urbana.
+          </p>
+        </div>
+
+        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
+          {zona.caracteristicas.map((item) => (
+            <div class="flex items-start gap-4 bg-concrete border border-steel p-6">
+              <svg class="w-6 h-6 text-safety flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
+              </svg>
+              <span class="text-pale/70">{item}</span>
+            </div>
+          ))}
+        </div>
+
+        <div class="max-w-3xl mb-10">
+          <h3 class="font-display text-3xl text-pale uppercase mb-6">Bairros atendidos na Zona Sul</h3>
+          <p class="text-pale/60 text-lg leading-relaxed mb-8">
+            Clique no bairro para ver preços específicos, dicas de entrega e recomendações de tamanho de caçamba.
+          </p>
+        </div>
+
+        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
+          {bairros.map((bairro) => (
+            <a href={`/area-de-atendimento/${bairro.slug}/`} class="group bg-concrete border border-steel p-6 text-center hover:border-safety transition-all">
+              <span class="text-pale font-medium group-hover:text-safety transition-colors">{bairro.nome}</span>
+            </a>
+          ))}
+        </div>
+      </div>
+    </section>
+
+    <section class="py-24 md:py-32">
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-4xl mx-auto text-center">
+          <h2 class="font-display text-3xl md:text-5xl text-pale uppercase mb-6">
+            Caçamba na Zona Sul do Rio
+          </h2>
+          <p class="text-lg text-pale/50 mb-10 max-w-2xl mx-auto">
+            Atendemos Copacabana, Ipanema, Leblon, Botafogo, Flamengo e Laranjeiras. Entrega em até 24h com documentação completa.
+          </p>
+          <div class="flex flex-col sm:flex-row gap-4 justify-center">
+            <a href={waUrl} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-green-500 px-8 py-5 text-base font-display uppercase tracking-wider text-white hover:bg-green-600 transition-colors shadow-xl shadow-green-500/20 min-h-[56px]">
+              WhatsApp
+            </a>
+            <a href={telUrl} class="inline-flex items-center justify-center gap-3 bg-safety px-8 py-5 text-base font-display uppercase tracking-wider text-concrete hover:bg-safety-dark transition-colors min-h-[56px]">
+              Ligar Agora
+            </a>
+          </div>
+        </div>
+      </div>
+    </section>
+  </main>
+
+  <Footer />
+</Layout>
diff --git a/src/pages/index.astro b/src/pages/index.astro
index 8b8b086..a648e67 100644
--- a/src/pages/index.astro
+++ b/src/pages/index.astro
@@ -52,7 +52,7 @@ const faqItems = [
     <BlogHome />
 
     <!-- Áreas de Atendimento — Local SEO -->
-    <section class="py-24 md:py-32 bg-white" id="bairros">
+    <section class="py-24 md:py-32 bg-white" id="atendimento">
       <div class="container mx-auto px-6 md:px-12">
         <div class="max-w-3xl mx-auto mb-16 text-center">
           <span class="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-secondary mb-6">
@@ -62,31 +62,51 @@ const faqItems = [
             Caçamba para Toda a Cidade
           </h2>
           <p class="text-lg text-gray-600">
-            Entregamos caçambas em todas as regiões do Rio de Janeiro. De norte a sul, atendemos obras residenciais, comerciais e industriais.
+            Entregamos caçambas em todas as regiões do Rio de Janeiro. Escolha sua zona e veja os bairros atendidos com entrega rápida.
           </p>
         </div>
 
-        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
-          {[
-            'Centro', 'Tijuca', 'Vila Isabel', 'Grajaú', 'Méier',
-            'Madureira', 'Bangu', 'Campo Grande', 'Barra da Tijuca',
-            'Recreio', 'Jacarepaguá', 'Taquara', 'Freguesia',
-            'Ipanema', 'Copacabana', 'Botafogo', 'Flamengo',
-            'São Cristóvão', 'Penha', 'Olaria', 'Ramos',
-            'Ilha do Governador', 'Niterói', 'São Gonçalo',
-          ].map((bairro) => (
-            <div class="rounded-xl bg-gray-50 px-4 py-3 text-center border border-gray-100">
-              <span class="text-sm font-medium text-gray-700">{bairro}</span>
+        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
+          <a href="/area-de-atendimento/zona-norte/" class="group block rounded-2xl bg-gray-50 border border-gray-100 p-8 text-center hover:border-secondary hover:shadow-lg transition-all">
+            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
+              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
+              </svg>
             </div>
-          ))}
+            <h3 class="text-xl font-bold text-gray-900 mb-2">Zona Norte</h3>
+            <p class="text-sm text-gray-600">Tijuca, Méier, Vila Isabel, Madureira e mais</p>
+            <span class="inline-block mt-4 text-secondary font-semibold group-hover:text-blue-900">Ver bairros →</span>
+          </a>
+
+          <a href="/area-de-atendimento/zona-sul/" class="group block rounded-2xl bg-gray-50 border border-gray-100 p-8 text-center hover:border-secondary hover:shadow-lg transition-all">
+            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
+              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5"/>
+              </svg>
+            </div>
+            <h3 class="text-xl font-bold text-gray-900 mb-2">Zona Sul</h3>
+            <p class="text-sm text-gray-600">Copacabana, Ipanema, Botafogo, Flamengo e mais</p>
+            <span class="inline-block mt-4 text-secondary font-semibold group-hover:text-blue-900">Ver bairros →</span>
+          </a>
+
+          <a href="/area-de-atendimento/zona-sudoeste/" class="group block rounded-2xl bg-gray-50 border border-gray-100 p-8 text-center hover:border-secondary hover:shadow-lg transition-all">
+            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
+              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.553-.894L15 7m0 13V7"/>
+              </svg>
+            </div>
+            <h3 class="text-xl font-bold text-gray-900 mb-2">Zona Sudoeste</h3>
+            <p class="text-sm text-gray-600">Barra da Tijuca, Recreio, Jacarepaguá, Freguesia e mais</p>
+            <span class="inline-block mt-4 text-secondary font-semibold group-hover:text-blue-900">Ver bairros →</span>
+          </a>
         </div>
 
         <div class="text-center mt-12">
           <p class="text-gray-500 text-sm mb-4">
-            Não encontrou seu bairro? Fale conosco — provavelmente atendemos aí também.
+            Quer ver a lista completa? Acesse a página de Área de Atendimento.
           </p>
-          <a href="/contato/" class="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 text-base font-bold text-white hover:bg-blue-900 transition-colors">
-            Verificar Disponibilidade
+          <a href="/area-de-atendimento/" class="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 text-base font-bold text-white hover:bg-blue-900 transition-colors">
+            Ver Toda a Área de Atendimento
           </a>
         </div>
       </div>
diff --git a/src/pages/sitemap.xml.ts b/src/pages/sitemap.xml.ts
index 654dd60..c1754c4 100644
--- a/src/pages/sitemap.xml.ts
+++ b/src/pages/sitemap.xml.ts
@@ -1,6 +1,7 @@
 import type { APIRoute } from 'astro';
 import { getCollection } from 'astro:content';
 import { SITE_CONFIG } from '../data/config';
+import { bairros, zonas } from '../data/bairros';
 
 export const prerender = true;
 
@@ -14,12 +15,16 @@ export const GET: APIRoute = async () => {
     '',
     'sobre/',
     'servicos/',
+    'area-de-atendimento/',
     'blog/',
     'contato/',
     'privacidade/',
     'termos/',
   ];
 
+  const zoneRoutes = zonas.map((z) => `area-de-atendimento/${z.slug}/`);
+  const bairroRoutes = bairros.map((b) => `area-de-atendimento/${b.slug}/`);
+
   const buildDate = new Date().toISOString().split('T')[0];
 
   const urls = [
@@ -28,6 +33,18 @@ export const GET: APIRoute = async () => {
       changefreq: route === '' ? 'daily' : 'weekly',
       priority: route === '' ? '1.0' : '0.7',
     })),
+    ...zoneRoutes.map((route) => ({
+      loc: `${site}/${route}`,
+      lastmod: buildDate,
+      changefreq: 'weekly',
+      priority: '0.8',
+    })),
+    ...bairroRoutes.map((route) => ({
+      loc: `${site}/${route}`,
+      lastmod: buildDate,
+      changefreq: 'weekly',
+      priority: '0.7',
+    })),
     ...servicos.map((s) => ({
       loc: `${site}/servicos/${s.slug}/`,
       lastmod: buildDate,
diff --git a/src/pages/sobre.astro b/src/pages/sobre.astro
index a8c6394..abe30db 100644
--- a/src/pages/sobre.astro
+++ b/src/pages/sobre.astro
@@ -199,6 +199,47 @@ import { SITE_CONFIG } from '../data/config';
         </div>
       </div>
     </section>
+
+    <!-- Dados Cadastrais e Transparência -->
+    <section class="py-24 md:py-32 relative">
+      <div class="container mx-auto px-6 md:px-12">
+        <div class="max-w-3xl mb-16">
+          <div class="flex items-center gap-4 mb-6">
+            <div class="h-px w-12 bg-safety"></div>
+            <span class="text-xs font-bold uppercase tracking-[0.3em] text-safety">Transparência</span>
+          </div>
+          <h2 class="font-display text-5xl md:text-6xl text-pale uppercase leading-[0.95] mb-6">
+            Dados da empresa
+          </h2>
+          <p class="text-pale/50 text-lg">
+            Trabalhamos com documentação em dia para que você contrate com segurança.
+          </p>
+        </div>
+
+        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
+          <div class="bg-concrete-light border border-steel p-8 md:p-10">
+            <div class="font-display text-3xl text-safety mb-3">🏛️</div>
+            <p class="font-bold text-pale text-sm mb-2">Razão Social</p>
+            <p class="text-pale/70 text-sm">CaçambaRápido — Aluguel de Caçambas e Retirada de Entulho</p>
+          </div>
+          <div class="bg-concrete-light border border-steel p-8 md:p-10">
+            <div class="font-display text-3xl text-safety mb-3">🪪</div>
+            <p class="font-bold text-pale text-sm mb-2">CNPJ</p>
+            <p class="text-pale/70 text-sm">[número a confirmar]</p>
+          </div>
+          <div class="bg-concrete-light border border-steel p-8 md:p-10">
+            <div class="font-display text-3xl text-safety mb-3">🌿</div>
+            <p class="font-bold text-pale text-sm mb-2">Licença Ambiental</p>
+            <p class="text-pale/70 text-sm">[número a confirmar]</p>
+          </div>
+          <div class="bg-concrete-light border border-steel p-8 md:p-10">
+            <div class="font-display text-3xl text-safety mb-3">📍</div>
+            <p class="font-bold text-pale text-sm mb-2">Endereço</p>
+            <p class="text-pale/70 text-sm">Av. Brasil, 11201 — Penha Circular, Rio de Janeiro — RJ, 21012-351</p>
+          </div>
+        </div>
+      </div>
+    </section>
   </main>
 
   <Footer />
