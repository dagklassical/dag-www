import { defineCollection, z } from 'astro:content';

// Definir el esquema para noticias
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

// Definir el esquema para discografía/álbumes
const albumsCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    date: z.date(),
  }),
});

// Exportar las colecciones
export const collections = {
  'news': newsCollection,
  'albums': albumsCollection,
};