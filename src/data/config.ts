export const SITE_CONFIG = {
  name: 'CaçambaRápido',
  fullName: 'CaçambaRápido - Aluguel de Caçambas e Retirada de Entulho',
  domain: 'https://alugueldecacambario.com.br',
  lang: 'pt-BR',
  locale: 'pt_BR',

  // NAP (Name, Address, Phone) - Dados locais
  phone: '(21) 99775-1577',
  phoneRaw: '+5521997751577',
  phoneE164: '5521997751577',
  whatsapp: '5521997751577',
  email: 'contato@alugueldecacambario.com.br',

  address: {
    streetAddress: 'Av. Brasil, 11201 - Penha Circular',
    addressLocality: 'Rio de Janeiro',
    addressRegion: 'RJ',
    postalCode: '21012-351',
    addressCountry: 'BR',
  },

  geo: {
    latitude: '-22.8383',
    longitude: '-43.2814',
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
    whatsapp: 'https://wa.me/5521997751577?text=Ol%C3%A1%2C%20achei%20voc%C3%AAs%20no%20google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%21',
  },

  description:
    'Aluguel de caçambas estacionárias com entrega em 24h, preço justo e documentação ambiental. Retirada de entulho para obras e reformas no Rio de Janeiro - RJ.',

  ogImage: '/og-image.svg',

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
