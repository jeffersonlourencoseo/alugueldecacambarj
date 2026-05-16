export const SITE_CONFIG = {
  name: 'CaçambaRápido',
  fullName: 'CaçambaRápido - Aluguel de Caçambas e Retirada de Entulho',
  domain: 'https://alugueldecacambario.com.br',
  lang: 'pt-BR',
  locale: 'pt_BR',

  // NAP (Name, Address, Phone) - Dados locais
  phone: '(11) 98765-4321',
  phoneRaw: '+5511987654321',
  phoneE164: '5511987654321',
  whatsapp: '5511987654321',
  email: 'contato@alugueldecacambario.com.br',

  address: {
    streetAddress: 'Rua das Caçambas, 123',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '01234-567',
    addressCountry: 'BR',
  },

  geo: {
    latitude: '-23.550520',
    longitude: '-46.633308',
  },

  hours: [
    { day: 'Monday', opens: '07:00', closes: '18:00' },
    { day: 'Tuesday', opens: '07:00', closes: '18:00' },
    { day: 'Wednesday', opens: '07:00', closes: '18:00' },
    { day: 'Thursday', opens: '07:00', closes: '18:00' },
    { day: 'Friday', opens: '07:00', closes: '18:00' },
    { day: 'Saturday', opens: '08:00', closes: '12:00' },
  ],

  social: {
    whatsapp: 'https://wa.me/5511987654321?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20ca%C3%A7amba.',
  },

  description:
    'Aluguel de caçambas estacionárias com entrega em 24h, preço justo e documentação ambiental. Retirada de entulho para obras e reformas na Região Metropolitana de São Paulo.',

  ogImage: '/og-image.jpg',

  keywords: [
    'aluguel de caçamba',
    'caçamba estacionária',
    'retirada de entulho',
    'locação de caçamba',
    'aluguel de caçamba sp',
    'caçamba para obra',
    'descarte de entulho',
    'caçamba 3m3',
    'caçamba 5m3',
    'caçamba 7m3',
  ],
} as const;
