import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const servicosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    preco: z.string().optional(),
    image: z.string().optional(),
    capacidade: z.string().optional(),
    idealPara: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  servicos: servicosCollection,
};
